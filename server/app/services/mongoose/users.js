const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const Participant = require("../../api/v1/participants/model");
const { BadRequestError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const { deleteImages, checkingImage } = require("./images");

const createOrganizer = async (req) => {
  const { organizer, name, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan konfirmasi password tidak cocok");
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    name,
    email,
    password,
    organizer: result._id,
    role,
  });

  delete users._doc.password;
  return users;
};

const createUsers = async (req) => {
  const { name, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan konfirmasi password tidak cocok");
  }

  const result = await Users.create({
    name,
    email,
    password,
    organizer: req.user.organizer,
    role,
  });

  return result;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

// Participant CRUD
const createParticipant = async (req) => {
  const { firstName, lastName, email, password, role, image } = req.body;

  // cari image dengan field image
  await checkingImage(image);

  // cari talents dengan field name
  const check = await Participant.findOne({
    email,
  });

  // apa bila check true / data talents sudah ada maka kita tampilkan error bad request dengan message pembicara duplikat
  if (check) throw new BadRequestError("email sudah pernah dipakai");

  const result = await Participant.create({
    firstName,
    lastName,
    email,
    password,
    status: "aktif",
    otp: "xxxx",
    role,
    image,
  });

  return result;
};

const getAllParticipants = async (req) => {
  const { keyword } = req.query;

  let condition;

  if (keyword) {
    condition = { ...condition, email: { $regex: keyword, $options: "i" } };
  }

  const result = await Participant.find(condition)
    .populate({
      path: "image",
      select: "public_id url",
    })
    .select("_id email firstName lastName role image");

  return result;
};

const getOneParticipants = async (req) => {
  const { id } = req.params;

  const result = await Participant.findOne({
    _id: id,
  })
    .populate({
      path: "image",
      select: "public_id url",
    })
    .select("_id firstName lastName email role image");

  if (!result)
    throw new NotFoundError(`Tidak ada pembicara dengan id :  ${id}`);

  return result;
};

const updateParticipants = async (req) => {
  const { id } = req.params;
  let { firstName, lastName, email, password, role, image } = req.body;

  // cari image dengan field image
  // await checkingImage(image);

  // Hapus image lama
  const participant = await Participant.findOne({ _id: id });

  if (image) {
    await deleteImages(participant);
  }

  // cari talents dengan field name dan id selain dari yang dikirim dari params
  const check = await Participant.findOne({
    email,
    _id: { $ne: id },
  });

  // apa bila check true / data talents sudah ada maka kita tampilkan error bad request dengan message pembicara nama duplikat
  if (check) throw new BadRequestError("email sudah ada");

  if (password != "") {
    updatePassword = await bcrypt.hash(password, 12);
  } else {
    updatePassword = participant.password;
  }

  const result = await Participant.findOneAndUpdate(
    { _id: id },
    {
      firstName,
      lastName,
      email,
      password: updatePassword,
      role,
      image,
      role,
    },
    { new: true, runValidators: true }
  );

  // jika id result false / null maka akan menampilkan error `Tidak ada pembicara dengan id` yang dikirim client
  if (!result)
    throw new NotFoundError(`Tidak ada participant dengan id :  ${id}`);

  return result;
};

const deleteParticipants = async (req) => {
  const { id } = req.params;

  const result = await Participant.findOne({
    _id: id,
  });

  if (!result)
    throw new NotFoundError(`Tidak ada participant dengan id :  ${id}`);

  await deleteImages(result);
  await result.remove();

  return result;
};

module.exports = {
  createOrganizer,
  createUsers,
  getAllUsers,

  createParticipant,
  updateParticipants,
  getAllParticipants,
  getOneParticipants,
  deleteParticipants,
};

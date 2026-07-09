const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors");
const cloudinary = require("../../utils/cloudinary");

const generateUrlImage = async (req) => {
  const result = `uploads/${req.file.filename}`;
  return result;
};

const createImages = async (req) => {
  const upload = await cloudinary.uploader.upload(req.file.path, {
    folder: "semina",
    width: 300,
    crop: "scale",
  });

  const result = await Images.create({
    public_id: upload.public_id,
    url: upload.secure_url,
  });

  return result;
  // const result = await Images.create({
  //   name: req.file
  //     ? `uploads/${req.file.filename}`
  //     : "uploads/avatar/default.png",
  // });
};

const deleteImages = async (req) => {
  const image = await Images.findOne({ _id: req.image });
  const imagePublicId = image.public_id;

  const result = await image
    .remove()
    .then(() => cloudinary.uploader.destroy(imagePublicId));

  return result;
};

const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};

module.exports = {
  generateUrlImage,
  createImages,
  checkingImage,
  deleteImages,
};

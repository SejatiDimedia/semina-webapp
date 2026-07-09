// import services images
const { createImages } = require("../../../services/mongoose/images");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../../../utils/cloudinary");

const create = async (req, res) => {
  try {
    console.log(req.file);
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { create };

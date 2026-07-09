const {
  getAllParticipants,
  getOneParticipants,
  createParticipant,
  updateParticipants,
  deleteParticipants,
} = require("../../../services/mongoose/users");

const { StatusCodes } = require("http-status-codes");

const participantIndex = async (req, res, next) => {
  try {
    const result = await getAllParticipants(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const participantCreate = async (req, res, next) => {
  try {
    const result = await createParticipant(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const participantFind = async (req, res, next) => {
  try {
    const result = await getOneParticipants(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const participantUpdate = async (req, res, next) => {
  try {
    const result = await updateParticipants(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const participantDestroy = async (req, res, next) => {
  try {
    const result = await deleteParticipants(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  participantIndex,
  participantFind,
  participantCreate,
  participantUpdate,
  participantDestroy,
};

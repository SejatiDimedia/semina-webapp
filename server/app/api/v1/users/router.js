const express = require("express");
const router = express();
const {
  participantIndex,
  participantCreate,
  participantUpdate,
  participantDestroy,
  participantFind,
} = require("./controller");

const { authenticatedUser } = require("../../../middlewares/auth");
router.get("/participants", authenticatedUser, participantIndex);
router.post("/participants", authenticatedUser, participantCreate);
router.get("/participants/:id", authenticatedUser, participantFind);
router.put("/participants/:id", authenticatedUser, participantUpdate);
router.delete("/participants/:id", authenticatedUser, participantDestroy);

module.exports = router;

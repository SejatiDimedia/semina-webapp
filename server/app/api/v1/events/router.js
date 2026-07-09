const express = require("express");
const router = express();
const { create, index, find, update, destroy, changeStatus } = require("./controller");
const {
	authenticatedUser,
	authorizeRules,
} = require("../../../middlewares/auth");

router.get("/events", authenticatedUser, authorizeRules("organizer"), index);
router.get("/events/:id", authenticatedUser, authorizeRules("organizer"), find);
router.put(
	"/events/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	update
);
router.delete(
	"/events/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	destroy
);
router.post("/events", authenticatedUser, authorizeRules("organizer"), create);
router.put(
	'/events/:id/status',
	authenticatedUser,
	authorizeRules('organizer'),
	changeStatus
);
module.exports = router;

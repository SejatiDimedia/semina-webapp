const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");
const {
	authenticatedUser,
	authorizeRules,
} = require("../../../middlewares/auth");

router.get("/talents", authenticatedUser, authorizeRules("organizer"), index);
router.get(
	"/talents/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	find
);
router.put(
	"/talents/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	update
);
router.delete(
	"/talents/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	destroy
);
router.post("/talents", authenticatedUser, authorizeRules("organizer"), create);

module.exports = router;

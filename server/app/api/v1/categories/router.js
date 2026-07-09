const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");
const {
	authenticatedUser,
	authorizeRules,
} = require("../../../middlewares/auth");

router.get(
	"/categories",
	authenticatedUser,
	authorizeRules("organizer"),
	index
);

router.get(
	"/categories/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	find
);

router.put(
	"/categories/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	update
);

router.post(
	"/categories",
	authenticatedUser,
	authorizeRules("organizer"),
	create
);

router.delete(
	"/categories/:id",
	authenticatedUser,
	authorizeRules("organizer"),
	destroy
);

module.exports = router;

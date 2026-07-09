const express = require("express");
const router = express();
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require("./controller");
const {
	authenticatedUser,
	authorizeRules,
} = require("../../../middlewares/auth");

router.post(
	"/organizers",
	authenticatedUser,
	authorizeRules("owner"),
	createCMSOrganizer
);

router.post(
	"/users",
	authenticatedUser,
	authorizeRules("organizer"),
	createCMSUser
);

router.get('/users', authenticatedUser, authorizeRules('owner'), getCMSUsers);

module.exports = router;

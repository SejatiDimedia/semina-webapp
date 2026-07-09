const express = require('express');
const router = express();
const { index } = require('./controller');
const {
	authenticatedUser,
	authorizeRules,
} = require('../../../middlewares/auth');

router.get(
	'/orders',
	authenticatedUser,
	authorizeRules('organizer', 'admin', 'owner'),
	index
);

module.exports = router;
const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const {
	authenticatedUser,
	authorizeRules,
} = require('../../../middlewares/auth');

router.get('/payments', authenticatedUser, authorizeRules('organizer'), index);
router.get(
	'/payments/:id',
	authenticatedUser,
	authorizeRules('organizer'),
	find
);
router.put(
	'/payments/:id',
	authenticatedUser,
	authorizeRules('organizer'),
	update
);
router.delete(
	'/payments/:id',
	authenticatedUser,
	authorizeRules('organizer'),
	destroy
);
router.post('/payments', authenticatedUser, authorizeRules('organizer'), create);

module.exports = router;
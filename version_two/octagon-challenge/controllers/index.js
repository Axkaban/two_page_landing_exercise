const router = require('express').Router();
const controller = require('./controller');

router.get('/contacts', controller.index);
router.post('/contacts', controller.create);

module.exports = router;
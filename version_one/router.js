const router = require('express').Router();
const contacts = require('./controllers/index');

router.post('/contacts', contacts)
router.get('/contacts', (req, res) => res.render('form'));
router.get('/', (req, res) => res.render('index'));


module.exports = router;
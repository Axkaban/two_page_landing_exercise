const router = require('express').Router();
const path = require('path');
const contact = require('./controllers/index');

router.get('/contacts',  contact);
// router.post('/contacts', contact);
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')
    );
});

module.exports = router;
const router = require('express').Router();
const path = require('path');
const contacts = require('./controllers/index');

// router.get('/contacts',  contacts);
router.post('/contacts', contacts);
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')
    );
});

module.exports = router;
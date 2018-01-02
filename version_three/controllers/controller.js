const contacts = require('../models/contact');

const controller = {};

controller.index = (req, res) => {
    contacts
    .findAll()
    .then((data) => {
        res.json(data);
    })
    .catch(err => console.log(err));
};

controller.create = (req, res) => {
    console.log(req.body);
    const firstName = req.body.first_name,
        lastName = req.body.last_name,
        email = req.body.email,
        zipCode = req.body.zip_code,
        usState = req.body.us_state;
        contacts
        .create(firstName,lastName, email, zipCode, usState)
        .then(data => res.json(data))
        .catch( err => console.log(err));
}

module.exports = controller;
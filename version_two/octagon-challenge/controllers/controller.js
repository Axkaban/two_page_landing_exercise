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
    const firstName = req.body.first_name,
        lastName = req.body.last_name,
        email = req.body.email,
        zipCode = req.body.zip_code,
        usState = req.body.us_state,
        id = req.params.id;
        contacts
        .create(firstName,lastName, email, zipCode, usState, id)
        .then(data => res.json(data))
        .catch( err => console.log(err));
}

module.exports = controller;
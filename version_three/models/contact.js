const db = require('../migration/contact_info');

const contact = {};

contact.findAll = () => {
    return db.any('SELECT * FROM contact_info');
};

contact.create = (first_name, last_name, email, zip_code, us_state) => {
    return db.one(
        'INSTERT INTO contact_info (first_name, last_name, email, zip_code, us_state) VALUES ($1, $2, $3, $4, $5) returning id', [id]
    );
};

module.exports = contact;
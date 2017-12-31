const db = require('../../../external_migration/contact_info');

const contact = {};

contact.findAll = () => {
    return db.any('SELECT * FROM contact_info');
};

contact.create = () => {
    return db.one(
        'INSTERT INTO contact_info (first_name, last_name, email, zip_code, us_state, id) VALUES ($1, $2, $3, $4, $5, $6) returning id', [id]
    );
};

module.exports = contact;
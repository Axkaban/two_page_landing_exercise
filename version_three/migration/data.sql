DROP TABLE IF EXISTS contact_info CASCADE;

CREATE TABLE contact_info(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    zip_code INTEGER,
    us_state VARCHAR
)
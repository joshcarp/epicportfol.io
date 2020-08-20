CREATE SCHEMA it_project;
CREATE TABLE accounts (
email VARCHAR(255) UNIQUE PRIMARY KEY,
name VARCHAR(255),
username VARCHAR(255) UNIQUE,
preferred_name VARCHAR(255),
password VARCHAR(255),
salt VARCHAR(255)
);

CREATE TABLE accounts (
username VARCHAR(255) UNIQUE PRIMARY KEY,
email VARCHAR(255) UNIQUE,
name VARCHAR(255),
preferred_name VARCHAR(255),
password VARCHAR(255),
salt VARCHAR(255)
);
CREATE TABLE profiles (
username VARCHAR(255) UNIQUE NOT NULL,
profile_picture VARCHAR(255)NOT NULL,
bio VARCHAR(1048)NOT NULL
);
CREATE TABLE jobs (
username VARCHAR(255)NOT NULL,
dates VARCHAR(255)NOT NULL,
title VARCHAR(255) NOT NULL,
company VARCHAR(255)NOT NULL,
description VARCHAR(1048) NOT NULL
);
CREATE TABLE artifacts (
username VARCHAR(255)NOT NULL,
link VARCHAR(1048)NOT NULL,
title VARCHAR(255)NOT NULL,
description VARCHAR(1048)NOT NULL
);
CREATE TABLE links (
username VARCHAR(255)NOT NULL,
link VARCHAR(1048)NOT NULL
);
INSERT INTO profiles (username, profile_picture, bio)
    VALUES ('joshcarp', 'https://secure.gravatar.com/avatar/8f3ae66a1b3c1494de8971e428e9b6ae', 'i am a person');
INSERT INTO links (username, link)
    VALUES ('joshcarp', 'https://github.com/joshcarp');
INSERT INTO artifacts (username, link, description, title)
    VALUES ('joshcarp', 'https://secure.gravatar.com/avatar/8f3ae66a1b3c1494de8971e428e9b6ae', 'My face', 'My Face');
INSERT INTO jobs (username, dates, title, company, description)
    VALUES ('joshcarp', '2019-2020', 'Engineer','ANZ', 'Working on open source tools to help engineers develop faster.');

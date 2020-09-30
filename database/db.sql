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
link VARCHAR(1048)NOT NULL
);
INSERT INTO accounts (username, email, name, preferred_name, password, salt)
    VALUES ('mrpoopybutthole', 'poopy@butthole.com', 'mr poopybutthole','butthole', '1234', '5678');

INSERT INTO profiles (username, profile_picture, bio)
    VALUES ('mrpoopybutthole', 'https://vignette.wikia.nocookie.net/rickandmorty/images/5/52/S2e4_mr_poopybutthole.png/revision/latest/scale-to-width-down/1000', 'Mr. Poopybutthole is a very good friend to the Smith Family, from another dimension (where he is a planet wide superstar) who has taken refuge with the Smiths so he can live a normal life [as started in the comic series "Lil Poopy Superstar" issue 1-5], he is described as a long-time friend of the family. Rick clearly considers him to have long been a dependable person, although it"s uncertain how long they"ve known each other. He made his first appearance in the episode Total Rickall. He is voiced by Justin Roiland.');

CREATE TABLE links (
username VARCHAR(255)NOT NULL,
link VARCHAR(1048)NOT NULL
);
INSERT INTO links (username, link)
    VALUES ('mrpoopybutthole', 'https://www.facebook.com/mrpoopybutthole/');
INSERT INTO links (username, link)
    VALUES ('mrpoopybutthole', 'https://www.instagram.com/joshjcarp/');
INSERT INTO links (username, link)
    VALUES ('mrpoopybutthole', 'http://linkedin.com/in/mrpoopybutthole');
INSERT INTO links (username, link)
    VALUES ('mrpoopybutthole', 'https://github.com/mrpoopybutthole');
INSERT INTO jobs (username, dates, title, company, description)
    VALUES ('mrpoopybutthole', '1998-2010', 'Memester','mums basement', 'Memer of a meme page');
INSERT INTO jobs (username, dates, title, company, description)
    VALUES ('mrpoopybutthole', '2010-2017', 'Heist master','College college', 'Not sure about this beep boop ');
INSERT INTO artifacts (username, link)
    VALUES ('mrpoopybutthole', 'https://picsum.photos/id/3/1200/800');
INSERT INTO artifacts (username, link)
    VALUES ('mrpoopybutthole', 'https://picsum.photos/id/3/1200/800');
INSERT INTO artifacts (username, link)
    VALUES ('mrpoopybutthole', 'https://picsum.photos/id/3/1200/800');
INSERT INTO artifacts (username, link)
    VALUES ('mrpoopybutthole', 'https://vignette.wikia.nocookie.net/rickandmorty/images/5/52/S2e4_mr_poopybutthole.png/revision/latest/scale-to-width-down/1000');

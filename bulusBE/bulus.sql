DROP DATABASE IF EXISTS bulus ;
CREATE DATABASE bulus;

USE bulus;

CREATE TABLE meows(
meowid INT(10) NOT NULL AUTO_INCREMENT,
meowname VARCHAR(100) NOT NULL,
hobi VARCHAR(100) NOT NULL,
PRIMARY KEY (meowid)
);

INSERT INTO meows (meowid, meowname, hobi) VALUES ('1', 'Abu', 'te bulus'),('2', 'Bulus', 'menderak kok se');


CREATE TABLE users(
userid VARCHAR(30) NOT NULL PRIMARY KEY,
firstname VARCHAR(100) NOT NULL,
passwrd VARCHAR(100) NOT NULL
);

INSERT INTO users (userid, firstname, passwrd) VALUES ('oyen', 'mister oyen the hunter', '123');

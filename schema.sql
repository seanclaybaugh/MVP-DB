DROP DATABASE IF EXISTS nomen;

CREATE DATABASE nomen;

USE nomen;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  pass VARCHAR(100) NOT NULL
);

CREATE TABLE names (
  id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
  gender VARCHAR(15) NOT NULL,
  babyname VARCHAR(50) NOT NULL
);

INSERT INTO users (username, email, pass) VALUES ('Sean', 'sean@gmail.com', 'seancla');

LOAD DATA LOCAL INFILE '/Users/sean-macbook/hackreactor/MVP-DB/Names.csv'
INTO TABLE names
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
IGNORE 2 ROWS;
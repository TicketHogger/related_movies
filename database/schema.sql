DROP DATABASE IF EXISTS related_movies;

CREATE DATABASE related_movies;

use related_movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT NOT NULL,
  year SMALLINT,
  image TEXT NOT NULL
);

LOAD DATA LOCAL INFILE 'database/movie.csv' 
INTO TABLE movies 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

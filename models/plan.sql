CREATE DATABASE dayplaner;

CREATE TABLE plan (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(150) NOT NULL, 
	description VARCHAR(400) NOT NULL, 
	weekday INTEGER NOT NULL, 
	starting TIME NOT NULL,
	ending TIME NOT NULL
);


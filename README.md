# Dayplaner - Backend
This repository contains the backend of the dayplaner app. This app is built with
PostgreSQL as a database, Node.JS and Express.

## Functions
A user is able to create a reoccuring plan for a day. He/she can add, update, delete
or read a timeslot or the whole day.

## Data

### Timeslot
- id BIGSERIAL NOT NULL PRIMARY KEY
- title VARCHAR(150) NOT NULL
- description VARCHAR(255) NOT NULL
- starting TIMESTAMP NOT NULL
- ending TIMESTAMP NOT NULL
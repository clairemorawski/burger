-- Drops the "burgers_db" if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
    -- Makes a string column called "id" which cannot contain null and is a unique id for each burger --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Makes a string column called "burger_name" with the name of each burger --
    burger_name VARCHAR(100) NOT NULL,
    -- Makes a boolean called "devoured" --
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
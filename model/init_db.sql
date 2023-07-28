--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT, 
    text VARCHAR(70) not null, 
    complete BOOLEAN DEFAULT false, 
    PRIMARY KEY (id) 
    );

INSERT INTO items(text) VALUES ('Do de dishes'), ('water the plants');
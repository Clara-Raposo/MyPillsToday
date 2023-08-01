--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists pills;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE pills(
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(70) not null, 
    dosis INT not null,
    frecuency VARCHAR(70) null,
    PRIMARY KEY (id) 
    );

INSERT INTO pills(name, dosis, frecuency) VALUES ('Ibuprofeno', 1, "weekly"), ('Hierro', 1, "daily");
--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists pills;
DROP TABLE if exists daily_pills;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE pills(
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(70) not null, 
    dosis INT not null,
    frecuency INT not null,
    PRIMARY KEY (id) 
    );

CREATE TABLE daily_pills(
    pill_id INT NOT NULL, 
    breakfast BOOLEAN, 
    lunch BOOLEAN,
    diner BOOLEAN,
    PRIMARY KEY (pill_id) 
    );

INSERT INTO pills(name, dosis, frecuency) VALUES ('Ibuprofeno', 1, 7), ('Hierro', 1, 1);
INSERT INTO daily_pills(pill_id, breakfast, lunch, diner) VALUES (1, 0, 1, 0), (2, 1, 0, 1)
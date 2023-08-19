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
    dosis DECIMAL(2,1) not null,
    fecha DATE,
    frecuency INT DEFAULT 1,
    PRIMARY KEY (id) 
    );

CREATE TABLE daily_pills(
    pill_id INT NOT NULL, 
    breakfast BOOLEAN, 
    lunch BOOLEAN,
    dinner BOOLEAN,
    PRIMARY KEY (pill_id) 
    );

INSERT INTO pills(name, dosis, frecuency, fecha) VALUES ('Ibuprofeno', 1.5, 7, '2023-08-13' ), ('Hierro', 1, 1, '2023-08-13');
INSERT INTO daily_pills(pill_id, breakfast, lunch, dinner) VALUES (1, 0, 1, 0), (2, 1, 0, 1)
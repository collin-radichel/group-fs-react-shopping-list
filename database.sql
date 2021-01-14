-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping (
	id SERIAL PRIMARY KEY,
	item VARCHAR(25) NOT NULL,
	quantity INT NOT NULL,
	unit VARCHAR(10) NOT NULL
);

INSERT INTO shopping (item, quantity, unit)
VALUES ('Apples', 5 , 'lbs');
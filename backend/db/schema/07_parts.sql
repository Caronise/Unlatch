-- Creating the parts table 

DROP TABLE IF EXISTS parts CASCADE;
CREATE TABLE parts ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE, 
  part_name VARCHAR(255) NOT NULL, 
  price MONEY NOT NULL, 
  part_number VARCHAR(255) NOT NULL
);

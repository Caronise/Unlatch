-- Creating the parts table 

DROP TABLE IF EXISTS parts CASCADE;
CREATE TABLE parts ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES premade_projects (id) ON DELETE CASCADE, 
  part_name VARCHAR(255) NOT NULL, 
  price INT, 
  part_number VARCHAR(255) NOT NULL
);

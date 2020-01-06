-- Creating the notes table 

DROP TABLE IF EXISTS notes CASCADE;
CREATE TABLE notes ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  custom_project_id INTEGER REFERENCES custom_projects (id) ON DELETE CASCADE, 
  description BYTEA NOT NULL,
  mileage INT NOT NULL, 
  timestamp DATE NOT NULL, 
  cost_of_repair INT
);

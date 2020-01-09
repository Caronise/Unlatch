-- Creating the notes table 

DROP TABLE IF EXISTS notes CASCADE;
CREATE TABLE notes ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE, 
  description TEXT NOT NULL,
  mileage INT NOT NULL, 
  timestamp DATE NOT NULL, 
  cost_of_repair INT
);

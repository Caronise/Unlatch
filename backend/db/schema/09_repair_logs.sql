-- Creating the notes table 

DROP TABLE IF EXISTS repair_logs CASCADE;
CREATE TABLE repair_logs ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE, 
  description TEXT NOT NULL,
  mileage INT NOT NULL, 
  timestamp DATE NOT NULL, 
  cost_of_repair MONEY
);

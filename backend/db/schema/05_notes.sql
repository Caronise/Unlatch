-- Creating the notes table 

DROP TABLE IF EXISTS notes CASCADE;
CREATE TABLE notes ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  vehicle_id INTEGER REFERENCES vehicles (id) ON DELETE CASCADE, 
  description VARCHAR(255) NOT NULL, 
  mileage VARCHAR(255) NOT NULL, 
  timestamp DATE NOT NULL, 
  cost_of_repair INT
);

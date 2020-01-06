-- Creating the premade projects table 

DROP TABLE IF EXISTS premade_projects CASCADE;
CREATE TABLE premade_projects ( 
  id SERIAL PRIMARY KEY NOT NULL,
  vehicle_id INTEGER REFERENCES vehicles (id) ON DELETE CASCADE, 
  project_name VARCHAR(255) NOT NULL, 
  difficulty VARCHAR(255) NOT NULL 
);

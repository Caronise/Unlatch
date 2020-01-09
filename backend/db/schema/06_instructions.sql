-- Creating the instructions table 

DROP TABLE IF EXISTS instructions CASCADE;
CREATE TABLE instructions ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE, 
  steps TEXT NOT NULL
);

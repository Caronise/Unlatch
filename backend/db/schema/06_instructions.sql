-- Creating the instructions table 

DROP TABLE IF EXISTS instructions CASCADE;
CREATE TABLE instructions ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES premade_projects (id) ON DELETE CASCADE, 
  steps BYTEA NOT NULL
);

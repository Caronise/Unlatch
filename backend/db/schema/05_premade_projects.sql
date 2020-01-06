-- Creating the premade projects table 

DROP TABLE IF EXISTS premade_projects CASCADE;
CREATE TABLE premade_projects ( 
  id SERIAL PRIMARY KEY NOT NULL,
  model_id INTEGER REFERENCES models (id) ON DELETE CASCADE,
  project_name VARCHAR(255) NOT NULL, 
  difficulty VARCHAR(255) NOT NULL 
);

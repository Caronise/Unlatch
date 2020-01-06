-- Creating the custom_projetcs table 

DROP TABLE IF EXISTS custom_projetcs CASCADE;
CREATE TABLE custom_projetcs ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  premade_project_id INTEGER REFERENCES premade_projects (id) ON DELETE CASCADE, 
  custom_name VARCHAR(255) NOT NULL
);

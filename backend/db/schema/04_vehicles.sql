-- Creating the vehicules table 

DROP TABLE IF EXISTS vehicles CASCADE; 
CREATE TABLE vehicles ( 
  id SERIAL PRIMARY KEY NOT NULL,
  model_id INTEGER REFERENCES models (id) ON DELETE CASCADE,  
  year SMALLINT, 
  picture_url VARCHAR(255) 
);
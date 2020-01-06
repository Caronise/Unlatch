-- Creating the vehicules table 

DROP TABLE IF EXISTS vehicles CASCADE; 
CREATE TABLE vehicles ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE, 
  make_id INTEGER REFERENCES makes (id) ON DELETE CASCADE,
  vehicle_name VARCHAR(255) NOT NULL,  
  year SMALLINT, 
  vin  VARCHAR(17),
  picture_url VARCHAR(255) 
);
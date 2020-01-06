-- Creating the Makes table 

DROP TABLE IF EXISTS makes CASCADE;
CREATE TABLE  makes ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  vehicle_id INTEGER REFERENCES vehicles (id) ON DELETE CASCADE, 
  make_name VARCHAR(255) NOT NULL 
);

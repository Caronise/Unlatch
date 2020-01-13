-- Creating the Makes table 

DROP TABLE IF EXISTS makes CASCADE;
CREATE TABLE  makes ( 
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE, 
  make_name VARCHAR(255) NOT NULL 
);

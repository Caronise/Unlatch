-- Creating the videos table 

DROP TABLE IF EXISTS videos CASCADE;
CREATE TABLE videos ( 
  id SERIAL PRIMARY KEY NOT NULL, 
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE, 
  video_name VARCHAR(255) NOT NULL, 
  video_url VARCHAR(255) NOT NULL
);

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = db => {

  /* GET Home Page. */
  router.get('/', function (req, res) {
    res.send('This is the home page')

  });

  const findEmail = function(email) {
    const text = `
      SELECT * FROM users
      WHERE email = $1
    ;`;
    const value = [email];

    return db.query(text, value)
      .then(data => data.rows)    
  };

  /* POST Login. */
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    findEmail(email).then(user => {
      if (bcrypt.compareSync(password, user[0].password)) {
        req.session.user_id = user[0].id;
        // res.send( { message: "Succesfully set session login" });
        res.json(user[0]);
      }
    })
      .catch(error => {
        if (error) {
          res.send( { message: "Incorrect Credentials"})
        }
      })
  });

  /* GET Register. */
  router.get('/register', (req, res) => {
    const text = `
    SELECT * FROM users
    ;`;
    const values = [req.params.id]
    db.query(text, values)
      .then(result => {return res.json(result.rows)})
      .catch(err => console.log(`Error getting data: ${err.message}`))  
  });

  /* POST Register. */
  router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    const text = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
      ;`;
    const values = [username, email, bcrypt.hashSync(password, 10)];

    findEmail(email).then(user => {
      if (user.length === 0) {
        db.query(text, values)
        .then(data => {
          console.log("Registered")
          console.log(data.rows)
          const userId = data.rows[0].id;
          req.session.user_id = userId;
          res.json(data.rows[0]);
        })
      } else {
        res.json({ message: 'User Already Exists' })
      }
    })
      .catch(error => {
        console.log(`${error}`)
      });
  });

  /* GET Logout. */
  router.get('/logout', (req, res) => {
    req.session = null;
    res.send('This is the logout route')
  });

  // GET Users
  router.get('/users/:id', (req, res) => {
    const text = `
      SELECT * FROM users WHERE users.id = $1
    ;`;
    const values = [req.params.id];
    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })


  /* POST Add Vehicle. */
  router.post('/vehicles', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }
    const { make_id, model_id, year } = req.body;
    const text = `
      INSERT INTO vehicles JOIN makes JOIN models JOIN users (user_id, make_id, model_id, year)
      JOIN 
      VALUES ($1, $2, $3)
      RETURNING *
    ;`;
      const values = [make_id, model_id, year];
      db.query(text, values)
        .then(data => {

        
      });
  });

  /* GET Vehicles */
  router.get('/users/:id/vehicles', (req, res) => {
    const text = `
  SELECT users.id, make_id, model_id, year, picture_url, makes.make_name FROM users
  JOIN vehicles
  ON users.id = vehicles.user_id
  JOIN makes
  ON makes.id = vehicles.make_id
  WHERE users.id = $1
  ;`;
    const values = [req.params.id];
    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  // GET MAKE 
  router.get('users/:id/makes/:id', (req, res) => {
    const text = 'SELECT * FROM makes WHERE id =$1;';
    const values = [req.params.id];

    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  router.get('users/:id/makes/:id/models', (req, res) => {
    const text = `SELECT * FROM models WHERE make_id = $1;`;
    const values = [req.params.id];

    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })


  router.get('users/:id/makes/:id/models/:model_id', (req, res) => {
    const text = 'SELECT * FROM models WHERE id = $1 AND make_id = $2;';
    const values = [req.params.model_id, req.params.id];


    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })


  /* GET User Vehicle ID. */
  router.get('users/:id/vehicles/:vehicles_id', (req, res) => {

    const text = `
    SELECT * FROM vehicles
    WHERE vehicles.id = $1
    ;`;
    const values = [req.params.vehicle_id];

    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* DELETE Vehicle ID. */
  router.delete("/vehicles/:vehicle_id", (req, res) => {
    const text = `
    DELETE FROM vehicles
    WHERE vehicles.id = $1
    ;`;
    const values = [req.params.vehicle_id];
    db.query(text, values)
      .then(data => {
        res.send({ message: "Vehicle Deleted" });
      })
      .catch(error => {
        console.log(`${error}`);
      })
  });

  /* GET Projects. */
  router.get('users/:id/vehicles/:vehicle_id/projects', (req, res) => {
    const text = `
      SELECT * FROM vehicles
      JOIN projects
      ON vehicles.id = projects.vehicle_id 
      WHERE vehicle_id = $1
      ;`;
    const values = [req.params.vehicle_id]
    db.query(text, values)
      .then(result => {
        res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET New Project ID. */
  router.get('/vehicles/:vehicle_id/projects/:project_id', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: 'SELECT * FROM projects where id = $1',
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Parts. */
  router.get('/projects/:project_id/parts', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: `      
      SELECT * FROM projects 
      JOIN parts 
      ON parts.project_id = projects.id 
      WHERE project_id = $1;`,
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Instructions. */
  router.get('/projects/:project_id/instructions', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: `
      SELECT * FROM projects 
      JOIN instructions 
      ON instructions.project_id = projects.id 
      WHERE project_id = $1
      ;`,
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Videos. */
  router.get('/projects/:project_id/videos', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: `
      SELECT * FROM projects 
      JOIN videos 
      ON videos.project_id = projects.id 
      WHERE project_id = $1
      ;`,
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Notes. */
  router.get('/projects/:project_id/notes', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: `
      SELECT * FROM projects 
      JOIN notes 
      ON notes.project_id = projects.id 
      WHERE project_id = $1
      ;`,
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  return router;
};
var express = require('express');
var router = express.Router();

module.exports = db => {
  
  /* GET Home Page. */
  router.get('/', function(req, res) {
    res.send('This is the home page')
  
  });

  /* GET Login. */
  router.get('/login', (req, res) => {
    res.send('This is the login route')

  });

  /* POST Login. */
  router.post('/login', (req, res) => {
    const { email, password} = req.body;
    const text = `
      SELECT * FROM users
      WHERE email = $1 AND password = $2
    ;`;
    const values = [ email, password ];

    db.query(text, values)
      .then(data => {
        if (data.rows[0].length === 0) {
          res.send( { message: "You're not logged in!" });
        } 
        // else {
        //   req.session.user_id = data.rows[0].id;
        //   res.send( { message: "Succesfully set session" })
        // }
      })
      .catch(error => {
        console.log(`${error}`)
      })
  });

  /* GET Register. */
  router.get('/register', (req, res) => {
    res.send('This is the register route')
  });

  /* POST Register. */
  router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const text = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id
    ;`;
    const values = [username, email, password];

    db.query(text, values)
      .then(data => {
        const userId = data.rows[0].id;
        // req.session.user_id = userId
        res.send( {username} );
      })
      .catch(error => {
        console.log(`${error}`)
      });
  });

  /* GET Logout. */
  router.get('/logout', (req, res) => {
    res.send('This is the logout route')
  });

  /* GET Vehicles. */
  router.get('/vehicles', (req, res) => {
    res.send('This is the vehicles route')
  });

  /* GET Add Vehicle. */
  router.post('/vehicles/add_vehicle', (req, res) => {
    const { make, model, year } = req.body;
    const text = `
    INSERT INTO vehicles (make, model, year)
    VALUES ($1, $2, $3)
    RETURNING id
    ;`;
    const values = [ make, model, year ];

    db.query(text, values)
      .then(data => {
        const vehicle_id = data.rows[0].id;
        req.session.id = vehicle_id;
        res.send( { email } );
      })
      .catch(error => {
        console.log(`${error}`);
    });
  });

  /* GET Vehicle ID. */
  router.get('/vehicles/:vehicle_id', (req, res) => {
    const text = `
    SELECT * FROM vehicles
    WHERE id = $1
    `;
    const values = [ req.params.vehicle_id ];
    db.query(text, values)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* DELETE Vehicle ID. */
  router.delete("/vehicles/:vehicle_id", (req, res) => {
    const text = `
    DELETE FROM vehicles
    WHERE vehicles.id = $1
    `;
    const values = [ req.params.id ];
    db.query(text, values)
    .then(data => {
      res.send( { message: "Vehicle Deleted" });
    })
    .catch(error => {
      console.log(`${error}`);
    })
  });

  /* GET Projects. */
  router.get('/vehicles/:vehicle_id/projects', (req, res) => {
    const { project_id } = req.params;
    const text = `
      SELECT * FROM premade_projects 
      WHERE id = $1 AND vehicle_id = $2 AND project_name = $3 AND difficulty = $4`
    const values = [ project_id ]
    db.query(text, values)
      .then(data => res.json(data.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET New Project ID. */
  router.get('/vehicles/:vehicle_id/projects/:project_id', (req, res) => {
      const { project_id } = req.params;
      const query = {
        text: 'SELECT id FROM premade_projects where id = $1',
        values: [project_id]
      };
      db
        .query(query)
        .then(result => res.json(result.rows))
        .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Notes. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/notes', (req, res) => {
    res.send('This is the project notes route')
  });

  /* GET Parts. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/parts', (req, res) => {
    res.send('This is the project parts route')
  });

  /* GET Instructions. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/instructions', (req, res) => {
    res.send('This is the project instructions route')
  });

  /* GET Videos. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/videos', (req, res) => {
    const { vehicle_id } = req.params;
    const query = {
      text: 'SELECT * FROM vehicles where id = $1',
      values: [vehicle_id]
    };
    db
      .query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });


  return router
};
const express = require('express');
const router = express.Router();
const { getMakes, makesCheck } = require('../helpers/add_vehicle');

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
    const { id, username, email, password } = req.body;
    const text = `
      INSERT INTO users (id, username, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    ;`;
    const values = [id, username, email, password];

    db.query(text, values)
      .then(data => {
        const userId = data.rows[0].id;
        req.session.id = userId
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

  router.post('/logout', (req, res) => {
    req.session.id = null;
    res.send({});
  });

  router.get('/vehicles', (req, res) => {
    res.send('This is the add vehicle route')
  })

  /* POST Add Vehicle. */
  router.post('/vehicles', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    // extract content from the body of the request (req.body)
    const { make_id, vehicle_name, year} = req.body;
  

    getMakes()
      .then(makes => {
        // find out the make of the vehicle from extracted data
        let makeResult = makesCheck(makes, makeEntry);

        // ******* WHAT DO I DO WHEN THE MAKE DOESN'T EXIST ????? **************
        console.log(makeResult);
        console.log("GENERIC LABEL: ", makeResult);
        if (!makeResult) {
          makeResult = 'No such brand in'
        }

        // QUERY THAT CHECKS WHAT THE MAKES ID IS WHEN GIVEN THE MAKE NAME
        const text = `
        SELECT makes.id
        FROM makes
        WHERE makes.make_name LIKE $1
        `;
        const values = [makeResult];

        db.query(text, values)
          .then(data => {
            // - insert the todo in the database with the category
            const text = `
            INSERT INTO vehicles (id, user_id, make_id, vehicle_name, year, vin, picture_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `;
            const values = [1, data.rows[0].id, make_id, vehicle_name, year, vin, picture_url];
            db.query(text, values)
              .then(data => {
              // send back response to the client (response is the new vehicle, with make id)
              return (data.rows[0]);
              })
              .then(newVehicle => {
                const query = {
                  text: 'SELECT vehicle_name FROM categories WHERE id = $1',
                  values: [newVehicle.vehicle_name]
                }
                db.query(query)
                  .then(result=>{
                  newTodo.category = result.rows[0].vehicle_name;
                  res.json(newVehicle);
                })
              })
          })
          .catch(error => {
            console.log(`${error}`);
          });
      });
  });
    

  /* GET Vehicle ID. */
  router.get('/vehicles/:vehicle_id', (req, res) => {
    const text = `
    SELECT * FROM vehicles
    WHERE id = $1
    ;`;
    const values = [ req.params ];
    db.query(text, values)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* DELETE Vehicle ID. */
  router.delete("/vehicles/:vehicle_id", (req, res) => {
    const text = `
    DELETE FROM vehicles
    WHERE vehicles.id = $1
    ;`;
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
      WHERE id = $1 AND vehicle_id = $2 AND project_name = $3 AND difficulty = $4
      ;`;
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


  return router;
};
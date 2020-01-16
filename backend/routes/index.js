const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = db => {

  /* GET Home Page. */
  router.get('/', function (req, res) {
    res.send('This is the home page')

  });

  // RUSS IS THIS DOING ANYTHING??
  const findEmail = function (email) {
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
          res.json(null)
        }
      })
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
  });

  // GET all users
  router.get('/users', (req, res) => {
    const text = `
    SELECT * FROM users
    ;`;
    db.query(text)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })

  // GET User by ID
  router.get('/users/:id', (req, res) => {
    const text = `
    SELECT * FROM users 
    WHERE users.id = $1
    ;`;
    const values = [req.params.id];
    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })

  /* GET Makes */
  router.get('/users/:id/makes', (req, res) => {
    const text = `
    SELECT * FROM makes
    WHERE makes.user_id = $1
    ;`;
    const values = [req.params.id];

    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  // GET Makes ID
  router.get('/users/:id/makes/:make_id', (req, res) => {
    const text = `
    SELECT * FROM makes
    WHERE user_id = $1
    AND makes.id = $2
    ;`;
    const values = [req.params.id, req.params.make_id];

    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Models */
  router.get('/makes/:make_id/models', (req, res) => {
    const text = `
    SELECT * FROM models
    WHERE make_id = $1
    ;`;
    const values = [req.params.make_id];

    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })

  // GET Models ID
  router.get('/models/:model_id', (req, res) => {
    const text = `
    SELECT * FROM models 
    WHERE id = $1
    ;`;
    const values = [req.params.model_id];

    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  })

  /* GET Vehicles. */
  router.get('/users/:id/vehicles', function (req, res) {
    const text = `
    SELECT vehicles.id as vehicle_id, make_name, model_name, year, picture_url FROM users
    JOIN vehicles
    ON users.id = vehicles.user_id
    JOIN models
    on models.id = vehicles.model_id
    JOIN makes
    on makes.id = vehicles.make_id
    WHERE users.id = $1
    ;`;
    const values = [req.params.id]
    db.query(text, values)
      .then(result => {
        return res.json(result.rows)
      })

  });

  /* GET User Vehicle ID. */
  router.get('/vehicles/:vehicles_id', (req, res) => {

    const text = `
    SELECT vehicles.id as vehicle_id, make_name, model_name, year, picture_url 
    FROM vehicles
    JOIN makes
    on makes.id = vehicles.make_id
    JOIN models
    on models.id = vehicles.model_id
    WHERE vehicles.id = $1
    ;`;
    const values = [req.params.vehicles_id];

    db.query(text, values)
      .then(result => { return res.json(result.rows) })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

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

  /* DELETE Vehicle ID. */
  router.delete("/vehicles/:vehicle_id", (req, res) => {
    const text = `
    DELETE FROM vehicles
    WHERE vehicles.id = $1
    ;`;
    const values = [req.params.vehicle_id];
    db.query(text, values)
      .then(data => {
        res.json({ message: "Vehicle Deleted" });
      })
      .catch(error => {
        console.log(`${error}`);
      })
  });

  /* GET Projects. */
  router.get('/vehicles/:vehicle_id/projects', (req, res) => {
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
      text: `
    SELECT * FROM projects 
    WHERE id = $1
    `,
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

  /* GET REPAIR LOGS. */
  router.get('/projects/:project_id/repair_logs', (req, res) => {
    const { project_id } = req.params;
    const query = {
      text: `
      SELECT projects.id as id, repair_logs.id as log_id, description, mileage, timestamp, cost_of_repair FROM projects 
      JOIN repair_logs
      ON repair_logs.project_id = projects.id 
      WHERE project_id = $1
      ;`,
      values: [project_id]
    };
    db.query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* POST REPAIR LOGS */
  router.post('/projects/:project_id/repair_logs', (req, res) => {
    const { project_id } = req.params;
    const { description, mileage, timestamp, cost_of_repair } = req.body;

    const query = {
      text: `
      INSERT INTO repair_logs (project_id, description, mileage, timestamp, cost_of_repair) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      ;`,
      values: [project_id, description, mileage, timestamp, cost_of_repair]
    };
    db.query(query)
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Repair Log by ID */
  router.get('/projects/:project_id/repair_logs/:log_id', (req, res) => {
    const { log_id } = req.params;
    const query = {
      text: `
      SELECT * FROM repair_logs
      WHERE id = $1
      ;`,
      values: [log_id]
    };
    db.query(query)
      .then(result => {
        return res.json();
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* PUT REPAIR LOGS */
  router.put('/projects/:project_id/repair_logs/:log_id', (req, res) => {
    // This route isn't functional is considered a stretch in case user wants to edit a note

    const { log_id } = req.params;
    // const {  } = req.body;
    const query = {
      text: `
      UPDATE projects
      SET 
      WHERE id = $1
      `,
      values: [log_id]
    };
    db.query(query)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))

  });

  /* DELETE REPAIR LOGS */
  router.delete('/projects/:project_id/repair_logs/:log_id', (req, res) => {
    const { log_id } = req.params;
    const query = {
      text: `
      DELETE FROM repair_logs
      WHERE id = $1
      `,
      values: [log_id]
    }
    db.query(query)
      .then(result => {
        return res.json(result.rows)
      })
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });


  return router;
};
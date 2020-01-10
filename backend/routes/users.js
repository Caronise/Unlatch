var express = require('express');
var router = express.Router();

/* GET users listing. */

module.exports = db => {

  /* GET Login. */
  // router.get('/login', (req, res) => {
    
  // });

  /* GET Register. */
  router.get('/register', (req, res) => {
    res.send('This is the register route')
  });

  /* GET Logout. */
  router.get('/logout', (req, res) => {
    res.send('This is the logout route')
  });

  return router
};
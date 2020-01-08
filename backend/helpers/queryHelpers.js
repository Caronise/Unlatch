module.exports = db => {

  const getUser = () => {

    // Creating the text of the query
    const query = {
      text: 'SELECT * FROM users'
    };
    // Running the query
    return db
      .query(query);
  };

  const addUser = (username, email, password) => {
    const query = {
      text: `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *`,
      values: [username, email, password]
    };
    return db
      .query(query);
  }
  return { getUser, addUser };
  
};
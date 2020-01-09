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

  const addUser = (id, username, email, password) => {
    const query = {
      text: `INSERT INTO users(id, username, email, password) VALUES($1, $2, $3, $4) RETURNING *`,
      values: [id, username, email, password]
    };
    return db
      .query(query);
  }
  return { getUser, addUser };
  
};
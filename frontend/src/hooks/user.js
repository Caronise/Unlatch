// import bcrypt from 'bcrypt'
// import { setUser } from '../App'


// export function authenticateUser(email, password) {

//   const findEmail = function(email) {
//     for (let user in users) {
//       const currentUser = users[user];
//       if (currentUser.email === email) {
//         return currentUser;
//       }
//     }
//     return false;
//   };

//   const findPassword = function(password) {
//     for (let user in users) {
//       const currentUser = users[user];
//       if (bcrypt.compareSync(password, currentUser.password)) {
//         return currentUser
//       }
//     }
//     return false;
//   };

//   const authenticateUser = function(email, password) {
//     const user = findEmail(email);
//     const userPassword = findPassword(password);
//     if (user && bcrypt.compareSync(password, userPassword.password)) {
//       setUser(user);
//     }
//     return false;
//   };
// };

// export default authenticateUser;

// const findPassword = function(password) {
  //   for (let user in users) {
  //     const currentUser = users[user];
  //     if (bcrypt.compareSync(password, currentUser.password)) {
  //       return currentUser.password;
  //     }
  //   }
  //   return false;
  // };

  // const findUsername = function(username) {
  //   for (let user in users) {
  //     const currentUser = users[user];
  //     if (currentUser.username === username) {
  //       return currentUser.username;
  //     }
  //   }
  //   return false;
  // };

  // // const user = function(userObj) {
  // //   if (userObj) {
  // //     return userObj;
  // //   }
  // // };

  // // const authenticateUser = function(username, email, password) {
  // //   const userEmail = findEmail(email);
  // //   const userPassword = findPassword(password);
  // //   const userUsername = findUsername(username);
  // //   if ((userEmail || userUsername) && bcrypt.compareSync(password, userPassword.password)) {

  // //     return [username, email, password];
  // //   }

  // //   return false;
  // // };
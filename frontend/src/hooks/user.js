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
//       if (currentUser.password === password) {
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
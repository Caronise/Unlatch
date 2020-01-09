

const getMake = function(makes, makeList) {
  for (let make in makes) {
    if (makes[makeList]) {
      return make
    }
  }
  return false
};
  

const makesCheck = function(makes, makeEntry) {
  // loop over the array of words
  for (let makeList of makeEntry) {
    const make = getMake(makes, makeList);
    if (make) {
      return make;
    }
  }
  return false;
};



module.exports = { getMake, makesCheck };
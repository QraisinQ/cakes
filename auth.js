//creating an array to store users data
const users = [];

function createUser(username, password) {
  users.push({ username, password });
  console.log(users);
}

function authenticateUser(username, password) {
  //find the user by username in the array
  const user = users.find((user) => user.username === username);

  if (!user || users.password !== password) {
    return false;
  }
  return true;
}
module.exports = { createUser, authenticateUser };

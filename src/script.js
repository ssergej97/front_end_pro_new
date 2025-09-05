'use strict';

function fetchUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return fetch(url);
}

function getUsersData(userIds) {
  const url = `https://jsonplaceholder.typicode.com/users`;
  return fetch(url);
}

const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds)
  .then((data) => {
    let arrOfUsers = [];
    userIds.forEach((id) => {
      let userData = fetchUserData(id);
      userData
        .then((response) => {
        return response.json();
      })
        .then((data) => {
          arrOfUsers.push(data);
        })
    })
    console.log(arrOfUsers);
    return arrOfUsers;
  })



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
      arrOfUsers.push(fetchUserData(id));
      // for (let i = 0; i < data.length; i++) {
      //   if (id === data[i].id) {
      //     users.push(data[i])
      //   }
      // }
    })
    // console.log(users);
    return arrOfUsers;
  })
  .then((users) => {
    const currentUsers = [];
    console.log(users);
    users.forEach((user) => {
      console.log(user.json());
      currentUsers.push(user.json())
    })
    console.log(currentUsers);
    return currentUsers;
  })
// function getUsersData(userIds) {
//   return new Promise((resolve, reject) => {
//
//   })
// }
//
// const userIds = [1, 2, 3, 4, 5];
//
// getUsersData(userIds).then((result) => {
//   console.log("✅ Success:", result.success);
//   console.log("❌ Errors:", result.errors);
// })



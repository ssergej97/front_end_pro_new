'use strict';

function fetchUserData(userId) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return fetch(url);
}

fetchUserData().then((respond) => {
  return respond.json()
})

function getUsersData(userIds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 1000)
  })
}

Promise.allSettled([getUsersData(userIds)])

const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
  console.log("✅ Success:", result.success);
  console.log("❌ Errors:", result.errors);
})



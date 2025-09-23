'use strict';

async function fetchUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error');
  }
  return response.json();
}

const userIds = [1, 2, 3, 4, 5];

async function getUsersData(userIds) {
  try {
    const userPromises = userIds.map(id => fetchUserData(id));

    const users = await Promise.all(userPromises);

    console.log(users);
    return users;

  } catch (error) {
    console.error('Error:', error);
  }
}

getUsersData(userIds);


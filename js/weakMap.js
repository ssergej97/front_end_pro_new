"use strict";

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

function createMetadataStorage() {
  const metaDataStorage = new WeakMap();
  const setMetadata = (user, metaData) => {
    metaDataStorage.set(user, metaData);
  };

  const getMetadata = (user) => {
    return metaDataStorage.get(user);
  };

  const hasMetadata = (user) => {
    return metaDataStorage.has(user);
  };

  return {
    metaDataStorage,
    setMetadata,
    getMetadata,
    hasMetadata,
  };
}

const storage = createMetadataStorage();
console.log(storage);

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true

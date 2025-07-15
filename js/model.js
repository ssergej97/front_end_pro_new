"use strict";

function createDataBase() {
  const DB_KEY = "contact_book";
  const OBJECT_KEYS = ["firstName", "lastName", "phone"];

  const validateObject = (objectToValidate) => {
    if (typeof objectToValidate !== "object") return false;
    const keysToValidate = Object.keys(objectToValidate);

    let isValid = true;

    for (let i = 0; i < OBJECT_KEYS.length; i++) {
      if (!keysToValidate.includes(OBJECT_KEYS[i])) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  const getData = () => {
    const data = JSON.parse(localStorage.getItem(DB_KEY));

    if (data === null) return [];

    return data;
  };
  const setData = (data) => {
    if (!data) return null;
    if (typeof data !== "object") return null;
    if (!validateObject(data)) return null;

    // Get data from localStorage
    const currentData = getData();

    //Calc id
    let id = 1;
    if (currentData.length) {
      id = currentData.at(-1).id;
      id += 1;
    }

    // Save data to localStorage
    const dataToSave = { ...data, id };
    currentData.push(dataToSave);
    localStorage.setItem(DB_KEY, JSON.stringify(currentData));

    // Return last save element
    return getData().at(-1);
  };
  const deleteData = (id) => {
    if (typeof id !== "number") return null;
    const currentData = getData();

    const userIndex = currentData.findIndex(
      (singleUser) => id === singleUser.id,
    );

    if (userIndex === -1) return null;

    const removeContact = currentData.splice(userIndex, 1)[0];
    localStorage.setItem(DB_KEY, JSON.stringify(currentData));

    return removeContact;
  };

  return {
    getData,
    setData,
    deleteData,
  };
}

const dataBase = createDataBase();

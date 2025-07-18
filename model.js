"use strict";

function createDataBase() {
  const DB_KEY = "products";
  const OBJECT_KEYS = ["itemName", "itemPrice", "itemDescription"];

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
    const currentData = getData(); //[]

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
      (singleProduct) => id === singleProduct.id,
    );

    if (userIndex === -1) return null;

    const removeItem = currentData.splice(userIndex, 1)[0];
    localStorage.setItem(DB_KEY, JSON.stringify(currentData));

    return removeItem;
  };

  // Get product id for editing
  const getID = (id) => {
    localStorage.setItem(`selectedProductID`, id);
  };

  // Edit product
  const editProduct = (data) => {
    const productID = localStorage.getItem("selectedProductID");
    console.log(typeof productID, productID);
    const productsInLocalStorage = JSON.parse(localStorage.getItem("products"));
    console.log(typeof productsInLocalStorage, productsInLocalStorage);
    for (let i = 0; i < productsInLocalStorage.length; i++) {
      if (productsInLocalStorage[i].id === +productID) {
        productsInLocalStorage[i].itemName = data.itemName;
        productsInLocalStorage[i].itemPrice = data.itemPrice;
        productsInLocalStorage[i].itemDescription = data.itemDescription;
      }
    }
    console.log(productsInLocalStorage);
    localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
  };

  return {
    getData,
    setData,
    deleteData,
    getID,
    editProduct,
  };
}

const dataBase = createDataBase();

"use strict";

function createController() {
  // Add a category
  const addBtn = document.querySelector(".add-btn-category");
  addBtn.addEventListener("click", (e) => {
    const { target } = e;
    const userCategory = prompt("Enter a category:");
    const userData = { userCategory };
    dataBase.setData(userData);
    console.log(userData);
    if (userCategory === null) return null;
    console.log(userCategory);
  });
}

createController();

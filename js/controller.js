"use strict";

function createController() {
  // Render category list
  document.addEventListener("DOMContentLoaded", () => {
    const categories = dataBase.getData();
    categories.forEach((category) => {
      const template = ui.createTemplate(category);
      ui.renderCategory(template);
    });
  });
  // Add a category
  const addBtn = document.querySelector(".add-btn-category");
  addBtn.addEventListener("click", (e) => {
    const { target } = e;
    const userCategory = prompt("Enter a category:");
    const userData = { userCategory };
    dataBase.setData(userData);
    // console.log(userData);
    if (userCategory === null) return null;
    // console.log(userCategory);
    const dataCategory = dataBase.getData().at(-1);
    // console.log(dataCategory);
    const createCategoryTemplate = ui.createTemplate(dataCategory);
    ui.renderCategory(createCategoryTemplate);
  });

  // Add a subcategory
  const categories = document.querySelector("[data-categories]");
  categories.addEventListener("click", (e) => {
    const { target } = e;
    console.log(target);
    // console.dir(target);
    if (target.dataset.subcategory !== "add") return null;
    const category = target.closest("li");
    // console.log(category);
    const categoryId = Number(category.getAttribute("data-category-id"));
    // console.log(categoryId);
    const userSubcategory = prompt("Enter a subcategory:");
    const userData = [userSubcategory];
    console.log(userData);
    const dataSubcategory = dataBase.createSubcategory(userData, categoryId);
    console.log(dataSubcategory);
    const createSubCategoryTemplate =
      ui.templateForSubcategory(dataSubcategory);
    ui.renderSubcategory(createSubCategoryTemplate);
  });
}

createController();

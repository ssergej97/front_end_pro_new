"use strict";

function createController() {
  // Render category list
  document.addEventListener("DOMContentLoaded", () => {
    const categories = dataBase.getData();
    console.log(categories);
    categories.forEach((category) => {
      console.log(category);
      const template = ui.createTemplate(category);
      ui.renderCategory(template);
    });
  });

  // Render subcategory list
  document.addEventListener("DOMContentLoaded", () => {
    const categories = dataBase.getData();
    console.log(categories);
    categories.forEach((category) => {
      const values = Object.values(category);
      const subCategories = values[2];
      const subCategoriesId = values[1];
      console.log(subCategories);
      for (let i = 0; i < subCategories.length; i++) {
        const subcategoryTemplate = ui.templateForSubcategory(subCategories[i]);
        ui.renderSubcategory(subcategoryTemplate, subCategoriesId);
      }
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
    // console.log(target);
    // console.dir(target);
    if (target.dataset.subcategory !== "add") return null;
    const category = target.closest("li");
    // console.log(category);
    const categoryId = Number(category.getAttribute("data-category-id"));
    // console.log(categoryId);
    const userSubcategory = prompt("Enter a subcategory:");
    const userData = [userSubcategory];
    // console.log(userData);
    const dataSubcategory = dataBase.createSubcategory(userData, categoryId);
    // console.log(dataSubcategory);
    const createSubCategoryTemplate =
      ui.templateForSubcategory(dataSubcategory);
    ui.renderSubcategory(createSubCategoryTemplate, categoryId);
  });

  // Show subcategories
  categories.addEventListener("click", (e) => {
    const { target } = e;
    if (target.dataset.show !== "show") return null;
    const category = target.closest("li");
    const categoryId = Number(category.getAttribute("data-category-id"));
    const subcategories = document.querySelector(
      `[data-category-id='${categoryId}'] [data-subcategory]`,
    );
    if (subcategories.hasAttribute("style"))
      subcategories.removeAttribute("style");
    else if (!subcategories.hasAttribute("style")) {
      subcategories.setAttribute("style", "display: none");
    }
  });

  // Edit subcategories
  categories.addEventListener("click", (e) => {
    const { target } = e;
    if (target.dataset.subcategory !== "edit") return null;
    const category = target.closest("li");
    console.log(category);
    const categoryId = Number(category.getAttribute("data-category-id"));
    console.log(categoryId);
    const newCategory = prompt("Edit a category:");
    console.log(newCategory);
    dataBase.editCategory(newCategory, categoryId);
    ui.renderNewCategory(newCategory, categoryId);
  });

  // Delete category
  categories.addEventListener("click", (e) => {
    const { target } = e;
    if (target.dataset.subcategory !== "delete") return null;
    const category = target.closest("li");
    console.log(category);
    const categoryId = Number(category.getAttribute("data-category-id"));
    dataBase.deleteCategory(categoryId);
    ui.deleteCategory(categoryId);
  });
}

createController();

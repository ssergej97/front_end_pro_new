"use strict";

function createUi() {
  // Create template
  const createTemplate = ({ userCategory, id }) => {
    const wrapper = document.createElement("li");
    wrapper.setAttribute("data-category-id", id);
    const content = `
        <div><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3 .org/2000/svg" data-show="show">
            <path d="M10.6663 1.66669L5.99967 6.33335L1.33301 1.66669" stroke="#3D3D3D" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div>
            <h2>${userCategory}</h2>
            <ul data-subcategory></ul>
        </div>
        <button class="add-btn-subcategory" data-subcategory="add">Add a subcategory</button>
        <button class="edit-btn" data-subcategory="edit">Edit</button>
        <button class="delete-btn" data-subcategory="delete">Delete</button>
    `.trim();

    wrapper.innerHTML = content;

    return wrapper;
  };

  // Render a category
  const renderCategory = (template) => {
    const categories = document.querySelector("[data-categories]");
    categories.append(template);
  };

  const templateForSubcategory = (data) => {
    const subcategory = document.createElement("li");
    subcategory.innerHTML = `${data}`;
    return subcategory;
  };

  const renderSubcategory = (template, id) => {
    const subCategories = document.querySelector(
      `[data-category-id='${id}'] [data-subcategory]`,
    ); //
    subCategories.append(template);
  };

  const renderNewCategory = (data, id) => {
    const category = document.querySelector(`[data-category-id='${id}'] h2`);
    category.innerHTML = `${data}`;
  };

  const deleteCategory = (id) => {
    const category = document.querySelector(`[data-category-id='${id}']`);
    category.remove();
  };

  return {
    createTemplate,
    renderCategory,
    templateForSubcategory,
    renderSubcategory,
    renderNewCategory,
    deleteCategory,
  };
}

const ui = createUi();

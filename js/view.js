"use strict";

function createUi() {
  // Create template
  const createTemplate = ({ userCategory, id }) => {
    const wrapper = document.createElement("li");
    wrapper.setAttribute("data-category-id", id);
    const content = `
        <h2>${userCategory}</h2>
        <ul data-subcategory>
<!--            <li>Washing machines</li>-->
<!--            <li>Dishwashers</li>-->
<!--            <li>Fridges</li>-->
        </ul>
        <button class="add-btn-subcategory" data-subcategory="add">Add a subcategory</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `.trim();

    wrapper.innerHTML = content;
    // console.log(wrapper);

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

  const renderSubcategory = (template) => {
    const subCategories = document.querySelector("[data-subcategory]");
    subCategories.append(template);
  };

  return {
    createTemplate,
    renderCategory,
    templateForSubcategory,
    renderSubcategory,
  };
}

const ui = createUi();

"use strict";

function createUi() {
  // Create template
  const createTemplate = ({ category, subcategories, id }) => {
    const wrapper = document.createElement("li");
    wrapper.setAttribute("data-category-id", id);
    const categoryName = document.createElement("h2");
    categoryName.innerHTML = `${category}`;
    wrapper.append(categoryName);

    return wrapper;
  };

  // Render a category
  const renderCategory = (template) => {
    const categories = document.querySelector("[data-categories]");
    categories.append(template);
  };
}

const ui = createUi();

"use strict";

// Render product id for editing
const renderID = () => {
  const productID = localStorage.getItem("selectedProductID");
  const heading = document.querySelector("h2");
  heading.innerHTML = `Edit product #${productID}`;
};

renderID();

// Handle data for editing
const handleData = () => {
  const form = document.querySelector("[data-form]");

  const submitBtn = form.querySelector("[data-btn]");
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.disabled = true;

  const inputs = Array.from(form.querySelectorAll("input, textarea"));
  console.log(inputs);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;

    // Get data from the form
    const data = inputs.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
    console.log(data);
    target.reset();

    const productID = localStorage.getItem("selectedProductID");
    const productsInLOcalStorage = localStorage.getItem("products");
    console.log(`Before ${typeof productsInLOcalStorage}`);
    const parseTo = JSON.parse(productsInLOcalStorage);
    console.log(`After ${parseTo}`);
    // console.log(`Before ${parseTo}`);
    // for (let i = 0; i < productsInLOcalStorage.length; i++) {
    //   if (productsInLOcalStorage[i].id === productID) {
    //     productsInLOcalStorage[i].itemName = data.itemName;
    //     productsInLOcalStorage[i].itemPrice = data.itemPrice;
    //     productsInLOcalStorage[i].itemDescription = data.itemDescription;
    //     break;
    //   }
    // }
    // localStorage.setItem("products", JSON.stringify(products));
    console.log(`After ${productsInLOcalStorage}`);
    // const template = ui.createTemplate(savedItem);
    // ui.renderContact(template);
  });

  const disabledHandler = (e) => {
    let isInputFilled = true;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim().length) {
        isInputFilled = false;
        break;
      }
    }

    if (isInputFilled) {
      submitBtn.removeAttribute("disabled");
      submitBtn.disabled = false;
    } else {
      submitBtn.setAttribute("disabled", "disabled");
      submitBtn.disabled = true;
    }
  };
  form.addEventListener("input", disabledHandler);
};

handleData();

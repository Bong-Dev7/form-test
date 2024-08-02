// "use strict";
// "prettier.singleQuote = true";

// let productSelect1 = document.querySelector(".select-1");
// let quantityInput1 = document.querySelector(".input-quantity-1");
// let productSelect2 = document.querySelector(".select-2");
// let quantityInput2 = document.querySelector(".input-quantity-2");
// let userName = document.querySelector(".user-name");
// let userSite = document.querySelector(".user-site");
// let userDept = document.querySelector(".user-dept");
// let userEmail = document.querySelector(".user-email");
// let userPhone = document.querySelector(".user-phone");
// let addComments = document.querySelector(".add-comments");

const buttonVAlue = document
  .getElementById("getValuesButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const productSelect1 = document.querySelector("#productSelect1").value;
    const quantityInput1 = document.querySelector("#quantityInput1").value;
    const productSelect2 = document.querySelector("#productSelect2").value;
    const quantityInput2 = document.querySelector("#quantityInput2").value;
    const userName = document.querySelector("#userName").value;
    const userSite = document.querySelector("#userSite").value;
    const userDept = document.querySelector("#userDept").value;
    const userEmail = document.querySelector("#userEmail").value;
    const userPhone = document.querySelector("#userPhone").value;
    const addComments = document.querySelector("#addComments").value;

    alert(`Product: ${productSelect1} + \nQuantity: ${quantityInput1}`);
    console.log(
      `Product 1: ${productSelect1}, Quantity 1: ${quantityInput1}, 
      Product 2: ${productSelect2}, Quantity 2: ${quantityInput2}, 
      User Name: ${userName}, User Site: ${userSite}, 
      User Department: ${userDept}, User Email: ${userEmail}, 
      User Phone: ${userPhone}, Additional Comments: ${addComments}`
    );
  });

// document.addEventListener("DOMContentLoaded", function () {
//   // Wait for the DOM to be fully loaded before accessing elements

//   document
//     .querySelector(".submit-button")
//     .addEventListener("click", function (event) {
//       // Prevent the default form submission
//       event.preventDefault();

//       // Get values from the form
//       // const productSelect = document.querySelector(".select-1");
//       const productQuantity = document.querySelector(
//         ".select-1 + input[type='number']"
//       );
//       // var eltaMDSelect = document.querySelector(".select-2");
//       // var eltaMDQuantity = document.querySelector(
//       //   ".select-2 + input[type='number']"
//       // );
//       // var nameInput = document.querySelector(
//       //   "input[type='text'][placeholder='Name']"
//       // );
//       // var siteInput = document.querySelector(
//       //   ".rx-info input[placeholder='Site']"
//       // );
//       // var deptInput = document.querySelector(
//       //   ".rx-info input[placeholder='Dept']"
//       // );
//       // var emailInput = document.querySelector(
//       //   "input[type='email'][placeholder='Email']"
//       // );
//       // var phoneInput = document.querySelector(
//       //   "input[type='text'][placeholder='Phone']"
//       // );
//       // var commentsInput = document.querySelector(
//       //   "input[type='text'][placeholder='Additional Comments']"
//       // );

//       // Display values (you can modify this part based on your needs)
//       // console.log("Product: ", productSelect.value);
//       // console.log("Product Quantity: ", productQuantity.value);
//       // console.log("Elta MD: ", eltaMDSelect.value);
//       // console.log("Elta MD Quantity: ", eltaMDQuantity.value);
//       // console.log("Name: ", nameInput.value);
//       // console.log("Site: ", siteInput.value);
//       // console.log("Dept: ", deptInput.value);
//       // console.log("Email: ", emailInput.value);
//       // console.log("Phone: ", phoneInput.value);
//       // console.log("Additional Comments: ", commentsInput.value);
//     });
// });

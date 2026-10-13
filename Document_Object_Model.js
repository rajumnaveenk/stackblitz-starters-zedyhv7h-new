// 2. DOM Manipulation and Events
// Part A: What is the DOM?
// DOM stands for Document Object Model.
// When a browser loads an HTML page, it represents the page as a tree of objects. JavaScript can use the DOM to read and change HTML elements, styles, and content.
// For example, JavaScript can:
// - Change text on a page
// - Change CSS styles
// - Add or remove elements
// - Respond to button clicks
// - Validate form inputs

// document.addEventListener("DOMContentLoaded" , ()=> {
//     const newOne = document.getElementById("newText");
//     newOne.textContent = "new Text";
// });




// document.addEventListener("DOMContentLoaded" , ()=>{
//     const newText = document.getElementById("newText");
//     const newBtn = document.querySelector(".newClass");

//     newBtn.addEventListener("click" , ()=> {
//         newText.textContent = "New content changed";
//     });
// })
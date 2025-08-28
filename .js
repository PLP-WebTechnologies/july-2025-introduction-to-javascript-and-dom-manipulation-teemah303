// ----------------------
// Part 1: JavaScript Basics
// ----------------------

// Variable declarations
let userName = "";
let isLoggedIn = false;

// Capture user input and use conditionals
document.getElementById("greetBtn").addEventListener("click", function () {
  userName = document.getElementById("nameInput").value;

  if (userName.trim() === "") {
    document.getElementById("greetingOutput").textContent = "Please enter your name.";
  } else {
    isLoggedIn = true;
    document.getElementById("greetingOutput").textContent = `Hello, ${userName}!`;
  }
});

// ----------------------
// Part 2: Functions
// ----------------------

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a string
function formatString(str) {
  return str.trim().toUpperCase();
}

// Example usage
console.log("Total:", calculateTotal(10, 3)); // 30
console.log("Formatted:", formatString("  hello world  ")); // "HELLO WORLD"

// ----------------------
// Part 3: Loops
// ----------------------

// Loop to populate a list
const items = ["Apples", "Bananas", "Cherries"];
items.forEach(function (item) {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("itemList").appendChild(li);
});

// Countdown using a for loop
for (let i = 5; i >= 1; i--) {
  console.log("Countdown:", i);
}

// ----------------------
// Part 4: DOM Manipulation
// ----------------------

// Toggle dark mode class
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Create a new element dynamically
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newParagraph);

// Change text content on click
newParagraph.addEventListener("click", function () {
  newParagraph.textContent = "You clicked the paragraph!";
});
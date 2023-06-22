//your JS code here. If required.
// Find the element with id="level"
const targetElement = document.getElementById("level");

// Initialize a counter variable
let level = 0;

// Traverse up the DOM tree and count the number of parent elements
let parentElement = targetElement.parentNode;
while (parentElement !== document.documentElement) {
  level++;
  parentElement = parentElement.parentNode;
}

// Display the DOM level
alert("The level of the element is: " + level);


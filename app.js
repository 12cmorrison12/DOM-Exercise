// Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

// Select the section with an id of container using querySelector.
const containerQ = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const classOne = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const liThird = document.getElementsByTagName('ol');
liThird = document.getElementsByClassName('third'); 

// Give the section with an id of container the text “Hello!”.
container.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('footer');
footer.createElement('div');

// Remove the class main on the div with a class of footer.
footer.remove('main');

// Create a new li element.
// Give the li the text “four”.
// Append the li to the ul element.
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
// Remove the div with a class of footer














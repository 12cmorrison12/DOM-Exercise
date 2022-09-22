// Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

// Select the section with an id of container using querySelector.
const containerQ = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const classOne = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const liThird = document.querySelector('ol .third'); 

// Give the section with an id of container the text “Hello!”.
container.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('footer');
footer.classList.add('main');

// Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// Create a new li elements
const newLi = document.createElement("li");

// Give the li the text “four”.
newLi.innerText = "four";

// Append the li to the ul element.
const uls = document.querySelector('ul');
uls.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const lisInOl = document.querySelector('ol li');

for(let li of lisInOl) {
    li.style.backgroundColor = "green";
}

// Remove the div with a class of footer
const toRemove = document.getElementsByClassName('footer');
toRemove.remove();














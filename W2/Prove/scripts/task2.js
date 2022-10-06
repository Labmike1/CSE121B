/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Miguel V Baylon';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const myNameElement = document.querySelector ('#name');
myNameElement.innerHTML = myName;
//document.querySelector('#name').innerHTML = 'Miguel V Baylon';


// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
// const mycurrentYear = document.getElementById('year');
// mycurrentYear.innerHTML = currentYear;

document.querySelector('#year').innerHTML = currentYear; 

// Step 5: declare and instantiate a variable to hold the name of your picture
let newImage =  'images/Miguel.png';

// Step 6: copy your image into the "images" folder
// completed

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
 
document.querySelector('#image').src = `${newImage}`;

 


 
 

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favfood = ['Tacos',' Pizza', ' Hamburguer',' Enchiladas', ' Rice'];


// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML =  favfood ;

// Step 3: declare and instantiate a variable to hold another favorite food
let otherfood = 'Caldo';

// Step 4: add the variable holding another favorite food to the favorite food array
favfood.push( otherfood );

// Step 5: repeat Step 2
 

// Step 6: remove the first element in the favorite foods array
favfood.shift();

// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array
favfood.pop();

// Step 7: repeat Step 2



 
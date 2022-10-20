let ageButton = document.querySelector(".age-button")

// task 1:  declare a variable called inputName and assign it to the class called "name" using querySelector.
let inputName = document.querySelector(".name");

// task 2: declare a variable called inputYear and assign it to the class called "year" using querySelector.
let inputYear = document.querySelector(".year");

// task 3: declare a variable called message and assign it to the class called "message" using querySelector.
let message = document.querySelector(".message");

// task 4: declare a variable called currentYear and set it equal to the current year.
let currentYear = new Date().getFullYear();

// task 5: declare a variable called userName. Do not store a value yet.
let username;

// task 6: declare a variable called userYear. Do not store a value yet.
let userYear;


// task 7: declare a variable called age. Do not store a value yet.
let age;




ageButton.onclick = function() {

  // task 8: assign a value to userName. Set it equal to the value of inputName.
 userName = inputName.value;

  // task 9: assign a value to userYear. Set it equal to the value of inputYear. This is a number! Be sure to use the Number function on it!
 userYear = Number(inputYear.value);

  // task 10: assign a value to age. We need to calculate this value by subtracting the userYear from currentYear
 age = currentYear - userYear;

  // task 11: using .innerHTML, update message to display the userName and age. Use string interpolation for this to have a personalized message like: ________, it looks like you are (turning) _____ years old!
  
  if (Number.isNaN(age)) {
    message.innerHTML = `Goofy AHH don't know what a number is.`;
  } else {
    message.innerHTML = `${userName}, it looks like you are (turnin) ${age} years old!`;
  }
}

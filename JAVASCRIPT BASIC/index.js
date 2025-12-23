/*
BASIC

console.log(`Hello`);
console.log(`I like pizza!`);

//window.alert(`This is an alert!`);
//window.alert('I like pizza!');

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;*/

/*
VARIABLES
// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration      let x;
// 2. assignment       x = 100;



let x;
x = 100;
console.log(x);

let age= 25;
let price = 10.99;
let gpa = 8.6;
let firstName = "Siya";
let favouriteFood = "Pizza";
let email = "Siya@gmail.com";
let online = true;
let forSale = false;

console.log(age);
console.log(price);
console.log(gpa);
console.log(firstName);
console.log(favouriteFood);
console.log("Siya@gmail.com");

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof online);

console.log(`Your name is ${firstName}`);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);
console.log(`Siya is online : ${online}`);
console.log(`Is this car for sale : ${forSale}`);


let fullName = "Siya Agrawal";
let age = 19;
let isStudent = true;

document.getElementById("p1").textContent = `My name is: ${fullName}`;
document.getElementById("p2").textContent = `My age is: ${age}`;
document.getElementById("p3").textContent = `Enrolled : ${isStudent}`;
*/


/*
ARITHEMATIC OPERATORS

// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//
// ex.      11 = x + 5;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students /2;
//students = students**2;
//let extraStudents = students%4;

//students += 1;
//students++;
console.log(students);

/*
operator precedence
  1. parenthesis ()
  2. exponents
  3. multiplication & division & modulo
  4. addition & subtraction


let result = 1+2*3+4**2;
console.log(result);
*/

/*
ACCEPT USER INPUT

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let userName;

userName = window.prompt("What's your username?");

console.log(userName);

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("hi").textContent = `Hello ${username}`;
}
*/

/*
TYPE CONVERSION

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age,typeof age);
*/

/*
CONSTANTS

//const = a variable that can't be changed

const pi = 3.14159;
let radius;
let circumference;
 
radius = window.prompt("Enter the radius of the circle:");
radius = Number(radius);

circumference = 2*pi*radius;

console.log(circumference);

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2* PI * radius;
    document.getElementById("myH3").textContent = circumference;
}


//Math = built-in object that provides a 
// collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3;
let y =2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(y,x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x,y,z);
console.log(max);
let min = Math.min(x,y,z);
console.log(min);
//console.log(z);


//RANDOM NUMBER GENERATOR

const min = 50;
const max = 100;

//let randomNum = Math.floor(Math.random()*6)+1;
let randomNum = Math.floor(Math.random()*(max-min))+min;

console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max)+min;
  randomNum2 = Math.floor(Math.random() * max)+min;
  randomNum3 = Math.floor(Math.random() * max)+min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}

//IF STATEMENTS = if a condition is true, execute some code
  //                if Notification, do something else

let age = 13;

if(age>=18){
  console.log("You are old enough to enter this site");
}
else{
  console.log("You must be 18+ to enter this site");
}

let isStudent = true;

if(isStudent){
  console.log("You are a student");
}
else{
  console.log("You are not a student");
}

let age = 18;
let hasLicense = true;

if(age>=16){
  console.log("You are old enough to have a license ");

  if(hasLicense){
    console.log("You have a license");
  }
  else{
    console.log("You do not have a license yet");
  }
}
else{
  console.log("You must be 16+ to have  a license");
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age ;

mySubmit.onclick = function(){

  age = myText.value;
  age = Number(age);

  if(age>=18){
  resultElement.textContent = `You are old enough to enter this site`;
}
else if(age<0){
  resultElement.textContent = `Your age cannot be below 0`;
}
else{
  resultElement.textContent = `You must be 18+ to enter this site`;
}
}

// .checked = property that determines the checked state of an
//             HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
  if(myCheckbox.checked){
    subResult.textContent = `You are subscribed`;
  }
  else{
    subResult.textContent = `You are NOT subscribed`;
  }

  if(visaBtn.checked){
    paymentResult.textContent = `You are paying with Visa`;
  }
  else if(masterCardBtn.checked){
    paymentResult.textContent = `You are paying with MasterCard`;
  }
  else if(payPalBtn.checked){
    paymentResult.textContent = `You are paying with PayPal`;
  }
  else{
    paymentResult.textContent = `You must select a payment type`;
  }
} 

// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age>=18 ? "You are an adult" : "You are a minor";
console.log(message);

let isStudent = true;
let message = isStudent ? "You are a student" : "You are not a student";
console.log(message);

//SWITCH can be an efficient replacement to many else if statements

let day = 1;

switch(day){
  case 1:
    console.log("It is monday");
    break;
  case 2:
    console.log("It is tuesday");
    break;
  case 3:
    console.log("It is wednesday");
    break;
  case 4:
    console.log("It is thursday");
    break;
  case 5:
    console.log("It is friday");
    break;
  case 6:
    console.log("It is saturday");
    break;
  case 7:
    console.log("It is sunday");
    break;
  default:
    console.log(`${day} is not a day`)
}

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);

//STRING METHODS = allow you to manipulate and work with text (strings)

let userName = "Siya Agrawal";

console.log(userName.charAt(0));
console.log(userName.indexOf("i"));
//console.log(userName.lastIndexOf("i"));
//console.log(userName.length);
//console.log(userName = userName.toUpperCase());
console.log(username = userName.toLowerCase());
console.log(username = userName.repeat(3));
console.log(result = userName.startsWith(" "));
console.log(result = userName.endsWith(" "));
console.log(result = userName.includes(" "));
console.log(userName = userName.replaceAll(" ", ""));
console.log(userName = userName.padStart(17,"a"));

//let userName = "Siya  ";
//console.log(userName = userName.trim());

// STRING SLICING = creating a substring
//                  from a portion of another string
//
// string.slice(start, end)

const fullName = "Siya Agrawal";
let firstName = fullName.slice(0,4);
console.log(firstName);

let lastName = fullName.slice(5,12);
console.log(lastName);

let fullName = "Siya Agrawal";
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastName);

// Method Chaining = Calling one method after another
//                   in one continuous line of code.

// ----- NO METHOD CHAINING -----
let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter+extraChars;
console.log(username);

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

// logical operators = used to combine or manipulate boolean values
//                     (true or false)
//
//         AND = &&
//         OR  = ||
//         NOT = !

const temp = 20;
if(temp>0 && temp<=30){
  console.log("The weather is gud");
}
else{
  console.log("Not gud");
}
  
const isSunny = true;

if (!isSunny) {
    console.log("It is CLOUDY");
}
else {
    console.log("It is SUNNY");
}


// =   assignment operator
// ==  comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// !=  inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI === "3.14"){
  console.log("That is Pi");
}
else{
  console.log("That is not Pi");
}

const PI = "3.14";

if (PI !== "3.14") {
    console.log("That is NOT Pi");
}
else {
    console.log("That is Pi");
}

//WHILE LOOPS = repeat some code WHILE some condition is true

let username = "Siya";
while(username === ""){
  console.log("You didn't enter your name");
}
console.log(`Hello ${username}`);

let username = "";

while(username === "" || username === null){
  username = window.prompt("Enter your name:");
}
console.log(`Hello ${username}`);

let username = "";

do{
  username = window.prompt("Enter your name:");
}while((username === "" || username === null))
console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {

    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}

let loggedIn = true;
let username;
let password;

do {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }

} while (!loggedIn);



//FOR LOOP = repeat some code a LIMITED amount of times

for(let i = 10; i > 0; i--){
    console.log(i);
}
    
for (let i = 1; i <= 20; i++) {

    if (i == 13) {
        continue;
    }
    else {
        console.log(i);
    }
}


// FUNCTIONS = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBday(username){
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}`);
  console.log("Happy birthday to you!");
}

happyBday("Siya");

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Bro@fake.com"));

// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3;

function2();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

//ARRAY  = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");  //(Adding element at end)
fruits.pop();  //(removing end)
fruits.unshift("mango");  //(adding front)
fruits.shift();  //(removing front)
let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(index);

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.sort().reverse().

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
//SPREAD OPERATOR  = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);


//REST PARAMETERS  = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array
//
// spread = expands an array into separate elements
// rest   = bundles separate elements into an array

function openFridge(...foods)(REST){
    console.log(...foods)(SPREAD);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log('Your total is $${total}');


//CALLBACK  = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next."

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

//FOR EACH() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element
//
//             array.forEach(callback)
//             element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}


// .MAP() = accepts a callback and applies that function
//          to each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// .FILTER() = creates a new array by filtering
//             out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

let isEvenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const words = ["apple", "orange", "banana", "kiwi",
               "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

// .REDUCE() = reduce the elements of an array
//             to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next){
    return previous + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


// FUNCTION EXPRESSIONS = a way to define functions as
//                        values or variables

setTimeout(function(){
    console.log("Hello!");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);


// ARROW FUNCTIONS = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

setTimeout(() => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);
*/





// // ES6 Module - An external file that contains reusable code
// //              that can be imported into other JavaScript files.
// //              Write reusable code for many different apps.
// //              Can contain variables, classes, functions ... and more
// //              Introduced as part of ECMAScript 2015 update

// import { PI, getCircumference, getArea, getVolume } from "./MathUtil.js";

// console.log(PI);

// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// // synchronous = Executes line by line consecutively in a sequential manner
// //               Code that waits for an operation to complete.

// // asynchronous = Allows multiple operations to be performed concurrently without waiting
// //                Doesn't block the execution flow and allows the program to continue
// //                (I/O operations, network requests, fetching data)
// //                Handled with: Callbacks, Promises, Async/Await


// function func1(callback){
//     setTimeout(() => {
//         console.log("Task 1");
//         callback();
//     }, 3000);
// }

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);


// // Error = An Object that is created to represent a problem that occurs
// //         Occur often with user input or establishing a connection

// // try { } = Encloses code that might potentially cause an error
// // catch { } = Catch and handle any thrown Errors from try { }
// // finally { } = (optional) Always executes. Used mostly for clean up
// //               ex. close files, close connections, release resources


// try{
//     console.log(x);
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }

// console.log("You have reached the end!");

// //
// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if(divisor == 0){
//         throw new Error("You can't divide by zero!");
//     }

//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }

// console.log("You have reached the end!");


// // Promise = An Object that manages asynchronous operations.
// //             Wrap a Promise Object around {asynchronous code}
// //             "I promise to return a value"
// //             PENDING -> RESOLVED or REJECTED
// //             new Promise((resolve, reject) => {asynchronous code});


// // DO THESE CHORES IN ORDER


// // 1. WALK THE DOG
// // 2. CLEAN THE KITCHEN
// // 3. TAKE OUT THE TRASH

// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(( )=> {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didnt walk the dog");
//             }
//         },1500);
    
//     } );
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {

//             const kitchenCleaned = false;

//             if(kitchenCleaned){
//                 resolve("You cleaned the kitchen");
//             }
//             else{
//                 reject("You didnt cleaned the kitchen");
//             }
//         },2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You took the trash out");
//             }
//             else{
//                 reject("You didnt took the trash out");
//             }
//         },1000);
        
//     });
// }

// walkDog().then(value => {console.log(value); return clearKitchen()})
//     .then(value => {console.log(value); return takeOutTrash()})
//     .then(value => {console.log(value); console.log("You completed all the chores")})
//     .catch(error => console.error(error));


// // Async/Await = Async = makes a function return a promise
// //               Await = makes an async function wait for a promise


// //               Allows you write asynchronous code in a synchronous manner
// //               Async doesn't have resolve or reject parameters
// //               Everything after Await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(( )=> {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didnt walk the dog");
//             }
//         },1500);
    
//     } );
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {

//             const kitchenCleaned = false;

//             if(kitchenCleaned){
//                 resolve("You cleaned the kitchen");
//             }
//             else{
//                 reject("You didnt cleaned the kitchen");
//             }
//         },2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You took the trash out");
//             }
//             else{
//                 reject("You didnt took the trash out");
//             }
//         },1000);
        
//     });
// }

// async function doChores(){
//     try{
//         const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);
//     }
//     catch(error){
//         console.error(error);
//     }
    
// }

// doChores()

// // JSON = (JavaScript Object Notation) data-interchange format
// //        Used for exchanging data between a server and a web application
// //        JSON files {key:value} OR [value1, value2, value3]


// //        JSON.stringify() = converts a JS object to a JSON string.

// const names = ["SpongeBob","Patrick","Sandy"];
// const person = {
//     "name" : "SpongeBob",
//     "age" : 30,
//     "isEmployed" : true,
//     "hobbies": ["Karate","Jellyfishing","cooking"]
// };

// const people = [
//   {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
//   },

//   {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
//   },

//   {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
//   },

//   {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
//   }
// ];

// const jsonString =JSON.stringify(names);
// const jsonString = JSON.stringify(person);
// const jsonString = JSON.stringify(people);

// console.log(jsonString);

// //        JSON.parse() = converts a JSON string to a JS object

// const jsonnames = `["SpongeBob","Patrick","Sandy"]`;
// const jsonPerson = `{"name" : "SpongeBob","age" : 30,"isEmployed" : true,"hobbies": ["Karate","Jellyfishing","cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                      {"name": "Patrick","age": 34,"isEmployed": false},
//                      {"name": "Squidward","age": 50,"isEmployed": true},
//                      {"name": "Sandy","age": 27,"isEmployed": false}]`;

// const parsedData = JSON.parse(jsonNames);
// const parsedData = JSON.parse(jsonPerson);
// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)));


// // fetch = Function used for making HTTP requests to fetch resources.
// //          (JSON style data, images, files)
// //          Simplifies asynchronous data fetching in JavaScript and
// //          used for interacting with APIs to retrieve and send
// //          data asynchronously over the web.
// //
// //          fetch(url, {options})


// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //     .then(response => console.log(response))
// //     .catch(error => console.error(error));

// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //      .then(response => response.json())
// //      .then(data => console.log(data))
// //      .catch(error => console.error(error));

// // fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
// //      .then(response => console.log(response))
// //      .then(data => console.log(data.id))
// //      .catch(error => console.error(error));

// // fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
// //      .then(response => {
// //         if(!response.ok){
// //             throw new error("Could not fetch resource");
// //         }

// //         return response.json();
// //      })
// //      .then(data => console.log(data.id))
// //      .catch(error => console.error(error));

// fetchData();

// async function fetchData(){
//     try{

//         const pokemonName = document.getElementById("pokemonName").value;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new error("Could not fetch resources");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprite.front_default;
//         const imgElement = document.getElementById("pokemonSprite");
        
//         imgElement.src = pokemonSprite;
//         imgElement.sprite.dsiplay = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// DOM = DOCUMENT OBJECT MODEL
//     Object{} that represents the page you see in the web browser
//     and provides you with an API to interact with it.
//     Web browser constructs the DOM when it loads an HTML document,
//     and structures all the elements in a tree-like representation.
//     JavaScript can access the DOM to dynamically
//     change the content, structure, and style of a web page.
//

// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0,0%,15%)";
// console.dir(document);

// const username = "Siya";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)


// 1. document.getElementById()        // ELEMENT OR NULL

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "Yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// 2. document.getElementsClassName()  // HTML COLLECTION


// const fruits = document.getElementsByClassName("fruits");
// fruits[1].style.backgroundColor = "yellow";

//  for(let fruit of fruits){
//      fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// 3. document.getElementsByTagName()  // HTML COLLECTION

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[1].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });
// 4. document.querySelector()         // ELEMENT OR NULL

// const element = document.querySelector("ul");

// element.style.backgroundColor = "yellow";

// 5. document.querySelectorAll()      // NODELIST

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow";
// });

//Add and Change HTML Elements

//Example 1 <h1> 

//STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

//STEP 2 ADD ATTRIBUTES//PROPERTIES

// newH1.textContent = "I like Pizza";
// newH1.id = "myH1";
// newH1.style.color = "tomato";

//STEP 3 APPEND ELEMENT TO DOM

//document.body.append(newH1);
//document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

//IF the elements dont have a class
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[1]);

//REMOVE HTML ELEMENT

//document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// ---------- EXAMPLE 3 <li> ----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListItem);
//document.body.prepend(newListItem);
//document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newListItem);
// document.getElementById("fruits").removeChild(newListItem);
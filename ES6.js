function mainFunction(callback) {
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function(){
        callback("Operation complete");});
}
function callbackFunction(result) {
    console.log(result);
}
mainFunction(callbackFunction);

//---------------------------------------------------------------
// Function that returns a promise
function fetch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetch()
    .then(data => console.log(data)) 
    .catch(error => console.error(error));

//---------------------------------------
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("successfull!");
        }, 1000);
    });
}
async function getData() {
    const result = await fetchData();
    console.log(result);
}
getData(); 

//---------------------------------------------

function simpleExample() {
    try {
        console.log("Try block: Executing some code");
        // Simulating an error condition
        throw new Error("This is an error!");
    } catch (error) {
        console.error("Catch block:", error.message);
    } finally {
        console.log("Finally block: Cleanup or additional operations");
    }
}
simpleExample();
//--------------------------------------------------
var jsonString = '{"name": "John", "age": 30, "city": "New York"}'; // JSON string
var parsedObject = JSON.parse(jsonString); // Parse JSON string into a JavaScript object
console.log(parsedObject.name); 
console.log(parsedObject.age); 
console.log(parsedObject.city);

//----------------------------------------------------
// JavaScript object
var person = {
    name: 'Jane',
    age: 25,
    city: 'San Francisco'
};
// Convert JavaScript object to JSON string
var jsonStringified = JSON.stringify(person);
// Output the resulting JSON string
console.log(jsonStringified);

//------------------------------------------------------
//closure
function outer() {
    var name = "Mozilla";
    function inner() {// inner() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    inner();
}
outer();

//---------------------------------------------------
//ES6 
let arr1, arr2;
[arr1, arr2] = [10, 20];
console.log(arr1 + " " + arr2);

// Object destructuring
const pers = { name: "John", age: 30 };
const { name, age } = pers;
console.log(name + " " + age);

const nam = "Alice"; //Template Literal
console.log(`Hello, ${nam}!`);

//---------------------------------------------------------
let a = "Search a string for w3School";
console.log(a.replace("w3School", "Microsoft"));
const b = /hello/i; // i flag for case-insensitive match
console.log(b.test(a)); 
const pattern = /\d+/g; // g flag for global match
console.log(a.match(pattern)); 

//----------------------------------------------------
// Define a class representing a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }    
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);
person1.displayInfo();
person2.displayInfo();





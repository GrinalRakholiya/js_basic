let name = 'Sara';
{   
    let name = 'Peter';
    console.log(name); 
}
console.log(name); 

//-----------------------------------------------------

const nam='dd';
//nam='d'
console.log(nam);

//-----------------------------------------------------

let greet = () => console.log('Hello'); //Arrow Function with No Argument
greet(); // Hello

//--------------------------

let age = 12;
let welcome = (age < 18) ? //Arrow Function as an Expression
    () => console.log('Baby') :
    () => console.log('Adult');
welcome(); 

//--------------------------

let sum = (a, b) => { //Multiline Arrow Functions
    let result = a + b;
    return result;
}

let result1 = sum(5, 7);
console.log(result1); 

//--------------------------

function Men() {   //this with Arrow Function
    this.name = 'Jack',
        this.age = 25,
        this.sayName = function () {
        console.log(this.age);  // this is accessible

        let innerFunc = () => {
            console.log(this.age);
        }
            innerFunc();
        }
}
let x = new Men();
x.sayName();

//--------------------------

let d = (...n) => { //Arguments Binding
    console.log(n);
}
d(4, 6, 7); // argument: [4, 6, 7] 
//-----------------------------------------------------

class Person {
    constructor(names) {
        this.names = names;
    }
}
const person1 = new Person('John');
console.log(person1.names); 

//---------------------------------------------------

function add(x = 3, y = 5) {  //Default Parameters
    return x + y;
}
console.log(add(5, 15)); // 20 
console.log(add(7));    // 12
console.log(add());    // 8

//--------------------------

function Add(x = 1, y = x, z = x + y) { //Using Expressions as Default Values
    console.log(x + y + z);
}
Add(); // 4

//--------------------------

const sums = () => 15; // using a function in default value expression
const calculate = function (x, y = x * sums()) {
    return x + y;
}
const result = calculate(10);
console.log(result);            // 160

//---------------------------------------------------

const first_name = "Grin";
const last_name = "All";
console.log(`Hello ${first_name} ${last_name}`);  // template literals: easier to include variables inside a string

//--------------------------

const str1 = 'This is a string';
const str2 = 'A "quote" inside a string'; // cannot use the same quotes
//const str3 = 'A 'quote' inside a string';  // Error
console.log(str1);
console.log(str2);

//--------------------------

function tagExample(strings) { //Tagged Templates
        return strings;
    }
    const results = tagExample`Hello Jack`; //not pass parentheses () when calling the literal
    console.log(results);
//---------------------------------------------------

const array1 = ['a', 'b']; //Copy Array Using Spread Operator
const array2 = [...array1, 'c', 'd'];
console.log(array2); 

//--------------------------

const obj1 = { x: 1, y: 2 }; //spread operator with object literals
const obj2 = { z: 3 };

// add members obj1 and obj2  to obj3
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // {x: 1, y: 2, z: 3}

//--------------------------

let func = function (...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]
//---------------------------------------------------

const person = {name1: 'Sara', gender: 'female'}

let name1 = person.name1;
let gender = person.gender;

console.log(name1); 
console.log(gender); 

//---------------------------------------------------

let countValue = new Promise(function (resolve, reject) {
    resolve('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result); // Promise resolved
    },
)

//---------------------------------------------------

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}
show('one', 'two', 'three', 'four', 'five')

//---------------------------------------------------

let map1 = new Map(); // create a set

map1.set('info', { name: 'Jack', age: 26 }); // insert key-value pair
console.log(map1); 

//--------------------------

let map = new Map();
map.set('info', { name: 'Gri', age: "26" });

console.log(map.get('info')); // access the elements of a Map
console.log(map1.size); // 1
map.delete('info'); // true
console.log(map); // Map {}

//--------------------------

const weakMap = new WeakMap(); //contain only objects as keys
console.log(weakMap); // WeakMap {} 

let obj = {};

weakMap.set(obj, 'hello'); // adding object (element) to WeakMap

console.log(weakMap); // WeakMap {{} => "hello"}
console.log(weakMap.get(obj)); // get the element of a WeakMap hello
console.log(weakMap.has(obj)); // check if an element is present in WeakMap
console.log(weakMap.delete(obj)); // true
console.log(weakMap); // WeakMap {} 

//---------------------------------------------------

const set1 = new Set();  //unlike array, set cannot contain duplicate values
const set2 = new Set([1, 'hello', { count: true }]); // Set with multiple types of value
console.log(set2); // Set {1, "hello", {count: true}}
const set3 = new Set([2, 2, 4]); //remove duplicate
set3.add(5);
console.log(set3); 
set3.delete(4);
console.log(set3); 
for (let i of set3) {
    console.log(i);
}

//---------------------------------------------------

let a = 4;
let b = 7;
[a, b] = [b, a]; // swapping variables
console.log(a); 
console.log(b); 

const arrValue = ['one', 'two', 'three'];
const [c, , e] = arrValue; //Skip Items
console.log(c,e); // one

//---------------------------------------------------

class Persons {
    constructor(name) {
        this.name = name;
    }
}
const persons1 = new Persons('John'); // creating an object
const person2 = new Persons('Jack');
console.log(persons1.name); 
console.log(person2.name); 

//--------------------------

class Pearson {
    constructor(name) {
        this.name = name;
    }
    get personName() { 
        return this.name;
    }
    set personName(x) {
        this.name = x;
    }
}

let person3 = new Pearson('Ira  ');
console.log(person3.name); 
person3.personName = 'Sarah';
console.log(person3.name); 
console.log(typeof Pearson); // function

//---------------------------------------------------

const string = 'code';

for (let i of string) {  //for..of loop can be used to iterate over an array
    console.log(i);
}

// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}
//---------------------------------------------------
let student1 = {
    age: 24,
    name: "Felix"
}

const handle = {
    get: function (obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handle);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.class); // property does not exist

let student = { //use a proxy for validation
    name: 'fri',
    age: 24
}

const handler = {

    // get the object key and value
    get(obj, prop) {

        // check condition
        if (prop == 'name') {
            return obj[prop];
        } else {
            return 'Not allowed';
        }
    }
}

const proxy1 = new Proxy(student, handler);
console.log(proxy1.name); // Jack
console.log(proxy1.age); // Not allowed

//---------------------------------------------------

let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)

//---------------------------------------------------

const symbol1 = Symbol('example1');
const symbol2 = Symbol('example1');
console.log(symbol1 === symbol2);


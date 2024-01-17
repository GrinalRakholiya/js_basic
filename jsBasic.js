var a = 10
function f() {
    var b=1;
    console.log(a)
    console.log(b)
}
f();
console.log(a);
console.log(c);
var c = 2;

function f1() {
    g = 10
    console.log(g)
}
f1();
const y = {
    prop1: 40,
    prop2: 9
}
y.prop1 = 3
console.log(y);
//-----------------------------------------------------------
function j(){
    let x,y,z;
    x=4;
    y=6;
    z=4;
    console.log(x==y)
    console.log(x <= y)
    console.log(x||z)
    console.log(2+3)
}
j();
//-----------------------------------------------------------
let num = -10;
if (num > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");

let n = 5;

switch (n) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is five.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};
//-----------------------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log("Hello World!");    
}
// JavaScript code to use while loop
let val = 1;
while (val < 6) {
    console.log(val);
    val += 1;
}
let test = 11;
do {
    console.log(test);
    test++;
} while (test <= 15)
//-----------------------------------------------------------
function f() {
    return 4 / 2;
}
console.log(f());

const square = function (n) {
    return n * n;
};
const x = square(7); // x gets the value 49
console.log(x);
//-----------------------------------------------------------
const v=["g",56,"rt"];
console.log(v);
v[0]="fg";
console.log(v);
v.push("sd");
console.log(v);
console.log(v[0],v[1]);
v.pop();
console.log(v);
var item = ["Apple", "Banana", "Grape", "Strawberry"];
item.shift();
console.log(item);
var it = ["Apple", "Banana", "Grape", "Strawberry"];
it.unshift("orange");
console.log(it);
var items = ["Apple", "Banana", "Grape", "Strawberry"];
items.splice(2, 1);//remove item from position 2 and only one item
console.log(items);
var ite = ["Apple", "Banana", "Grape", "Strawberry"];
let i=ite.slice(1,3);//create new array from postion 1 to 2
console.log(i);
//-----------------------------------------------------------
let person = {
    firstName: "John",
    lastName: "Doe",
   };
console.log(person);
console.log(person.firstName);
person.firstName="ft";
console.log(person.firstName);
delete person.lastName;
console.log(person);


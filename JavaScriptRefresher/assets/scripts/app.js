// import { apiKey, apiKey2 as aliasName } from "./util.js";
// import apiKey from "./util.js";
import * as util from "./util.js";

console.log(util.default);

// Variables

let variable1 = "Not const variable";
variable1 = "It can be updated";

const variable2 = "Its constant, so it can't be updated";

//Functions

function greet(userName, message = "Hello!") {
    console.log(userName + ": " + message);
    return 0;
}

greet("Iuri");
greet("Severo", "How are you?");

// export default function() { // Anonimous function
//     return 0;
// }

(userName, message) => { // Anonimous arrow function
    return userName + ": " + message;
}

// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
// userName => {
//     return "My name is " + userName;
// }

// If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
// number => number * 3;

// Special case: Just returning an object
// invalid: number => { age: number }; // trying to return an object
// valid: number => ({ age: number }); // wrapping the object in extra parentheses

// Objects

const user = {
    name: "Iuri",
    age: 26,
    greet() {
        return "Hi, my name is " + this.name + "! I'm " + this.age + "."
    }
}

console.log(user.greet());

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hi, my name is " + this.name + "! I'm " + this.age + "."
    }
}

const user2 = new User("Iuri", 26);
console.log(user2.greet());

// Arrays & Array Methods like map()

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports")
console.log(index);

const editedHobbies = hobbies.map((item) => ({text: item}));
console.log(editedHobbies);

// Destructuring

// const userNameData = ["Iuri", "Severo"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
const [firstName, lastName] = ["Iuri", "Severo"];
console.log(firstName);
console.log(lastName);

// const user3 = {
//     name: "Iuri",
//     age: 26
// };
// const nameUser3 = user.name;
// const ageUser3 = user.age;
const {name: nameUser3, age: ageUser3} = {
    name: "Iuri",
    age: 26
}
console.log(nameUser3);
console.log(ageUser3);

// The destructuring syntax explained in the previous lecture can also be used in function parameter lists.
// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }
// ===
// function storeOrder({id, currency}) { // destructuring
//    localStorage.setItem('id', id);
//    localStorage.setItem('currency', currency);
// }
// storeOrder({id: 5, currency: 'USD', amount: 15.99});

// Spread Operator
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies]; // concat arrays
console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);

// Control Structures
// if {} else if {} else {}

for(const hobby of hobbies) {
    console.log(hobby);
}

// Manipulating the DOM
const list = document.querySelector("ul");
list.remove();

// Using functions as values
function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out... again");
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...")
}, 4000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"));

// Defining function inside functions
function init() {
    function greet() {
        console.log("Hi");
    }

    greet();
}

init();

// Reference vs Primitive Values
let userMessage = "Hello!";
userMessage = userMessage.concat("!!!"); // Generate a new string

// Arrays and objects uses reference
hobbies.push("Working");
console.log(hobbies);

// Const doesn't allow to asign a new value to a variable, but allow the update of the variable if it doesn't change the memory region where it is saved

// JS Array Functions
// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

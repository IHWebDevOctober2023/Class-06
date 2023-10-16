// FUNCTION DECLARATION
// I can call the function before it's declaration because the code compiles everything.
// And it moves the function DECLARATIONS to the top HOISTING

function sum(a, b) {

    return a + b;
}


// We call the function

// console.log(sum(20,15));

// Functions are considered first-class objects / first-class citizens. 
// They can be treated as any other type of data (strings, numbers...)

// FUNCTION EXPRESSION

const substraction = function (a, b) {
    return a - b
}

// console.log(substraction(20, 10))

// ARROW FUNCTIONS / FAT ARROW

const multiplication = (a, b) => {
    return a * b
}

// console.log(multiplication(2,2));

// here JS already knows that "a" is a parameter and whatever is after the arrow is going to be a return (it only works with one parameter)
const double = a => a * 2;
const sumSimplified = (a, b) => a + b

// console.log(double(15));

// CALLBACK FUNCTIONS 
// Use a function inside another function as argument

function sayHi(name) {
    console.log(`Hi! ${name}`);
}

function sayBye(name) {
    console.log(`Goodbye! ${name}`);
}

function greet(name, callback) {
    callback(name)
}

greet("Marcel", sayHi)

const arrayOfNames = ["Rafa", "Marc", "Victor"];

// if we do it in one line we don't need the curly braces {}
arrayOfNames.forEach((name)=> console.log(`Hello ${name}`))

// only if we add more than one line inside the callback function
arrayOfNames.forEach((name)=>{
    const numberOfLetters = name.length;
    console.log(`${name} has ${numberOfLetters} letters!`);
})
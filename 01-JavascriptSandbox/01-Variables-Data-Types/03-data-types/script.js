// String
const firstName = 'Sara';

console.log(firstName, typeof firstName);

// Number
const age = 30;

console.log(age, typeof age);

// Boolean
const hasKids = true;

console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;

console.log(aptNumber, typeof aptNumber);

// Undefined
// let score;
const score = undefined;

console.log(score, typeof score);

// Symbol
const id = Symbol('id');

console.log(id, typeof id);

// Reference Types

const numbers = [1, 2, 3, 4];

console.log(numbers, typeof numbers);

const person = {
	name: 'Brad',
};

console.log(person, typeof person);

function sayHello() {
	console.log('Hello');
}

console.log(sayHello, typeof sayHello);

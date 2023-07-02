let amount = '100';

console.log(amount, typeof amount);

// Convert string to number
//amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);

// Convert number to string
// amount = amount.toString();
amount = String(amount);

console.log(amount, typeof amount);

// Convert string to decimal
amount = '99.5';

amount = parseFloat(amount);

console.log(amount, typeof amount);

// Convert number to boolean
amount = 1;

amount = Boolean(amount);

console.log(amount, typeof amount);

amount = 0;

amount = Boolean(amount);

console.log(amount, typeof amount);

// NaN
amount = 'hello';

amount = parseInt(amount);

console.log(amount, typeof amount);

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

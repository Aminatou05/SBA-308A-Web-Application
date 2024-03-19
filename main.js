// main.js
import { greet, someData } from './modules/module1.js';
import { calculateSum } from './modules/module2.js';
import { PI, square } from '././modules/module3.js';

console.log(greet('Ahmet')); // Output: Hello, Ahmet!
console.log(someData); // Output: [1, 2, 3]

const numbers = [10, 20, 30];
console.log(calculateSum(numbers)); // Output: 60

console.log(PI); // Output: 3.14
console.log(square(5)); // Output: 25

// Use the fetch API or Axios to communicate with an external web 
// API. Use the data provided by this API to populate your 
// application’s content and features.

// Example using async/await my quran data


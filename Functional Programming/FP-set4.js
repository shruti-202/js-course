/*Reduce Question*/
//Q.1 Given an array, write an ES6 function that returns the total length of all the strings in an array.

const totalLength = (arr) => arr.reduce((acc, word) => acc + word.length, 0);
const strings = ["apple", "banana", "cherry", "date", "blueberry"];
console.log(totalLength(strings));

//Q.2 Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const sumSquares = (arr) => arr.reduce((acc, num) => num * num + acc, 0);
const numbers = [1, 2, 3, 4, 5];
console.log(sumSquares(numbers));

//Q.3 Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const totalPrice = (arr) => arr.reduce((acc, { price }) => price + acc, 0);

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

console.log(totalPrice(items));

//Q.4 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const concateStrings = (arr) => arr.reduce((acc, word) => acc + word, "");

console.log(concateStrings(["this", "is", "fun"]));

//Q.5 Write an ES6 function to multiply and return all the elements of a given array

const getNumber = (arr) => arr.reduce((acc, num) => acc * num, arr[0]);

const number = [1, 2, 3, 4, 5];
console.log(getNumber(number));

//Q.6 Write an ES6 function that takes an array of strings and returns the longest string.

const longestString = (arr) =>
  arr.reduce((acc, word) => (word.length > acc.length ? word : acc));

const string = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
console.log(longestString(string));

//Q.7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const getOldestPerson = (arr) =>
  arr.reduce((acc, { age, name }) => (age > acc.age ? { age, name } : acc))
    .name;
const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];

console.log(getOldestPerson(people));

//Q.8 Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const getAverage = (arr) =>
  arr.reduce((acc, { age }) => age + acc, 0) / arr.length;

const peopleInfo = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
console.log(getAverage(peopleInfo));

//Q.9 Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const getExpensiveProduct = (arr) =>
  arr.reduce((acc, curr) => (curr.price > acc.price ? curr : acc));
const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
console.log(getExpensiveProduct(products));

//Q.10 Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const countStrings = (arr) =>
  arr.reduce(
    (acc, curr) =>
      !acc[curr] ? { ...acc, [curr]: 1 } : { ...acc, [curr]: ++acc[curr] },
    {}
  );
const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];

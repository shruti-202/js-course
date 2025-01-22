// 1. Write an ES6 function that takes an array of strings and returns an array with the length of each string using the map method.

const getLength = (arr) => arr.map((word) => word.length);

const stringsArray = ["neoG", "coding", "programming"];
console.log(getLength(stringsArray));

//Q.2 Write an ES6 function that returns an array with no number less than 10 in it.

const getNumberGreaterThan10 = (arr) => arr.filter((num) => num > 10);
const arr = [2, 20, 3, 30, 4, 40, 50, 5];

console.log(getNumberGreaterThan10(arr));

//Q.3. Write an ES6 function that takes an array, and returns the first even number in the array.

const getNumber = (arr) => arr.find((num) => num % 2 === 0);

const numbers = [5, 12, 8, 13, 44];
console.log(getNumber(numbers));

//Q.4 Write an ES6 function that takes an array of fruits and returns the first fruit that is longer than 10 characters.

const getFruit = (arr) => arr.find((word) => word.length >= 10);

const fruitArray = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(getFruit(fruitArray));

//Q.5 Given an array of objects, find the object with name “clips”.

const getName = (arr) => arr.find(({ name }) => name === "clips");
const inventory = [
  { name: "socks", quantity: 12 },
  { name: "shirts", quantity: 10 },
  { name: "clips", quantity: 5 },
];
console.log(getName(inventory));

//Q.6 Given an array, find the sum of all numbers in the array using reduce() method.

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const array = [1, 2, 3, 4];
console.log(getSum(array));

//Q.7. Given an array, find the sum of all odd numbers in the array using reduce() method.

const oddSum = (arr) =>
  arr.reduce(
    (acc, currElement) => (currElement % 2 !== 0 ? acc + currElement : acc),
    0
  );
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(oddSum(array1));

//Q.8 Write a function that takes an array of objects representing books with properties title, author, and pages, and returns the total number of pages of all the books using the reduce function.

const getPageCount = (arr) =>
  arr.reduce((acc, currObj) => currObj.pages + acc, 0);
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", pages: 197 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
];

console.log(getPageCount(books));

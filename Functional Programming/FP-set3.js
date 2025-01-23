//Q.1 Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const filterCarData = (arr) =>
  arr.find(({ make, year }) => make === "Toyota" && year > 2010);
const carInfo = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

console.log(filterCarData(carInfo));

//Q.2. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const filterCarByYear = (arr) => arr.filter(({ year }) => year > 2012);

const carsInfo = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

console.log(filterCarByYear(carsInfo));

//Q.3 Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const getProduct = (arr) =>
  arr.find(({ category }) => category.toLowerCase() === "electronics");
const productData = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "Electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

console.log(getProduct(productData));

//Q.4 Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const getProductInfo = (arr) =>
  arr.filter(({ category }) => category.toLowerCase() === "electronics");

const productInfo = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

console.log(getProductInfo(productInfo));

//Q.5 Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

//Q.6 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const filterPageCount = (arr) => arr.filter(({ pageCount }) => pageCount > 500);
const booksData = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];
console.log(filterPageCount(booksData));

//Q.7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const filterCustomer = (arr) => arr.filter(({ gender }) => gender === "Male");
const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];

console.log(filterCustomer(customers));

//Q.8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
const filterByGenre = (gameArr, gameGenre) =>
  gameArr.filter(({ genre }) => genre === gameGenre);

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);

//Q.9 Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const filterCarDetails = (arr) =>
  arr.filter(({ year }) => year > 2012).map(({ model }) => model);

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

console.log(filterCarDetails(cars));

//Q.10 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const filterBookData = (arr) =>
  arr.filter(({ pageCount }) => pageCount > 700).map(({ title }) => title);
const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];
console.log(filterBookData(books));

//Q.11 Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const sumOfNum = (arr) =>
  arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
const number = [12, 23, 4, 2, 11, 21];
console.log(sumOfNum(number));

//Q.12 Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const getAverage = (arr) =>
  arr.reduce((acc, { score }) => acc + score / arr.length, 0);
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

console.log(getAverage(students));

//Q.13.Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const costOfProduct = (arr) =>
  arr.reduce((acc, { price, quantity }) => price * quantity + acc, 0);
const products = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

console.log(costOfProduct(products));

//Q.14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const getString = (arr) => arr.reduce((acc, word) => acc + word, "");
const strings = ["Hello", " ", "world", "!"];

console.log(getString(strings));

//Q.15 Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const lowestNum = (arr) => arr.reduce((acc, num) => (num < acc ? num : acc));

const numbers = [10, 5, 8, 3, 6];
console.log(lowestNum(numbers));

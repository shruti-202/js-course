// //1. Make use of .map() and .filter() methods.
// 2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
// 3. Do NOT use for-loops.

//Q.1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// const incrementNumber = arr => arr.map(num => num +3)

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumber(numbers));

//Q.2. 1. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const convertToUpperCase = (arr) => arr.map((word) => word.toUpperCase());
const myArray = ["apple", "banana", "cherry"];

console.log(convertToUpperCase(myArray));

//Q.3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const getAge = (arr) => arr.map(({ age }) => age);
const people = [
  { name: "Shruti", age: 26 },
  { name: "Sami", age: 23 },
  { name: "Shashi", age: 29 },
];

console.log(getAge(people));

//Q.4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getName = (arr) => arr.map(({ name }) => name.toLowerCase());
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 300 },
  { name: "Socks", stock: 200 },
];

console.log(getName(products));

//Q.5 Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const getCitiesName = (arr) => arr.map(({ name }) => name);
const cities = [
  { name: "Bangalore", population: 1234567 },
  { name: "New York", population: 987657 },
  { name: "Los Angeles", population: 67876787 },
];

console.log(getCitiesName(cities));

//Q.6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

const getFruits = (arr) => arr.filter((word) => word.length > 5);
const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(getFruits(fruits));

//Q.7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const getNumber = (arr) => arr.filter((num) => num % 3 === 0 || num % 5 === 0);
const arrNumbers = [1, 2, 30, 4, 15];
console.log(getNumber(arrNumbers));

//Q.8 Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const getPersonAge = (arr) => arr.filter(({ age }) => age > 30);

const peopleInfo = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

console.log(getPersonAge(peopleInfo));

//Q.9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const getScore = (arr) => arr.filter(({ score }) => score > 80);
const students = [
  { name: "Shru", score: 89 },
  { name: "Bob", score: 79 },
  { name: "Diksha", score: 90 },
];
console.log(getScore(students));

//Q.10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const getPersonDetails = (arr) =>
  arr.filter(({ age, city }) => age > 70 && city === "Indore");
const peopleData = [
  { name: "Ridha", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Renu", age: 80, city: "Bangalore" },
];

console.log(getPersonDetails(peopleData));

//Q.11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const getGenre = (arr) =>
  arr.filter(({ genre }) => genre === "Science Fiction");
const books = [
  {
    title: "The Hitchhikers Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  { title: "To kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
];

console.log(getGenre(books));

//Q.12 Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const filterEmployee = (arr) =>
  arr.filter(({ age, salary }) => age > 25 && salary > 22000);
const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];
console.log(filterEmployee(employees));

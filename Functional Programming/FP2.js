//Q.1 Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const getName = (arr) => arr.map(({ name }) => name);
const people = [
  { name: "Raj", age: 28 },
  { name: "Shruti", age: 45 },
  { name: "Anushka", age: 38 },
];
console.log(getName(people));

//Q.2 Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const multiplyElement = (arr) => arr.map((num) => num * 5);
const numbers = [1, 2, 3, 4];
console.log(multiplyElement(numbers));

//Q.3 Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const personalMsg = (arr) =>
  arr.map(
    ({ name, dept }) => `Hi ${name} we are glad to have you as a ${dept}`
  );
const employeeData = [
  { name: "Ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "Shyam", dept: "Finance Professional" },
];

console.log(personalMsg(employeeData));

//Q.4 Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const getTitle = (arr) => arr.map(({ title }) => title);
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

console.log(getTitle(books));

//Q.5.Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const getNameStartsWithA = (arr) => arr.filter((word) => word[0] === "A");
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
console.log(getNameStartsWithA(studentName));

//Q.6 Write an ES6 function which filters out the products which have a price greater than 40.

const getProduct = (arr) => arr.filter(({ price }) => price > 40);

const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
console.log(getProduct(productData));

//Q.7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const getFirstNumber = (arr) => arr.find((num) => num % 7 === 0);
const numberArr = [1, 2, 3, 21, 14, 7];

console.log(getFirstNumber(numberArr));

//Q.8 Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const getString = (arr) => arr.filter((word) => word.length >= 8);
const names = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
  "shayam",
];

console.log(getString(names));

//Q.9 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const getStudentNamee = (arr) => arr.filter(({ grade }) => grade === "A");
const studentInfo = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

console.log(getStudentNamee(studentInfo));

//Q.10 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const getStudentName = (arr) =>
  arr.filter(({ grade, scholarship }) => grade === "B" && scholarship === true);
const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

console.log(getStudentName(students));

//Q.11 Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0.

const filterMovieData = (arr) =>
  arr.filter(({ year, rating }) => year < 1990 && rating > 8.0);
const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];

console.log(filterMovieData(bollywoodMovies));

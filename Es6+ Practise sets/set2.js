// Q1: Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

const personalInfo = {
  name: "Shruti",
  age: 30,
};

const updateData = (personObj, newAge) => (personObj.age = newAge);

console.log(personalInfo);
updateData(personalInfo, 26);
console.log(personalInfo);

// Q2.Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const carInfo = ({ horsepower }) => horsepower > 300;

console.log(carInfo(car1));
console.log(carInfo(car2));

// Q3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 22 . Otherwise, it should return false.

const person1 = { name: "Diksha", age: 20 };

const isEligible = ({ age }, num) => (age + num > 22 ? `true` : `false`);

console.log(isEligible(person1, 30));

//Q.4: .Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const blog1 = {
  title: "How to Learn Javascript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to start a blog",
  author: "Jane Smith",
  views: 500,
};

const verifyViews = ({ views }) => views > 1000;

console.log(verifyViews(blog1));
console.log(verifyViews(blog2));

//Q.5 :Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("a", a);
console.log("b", b);

//Q.6 Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObjects = (objData1, objData2) => ({ ...objData1, ...objData2 });

console.log(combineObjects(obj1, obj2));

//Q.7. Convert the function getData, into an ES6 function with least amount of characters.

const person = {
  name: "Shruti Gawande",
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

const getData = ({ name, address: { city, state } }) =>
  name + "\n" + city + "\n" + state;
console.log(getData(person));

//Q.8 **Write a function that takes two strings as input and concatenates them together.**

const concatenateString = (str1, str2) => str1 + " " + str2;

console.log(concatenateString("Hello", "Shru"));

//Q.9 Write a function that takes an array and returns the last element in the array.

const removeLastElement = (arr) => arr.pop();

console.log(removeLastElement([1, 2, 4, 8]));

//@.10. Write a function that takes an array and returns the first element of the array.

// const extractFirstElement = arr => arr.shift();
const extractFirstElement = (arr) => arr[0];

console.log(extractFirstElement([1, 2, 3, 4, 5]));

//Q.12. Write a function that takes an array and a number and returns the sum of first element and the number.

const sumArr = (arr, num) => arr[0] + num;

console.log(sumArr([10, 2, 3, 4, 5], 9));

//Q.13Write a function that takes an array and returns the sum of first and last element.

// const sumArr = arr => arr[0] + arr.pop();
const sumArr = (arr) => arr[0] + arr[arr.length - 1];

console.log(sumArr([11, 2, 23, 9]));

//Q.14. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personalData = ({ name, age, occupation }) =>
  `${name} is ${age} years old and works as a ${occupation}`;

const person = {
  name: "Tanishk",
  age: 25,
  occupation: "Software Engineer",
};

console.log(personalData(person));

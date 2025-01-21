//Q.1 Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array1 = [4, 78, 8, 3, 6, 0, 12, 34];
const getMaxElement = (arr) => {
  let maxElement = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

console.log(getMaxElement(array1));

//Q.2 Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); //3

//Q.3.write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const EvenToOddNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = arr[i] + 1;
    }
  }
  return arr;
};

//approach 2:

const EvenToOddNumberr = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output[i] = arr[i] % 2 === 0 ? arr[i] + 1 : arr[i];
  }
  return output;
};
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(EvenToOddNumberr(numArr));

//Q.4 write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      output[output.length] = arr[i];
    }
  }
  return output;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

//Q.5 Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].toUpperCase();
  }
  return newArr;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));

//Q.6. Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (arrObj, name) => {
  let newArr = [];
  for (let i = 0; i < arrObj.length; i++) {
    newArr[i] = arrObj[i][name];
  }
  return newArr;
};

//Q.7. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.
const userData = { firstName: "John", lastName: "Dee" };
const userInfo = (podAndTeam) => ({ ...podAndTeam, teamId: 878787 });

console.log(userInfo(userData));

//Q.8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (personData) =>
  personData.team ? personData : { ...personData, team: "A" };

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
//{ firstName: 'Priya', lastName: 'Raj', team: 'A' }

//Q.9. Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

const bookDetails = ({
  title,
  authors: [{ name: author1 }, { name: author2 }],
  publisher: { name: publisherName },
} = book);

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

//Q.10 Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age) {
      sum += arr[i].age;
    }
  }
  return sum;
};

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121

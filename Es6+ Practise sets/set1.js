// Q.1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

function isEligibleToVote (age) {
    if(age>18) {
        console.log("User is eligible to vote")
    } else {
        console.log ("User is not eligible to vote")
    }
}

isEligibleToVote(17)

// Arrow Function:
const isEligibleToVote = age => age > 18 ? `User is eligible to vote` : `User is not eligible to vote`
console.log(isEligibleToVote(17))

//Q.2: Write a function that takes two numbers as input and determines which one is greater.

function isGreater (a,b) {
    if (a>b) {
        console.log(`A is greater`)
    } else {
        console.log (`B is greater`)
    }
}

isGreater(2,8);

/*arrow function*/

const isGreater = (a,b) => a>b ? `${a} is greater` : `${b} is greater`;
console.log(isGreater(8,100))

// Q.3.Write a function that takes a number as input and determines if it is positive or negative.

function checkNum (num) {
    if (num > 0) {
        console.log ("Num is Positive")
    }
    else {
        console.log ("Num is Negative")
    }
}

checkNum (-9)

/*arrow function*/
const checkNum = num => num > 0 ? `Num is Positive` : `Num is Negative`;
console.log(checkNum(100))

// Q.4.Write a function that takes a number as input and determines if it is even or odd.

function isNumberEvenOrNot (num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log (`${num} is odd`)
    }
}

isNumberEvenOrNot(12);

/*Arrow Function*/
const isNumberEvenOrNot = num => num % 2 === 0 ? `Even` : `Odd`

console.log(isNumberEvenOrNot (11))

//**Que.5 Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.**

function checkForAlphabet (letter) {
    if (letter.includes("a") || letter.includes("A")) {
        console.log("Includes a/A")
    } else {
        console.log("Does not Include a/A")
    }
}

console.log(checkForAlphabet("shruti"))

/*Arrow Function*/
const checkForAlphabet = enterAnyString => enterAnyString.includes("a") || enterAnyString.includes("A") ? `Includes A/a` : `Does not Include A/a`;

console.log(checkForAlphabet('Sammi'))

// **Que.6 Write a function that takes a string as input and determines if it is longer than 5characters**.

function checkStringLength (randomString) {
    if (randomString.length > 5) {
        console.log ('Longer than 5 character')
    } else {
        console.log (`Shorter than 5 character`)
    }
}

checkStringLength ("Hello World")

/*Arrow Function*/
const checkStringLength = randomString => randomString.length > 5 ? `Longer than 5 Character` : `Lesser than 5 Character`
console.log(checkStringLength("Hello Shruu"));

//Que 7.Write a function that takes a number as input and determines if it is between 1 and 10.

function checkNum (num) {
    if (num >1 && num <10) {
        console.log ("Num is btw 1-10")
    } else {
        console.log ("Num is not btw 1-10")
    }
}

checkNum (-2)

/*Arrow Function*/
const checkNum = num => num > 1 && num < 10 ? `Num is btw 1-10` : `Num is not btn 1-10`;
console.log (checkNum(100))

const checkNumm = num => num > 1 && num < 10;
console.log(checkNumm(99))

// **Que 8. Write a function that takes a string as input and determines if it contains the word "hello".**?

function checkString (randomWord) {
    if (randomWord.includes("hello") || randomWord.includes("Hello")) {
        console.log("True")
    } else {
        console.log ("False")
    }
}

console.log(checkString("Hello baby"))

/*Arrow Function*/
const checkString = randomWord => randomWord.includes("hello") || randomWord.includes("Hello")

console.log(checkString("World"))

//**Que.9 Write a function that takes a number as input and determines if it is a multiple of 3.**

function isMultipleOfThree (num) {
    if (num % 3 === 0) {
        console.log("Num is Multiple of 3")
    } else {
        console.log("Num is not Multiple of 3")
    }
}

console.log(isMultipleOfThree(10))

/*Arrow Function*/

const isMultipleOfThree = num => num%3 === 0
console.log(isMultipleOfThree(15))

//Que.10 Write a function which takes in a number as input and returns it after multiplying by 10.

function multipleByTen (num) {
    return num *10
}

console.log(multipleByTen(2))

/*Arrow Function*/

const multipleByTen = num => num *10;
console.log(multipleByTen(6))

//e.11 Console individual values of the product object using object destructuring.

//Que.12 Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = {
    title: "Think and Grow Rich",
    pages: 100
}

// const getBookDetails = randomBookDetails => randomBookDetails.pages > 100
const getBookDetails = ({pages,title}) => pages > 100

console.log(getBookDetails(book))

//Que.13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const changeOccupation = (person, newOccupation) => person.occupation = newOccupation;

const person = {
    name:"Shruti",
    occupation: "Software Engineer"
}

console.log(changeOccupation(person,'Officer'))


//Que.14 Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const Numbers = [1,2,3];
const [a,b,c] = Numbers;

console.log(a,b,c);
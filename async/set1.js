//Q.1 Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedGreeting = (userName) => {
  setTimeout(() => {
    console.log(`Hello ${userName} welcome onboard`);
  }, 2000);
};

delayedGreeting("shruti");

//Q.2 Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAddition = (num1, num2) => {
  setTimeout(() => {
    console.log(`The sum od two no ${num1 + num2}`);
  }, 4000);
};

delayedAddition(2, 3);

//Q.3 Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

const delayAlert = (msg) => {
  setTimeout(() => {
    alert(`${msg}`);
  }, 3000);
};

delayAlert("Hello World");

//Q.4 Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

const delayedLoop = (num) =>
  setTimeout(() => {
    for (let i = 0; i < num; i++) console.log("Hello");
  }, 1000);

delayedLoop(3);

//Q.5 Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message frm server: ${msg}`);
      } else {
        reject(`error frm server: ${msg}`);
      }
    }, 3000);
  });
};

fakeFetch("Hello This is a Promise", true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Q.6 1. EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)

// Use this URL - `*https://example.com/api/itemlist*` to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

const displayOutput = document.querySelector("#output");

fakeFetch1("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent = "The data you are looking for didn't exist";
    }
  });

//Remaining questions are solved in codesandbox

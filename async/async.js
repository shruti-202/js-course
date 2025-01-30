//### challenge
// Write a function `strLength()` which takes
// 1. Your name
// 2. A function that it will call with the length of your name

const strLength = (name, callbackFunc) => callbackFunc(name.length);

// strLength ('Shruti',function callbackFun(nameLength) {
//     console.log(`OMG: my name is ${nameLength} chars long`)

// }) ....First Approach

/*Second Approach*/
strLength("Shruti", (nameLength) =>
  console.log(`OMG: my name is ${nameLength} chars long`)
);

//Q.2 Write a function `willThanosKillMe()` . This function will take three parameters

// 1. Your name
// 2. Function to call if Thanos doesn't kill you.
// 3. Function to call if Thanos does kill you.

const willThanosKillMe = (name, DieCb, LiveCb) =>
  name.length % 2 === 0 ? LiveCb() : DieCb();

willThanosKillMe(
  "Shruti",
  () => console.log("You will die soon"),
  () => console.log("You live forever")
);

//SET TIME OUT
//Now, write a function that takes a message and a delay and print that message after the delay.

setTimeout(() => console.log("This will go to Web API"), 2000);

//PROMISES

function fakeFetch(msg, shouldReject) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server:${msg}`);
      }
      response(`from server: ${msg}`);
    }, 3000);
  });
}

fakeFetch("Hello Promise", false)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Q.2
function fakeFetch2(msg, shouldReject) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error occurred:${msg}`);
      }
      response(`from server:${msg}`);
    }, 3000);
  });
}

fakeFetch2("Samiksha", true)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//ASYNC AWAIT
const fetchUser = async (userId) => {
  const data = await fetch(`https://api.example.com/users/${userId}`);
  console.log(`${data.first_name} ${data.last_name}`);
};

//convert this promise into async await

export default function App() {
  function fetchUserData(userId) {
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => console.log(`${data.city}`));
  }
}

//conversation to ES6 function
const fetchUserData = async (userId) => {
  const data = await fetch(`https://api.example.com/users/${userId}`);
  const newData = await data.json();
  console.log(newData.city);
};

//Q.2
function getUserData(userId) {
  fetch(`https://example.com/api/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => console.log(userData))
    .catch((error) => console.error("Error retrieving user data", error));
}

//converting to ES6+

const getUserData = async (userId) => {
  try {
    const response = await fetch(`https://example.com/api/users/${userId}`);
    const userData = await response.json();
    console.log(userData);
  } catch (err) {
    console.err("Error retrieving user data", err); //here in above example we have both .then & .catch
  }
};

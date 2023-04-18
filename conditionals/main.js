let isRaining = true;

if (isRaining) {
  console.log("Gonna stay inside");
} else {
  console.log("Joke is on you I was gonna stay inside anyways");
}

// isRaining ? console.log("Gonna stay inside") : console.log("Joke is on you I was gonna stay inside anyways");

// let isHungry = false;

// if (!isHungry) {
//   console.log("We will stay home");
// } else {
//   console.log("We will stay home...and order doordash")
// }

let isHungry = true;
let isTired = false;

if (isHungry && isTired) {
  console.log("We're gonna eat then take a nap");
} else if (isHungry) {
  console.log("Just hungry");
} else if (isTired) {
  console.log("Just tired");
} else {
  console.log("Not tired or hungry");
}

if (isHungry) {
  if(isTired) {
    console.log("We're gonna eat then take a nap");
  } else if (isHungry) {
    console.log("Just hungry");
  } else if (isTired) {
    console.log("Just tired");
  }
} else {
  console.log("Not tired or hungry");
}



if (isHungry || isTired) {
  console.log("I'm hungry or tired")
} else {
  console.log("I'm not tired and I'm not hungry")
}
let value = 0;
// if a number is even print even, otherwise print odd

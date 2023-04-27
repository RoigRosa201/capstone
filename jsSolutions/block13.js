// [Is Truthy]

const input = "";

if (input) {
  console.log(true);
} else if (input === false) {
  console.log("The boolean value false is falsy")
} else if (input === null) {
  console.log("The null value is falsy")
} else if (input === undefined) {
  console.log("undefined is falsy")
} else if (input === 0) {
  console.log("The number 0 is falsy (the only falsy number)")
} else if (input === "") {
  console.log("The empty string is falsy (the only falsy string)")
}

// [Number Line]
const num1 = 99
const num2 = 8
const sum = num1 + num2

if (sum < -1000) {
  console.log(`${sum} is less than -1000`)
} else if (sum < 0) {
  console.log(`${sum} is a negative number`)
} else if (sum === 0) {
  console.log(`${sum} is equal to 0`)
} else if (sum > 0) {
  console.log(`${sum} is greater than 0`)
} else {
  console.log(`${sum} is greater than 100`)
}

// [Greater than 5]
if (num1 >= 5 && num2 >= 5) {
  console.log(true)
} else {
  console.log(false);
}

// [Pair and Compare]

const param1A = "five"
const param1B = 5
const param2A = "dog"
const param2B = "dawg"

if (param1A === param1B || param2A === param2B) {
  console.log(true);
} else {
  console.log(false);
}
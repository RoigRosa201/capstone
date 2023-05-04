// Only Odds
// Create a JavaScript script that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.

const input = [2, 4, 6, 8, 10, 11, 12];
const output = [];
// code here

// access each number
// for (let i = 0; i < input.length; i++) {
//   // figure out which numbers are odd
//   const number = input[i];
//   if (number % 2 !== 0) {
//     // if a number is odd, put it in the new array
//     output.push(number)
//   }
// }
// for of loop
// for (let number of input) {
//   if (number % 2 !== 0) {
//     //     // if a number is odd, put it in the new array
//     output.push(number)
//   }
// }
input.forEach(number => {
  if (number % 2 !== 0) {
    // if a number is odd, put it in the new array
    output.push(number)
  }
})
const oddsOnly = input.filter(num => num % 2 !== 0);

// console.log(output);

// Vowel versus Consonant

const stringInput = "hello";
let consonantCount = 0;
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

// access each letter
for (let i = 0; i < stringInput.length; i++) {
  const letter = stringInput[i];

  // determine if the letter in question is a consonant or a vowel
  // if (vowels.includes(letter)) {
  if (vowels.indexOf(letter) !== -1) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}
// for (let letter of stringInput) {
//   // determine if the letter in question is a consonant or a vowel
//   // if (vowels.includes(letter)) {
//   if (vowels.indexOf(letter) !== -1) {
//     vowelCount++;
//   } else {
//     consonantCount++;
//   }
// }

// console.log(`${stringInput} has ${consonantCount} consonants and ${vowelCount} vowels`)

// Reverse Array
const inOrderLoop = [1, 2, 3];
const reversedLoop = [];

// iterate through the input array from front to back
// for (let i = 0; i < inOrderLoop.length; i++) {
//   const element = inOrderLoop[i];

//   reversedLoop.unshift(element)
// }
// iterate through the input array from back to front
// for (let i = inOrderLoop.length - 1; i >= 0; i--) {
//   const element = inOrderLoop[i];

//   reversedLoop.push(element)
// }

// console.log(inOrderLoop.reverse())
// console.log(reversedLoop);

// Create a JavaScript code that prints each number from 1 to 100 on a new line.

for (let i = 1; i <= 100; i++) {

  // determine if i is a multiple of stuff
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
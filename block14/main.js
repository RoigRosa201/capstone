const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

// logs the whole array
// console.log(fruits);

// // logs the first element
// console.log(fruits[0])

// // logs the last element
// console.log(fruits[4])

// // not in the array
// console.log(fruits[5])

// // Array methods

// // Push/Pop, doing stuff to the end of the array
// // adds an item to the end of an array
// fruits.push('pineapple');

// console.log(fruits);

// // because we pushed pineapple, it's now there
// console.log(fruits[5])

// console.log(fruits.pop());
// console.log(fruits);
// // because we popped pineapple, it's no longer there
// console.log(fruits[5])

// Shift/Unshift, doing stuff to the beginning of the array
// unshift adds to the beginning of the array
// fruits.unshift('cherry')
// console.log(fruits);

// // shift removes the element at the beginning of the array
// fruits.shift();
// console.log(fruits);

// // slice/splice are for getting subsets of the array.

// // slice is a pure function/method, gives a subset of the array, doesn't modify the array
// // providing 1 number starts at that index and goes to the end.
// console.log(fruits.slice(3))
// // providing 2 numbers gives you a subset of the first index up to but not including the second index provided
// console.log(fruits.slice(1, 4))

// splice method
// splice is a impure function/method, gives a subset of the array, and splices it out
// console.log(fruits.splice(0)) // rips everything out of the array.
// console.log(fruits.splice(0, 2)) // rips out the first two items
// console.log(fruits);
// console.log(fruits);
// console.log(fruits.splice(2, 0, 'papaya', 'tomato'))
// console.log(fruits);

// arrays are passed by reference
// const salad = fruits;

// console.log(fruits);
// console.log(salad);

// fruits.push('passionfruit');

// // both of these are the same reference
// console.log(fruits);
// console.log(salad);
// console.log(fruits === salad);

// let num1 = 5;

// let num2 = num1;

// num2--;
// console.log(num1);
// console.log(num2);

// const copy = [...fruits];
// console.log(copy === fruits);
// copy.push('something');

// console.log(copy);
// console.log(fruits);

// const numbers = [11000, 324, 34, 6, 99999, 10, 15];
// console.log(Math.max(...numbers));

const people = ["Glenn", "Jessica", "Matt", "Abdoul", "Xavier", "Frank", "Thomas", "Peter", "Jaime"];
const peopleCopy = ["Glenn", "Jessica", "Matt", "Abdoul", "Xavier", "Frank", "Thomas", "Peter", "Jaime"];

// for (let i = 0; i < people.length; i++) {
//   console.log(i);
//   console.log("Hi " + people[i]);
// }

// for (let i = people.length - 1; i >= 0; i-=2) {
//   console.log(i);
//   console.log("Hi " + people[i]);
// }

// let keepPlaying = true;
// while(keepPlaying) {
//   keepPlaying = confirm("Do you want to keep playing?")
// }

// console.log("Hi Glenn");
// console.log("Hi Jessica");
// console.log("Hi Matt");
// console.log("Hi Abdoul");
// console.log("Hi Xavier");
// console.log("Hi Frank");
// console.log("Hi Thomas");

const name = "Michael";
for(let i = 0; i < name.length; i++) {
  if(name[i] === 'a') {
    break;
  }
  console.log(name[i])
}

// for (let i = 0; i < 5; i++) {
//   console.log("Hello")
// }

const secretWord = "hello";

while(true) {
  const guess = prompt("Guess the secret word.");
  if (guess === secretWord) {
    alert("You win!");
    break;
  } else {
    alert("Try again!")
  }
}
// age is in the global scope
// const age = 30;

// if (age >= 30) {
//   const old = true;
//   console.log("You are in your 30s")
//   console.log(old);
// }


// console.log(old); // errors out because of block scoping

// console.log(age);

const greeting = "Hello";

function sayHello(name1) {
  const greeting = "Hi";
  console.log(name1);
  console.log(greeting); 
}
 
// sayHello("Michael");

// console.log(greeting)
// console.log(name1); // name is a parameter only available on the sayHello function in this file

const sum = 0;

const loop = (j) => {
  console.log(sum); // this is fine
  for (let i = 0; i < 10; i++) {
    const num = i;
    console.log(sum);
    console.log(num);
    console.log(j);
  }
}

// loop(5);
 
// console.log(num);

// ARRAY METHODS
const animals = ['lion', 'tiger', 'bear', 'oh my', 'zebra', 'Monkey', 'Skunk'];

// forEach() loops over each item in an array

animals.forEach(animal => console.log(animal))

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i])
// }

// .sort() sorts the array
console.log(animals);
animals.sort((animal1, animal2) => {
  if (animal1.toUpperCase() > animal2.toUpperCase()) {
    return 1
  }
  return -1;
});
console.log(animals);

const testScores = [95, 85, 3, 53, 33, 35, 88, 100];
console.log(testScores);
testScores.sort(function(num1, num2) {
  if(num1 < num2) {
    return -1;
  }
  return 1;
});
console.log(testScores);

// .map() transform the orginal array and return a brand new array
const products = [
  {
    name: 'Macbook Pro',
    price: 3000
  },
  {
    name: 'Macbook Air',
    price: 2000
  },
  {
    name: 'iPad Pro',
    price: 1000
  },
  {
    name: 'iPad Air',
    price: 500
  },
  {
    name: 'iPad Mini',
    price: 450
  }
]

// const newArray = [];
// for(let i = 0; i < products.length; i++) {
//   newArray.push(products[i].name);
// }
const listEl = document.querySelector('ul');
const productList = products.map(product => `
  <li>
    <p>${product.name}</p>
    <p>$${product.price}</p>
  </li>
`);
console.log(productList);
console.log(products);
listEl.innerHTML = productList.join('')

// .reduce()
const testScores2 = [95, 85, 3, 53, 33, 35, 88, 100];
const total = testScores2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);

const totalInventoryValue = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
console.log(totalInventoryValue);

// .filter() return a brand new array with the elements that pass the test of the callback function

const movieGoers = [
  {
    name: 'Stacey',
    age: 19
  },
  {
    name: 'Brandon',
    age: 10
  },
  {
    name: 'Charles',
    age: 8
  },
  {
    name: 'Michael',
    age: 30
  },
  {
    name: 'Frank',
    age: 25
  }
]
const peopleThatCanSeeRatedR = movieGoers.filter(person => person.age > 17);
console.log(movieGoers);
console.log(peopleThatCanSeeRatedR)

const passingScores = testScores2.filter(score => score > 60);
console.log(passingScores);
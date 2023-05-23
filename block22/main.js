// synchronous code
const name = "Michael";

// this is async
setTimeout(() => {
  console.log("This happened after 3 seconds")
}, 0)

for(let i = 0; i < 1000; i++) {
  console.log("Blah")
}

function sayHello() {
  console.log("Hello")
}

if (true) {
  console.log("blah")
}

sayHello();

function pickLetter(num) {
  const letters = ['a', 'b', 'c']
  if(letters[num]) {
    return letters[num];
  } else {
    throw new Error("You can only pick 0-2")
  }
}
try {
  pickLetter(4)
} catch (err) {
  console.log("An error happened!")
}

console.log("This doesn't happen")
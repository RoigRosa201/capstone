// R
// Given a string with open and closing parentheses, determine
// write a function that takes a string as a parameter and return true or false based on if it has a complete set of parentheses
// E
// func('wefiji') // returns true
// func('(wefwe') // returns false
// func('aewfwe(fwefkl)') // returns true
// func('aawefwe((fwefw)))') // returns false, mismatched closing
// A
// use an array to record parentheses and pop them off when I find a match
// C
function parenParser(str) {
  // array to keep track of parentheses
  const parentheses = []; // 1

  // iterate through the string
  for (let letter of str) { // n
    if (letter === '(') { // 1
      parentheses.push('('); // 1
    } else if (letter === ')') { // 1
      if(parentheses.pop() !== '(') { // 1
        return false; // 1
      }
    }
  }

  if(parentheses.length) { // 1
    return false; // 1
  }
  return true; // 1
} // O(n)

console.log(parenParser('wefiji')) // returns true
console.log(parenParser('(wefwe')) // returns false
console.log(parenParser('aewfwe(fwefkl)')) // returns true
console.log(parenParser('aawefwe((fwefw)))')) // returns false, mismatched closing
console.log(parenParser('w)efiji'))
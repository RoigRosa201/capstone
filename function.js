const students = ['Jaime', 'Matt', 'Mamta'];
const instructors = ['Michael', 'Thomas', 'Frank']

printNames(students);
printNames(instructors);

function printNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]}`)
    console.log("Hello " + arr[i])
  }
}
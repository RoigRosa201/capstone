const coffeeData = require("./block17-data.js")
// console.log(coffeeData)

//2. Print an array of all the drinks on the menu.
const coffeeNames = coffeeData.map(drink => drink.name)

// console.log(coffeeNames)

//3. Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeData.filter(drink => drink.price <= 5)
// console.log(cheapDrinks)

//4. Print an array of drinks that are priced at an even number.
const evenPrice = coffeeData.filter(drink => drink.price % 2 === 0)
console.log(evenPrice)

//5. Print the total if you were to order one of every drink.
const totalPrice = coffeeData.reduce((acc, drink) => acc + drink.price, 0)
console.log(totalPrice)

//6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeData.filter(drink => drink.seasonal)
// console.log(seasonalDrinks)

//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalWithBeans = seasonalDrinks.map(drink => drink.name + " with imported beans")
// console.log(seasonalWithBeans)


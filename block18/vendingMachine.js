// building a vending machine

// Expectations

// Vending machine takes coins, cash, sometimes card, pay, bitcoin, dogecoin
// Vending machine dispenses items
// User selects items on the vending
// Gives change

// Happy path
// 1. Give money
// 2. Select item
// 3. Dispense
// 4. If the user put in more money than necessary, gives change

// Unhappy path
// 1. Selecting item first
// 2. Item gets stuck
// 3. Money doesn't get processed
// 4. Out of stock

expect(giveMoney).then("Machine confirms you inserted money")
expect(givenMoney && selectedItem).then("correct item is dispensed")
expect(giveNotEnoughMoney && selectedItem).then("Machine tells you you're a broke joke")

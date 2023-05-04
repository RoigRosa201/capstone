const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false
};

// modify object values
customer.email = "Jak3Smith1992@email.com";
customer.phone = 3195551234
customer.zipCode = "63132"
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"]

// delete object key/values
delete customer.zipCode
delete customer.favoriteStore

// add object values
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavors = ["mango"]
customer.todaysPurchaseCost = 5.32

const keys = Object.keys(customer);

console.log(keys);
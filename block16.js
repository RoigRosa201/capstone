const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

const calculateSubTotal = ({ refills, pricePerRefill }) => refills * pricePerRefill;
const applySubscriptionDiscount = subTotal => subTotal * 0.75;
const applyCouponDiscount = subTotal => subTotal - 10;
const printFinalAmount = total => console.log(`Your grand total is $${total}`);

function checkout(person) {
  let finalTotal = calculateSubTotal(person);
  if (person.subscription) {
    finalTotal = applySubscriptionDiscount(finalTotal);
  }
  if (person.coupon) {
    finalTotal = applyCouponDiscount(finalTotal);
  }
  return finalTotal;
}

printFinalAmount(checkout(timmy))
printFinalAmount(checkout(sarah))
printFinalAmount(checkout(rocky))
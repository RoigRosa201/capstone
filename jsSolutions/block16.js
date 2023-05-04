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
// eliminating magic numbers
const subscriptionDiscount = 0.25;
const couponDiscount = 10;
// the refill total has been calculated.
const calculateTotal = (price, refill) => price * refill;
// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
const applySubscriptionDiscount = total => total - total * subscriptionDiscount;
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
const applyCouponDiscount = total => total - couponDiscount;

function checkout(person) {
  // the refill total has been calculated.
  let finalTotal = calculateTotal(person.pricePerRefill, person.refills);
  // If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
  if(person.subscription) {
    finalTotal = applySubscriptionDiscount(finalTotal);
  }
  // If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
  if(person.coupon) {
    finalTotal = applyCouponDiscount(finalTotal);
  }

  return `Your grand total is $${finalTotal}.` 
}
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

console.log(checkout(timmy))
console.log(checkout(sarah))
console.log(checkout(rocky))
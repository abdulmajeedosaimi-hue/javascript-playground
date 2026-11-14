const firstName = "Alex";
const lastName = "Johnson";
const age = "19";
const email = "Alex.Johnson@gmail.com";
const numericAge = Number(age);
const fullName = `${firstName} ${lastName}`;
const isAdult = numericAge >= 18;
const normalizedEmail = email.toLowerCase();
const isValidEmail =
  normalizedEmail.includes("gmail") && normalizedEmail.endsWith(".com");
if (isAdult && isValidEmail) {
  console.log("Registration successful!");
} else {
  console.log("Please check your age or email!");
}
if (fullName.length > 15) {
  console.log("Long name!");
} else {
  console.log("Short name!");
}

const productName = "Wireless Headphones";
const productPrice = "89.99 USD";
const discount = "15";
const deliveryCost = "5.50";
const parsedPrice = Number.parseFloat(productPrice);
const numericDiscount = Number(discount);
const numericDelivery = Number(deliveryCost);

const discountAmount = Math.round(parsedPrice * numericDiscount) / 100;
let finalPrice = parsedPrice - discountAmount + numericDelivery;
const isInvalidPrice = Number.isNaN(finalPrice);
if (isInvalidPrice) {
  console.log(
    "Error: Invalid price calculation! Please check the input values.",
  );
} else {
  if (finalPrice >= 100) {
    console.log("Free delivery!");
  } else {
    console.log("Delivery costs extra!");
  }

  if (parsedPrice >= 100) {
    console.log("Expensive product!");
  } else if (parsedPrice >= 50) {
    console.log("Affordable product!");
  } else {
    console.log("Budget product!");
  }
  console.log(`Final price for ${productName}: $${finalPrice.toFixed(2)}`);
}

const userName = "Alex";
const userAge = "17";
const password = "javascript123";
const hasAccount = true;
const numericUserAge = Number(userAge);
const isUserNameValid = userName.length >= 4;
const isPasswordValid = password.includes("123");
const canAccessStore = hasAccount && numericUserAge >= 18;
if (isUserNameValid && isPasswordValid) {
  console.log("Credentials format is valid.");
} else {
  console.log("Invalid username or password format!");
}
if (!hasAccount) {
  console.log("Please register first!");
} else if (numericUserAge < 18) {
  console.log("Access denied!");
} else {
  console.log("Welcome to the store!");
}

const customerName = "Alex";
const orderAmount = 150;
const paymentMethod = "card";
const isMember = true;
const couponCode = "SALE15";
const isValidPayment = paymentMethod === "card" || paymentMethod === "cash";

const hasSaleCoupon = couponCode.includes("SALE");

if (hasSaleCoupon) {
  console.log(`Coupon "${couponCode}" is valid!`);
} else {
  console.log("Invalid coupon code.");
}

let orderCategory = "";
if (orderAmount >= 200) {
  orderCategory = "Premium order!";
} else if (orderAmount >= 100) {
  orderCategory = "Standard order!";
} else if (orderAmount > 0) {
  orderCategory = "Small order!";
} else {
  orderCategory = "Invalid order amount!";
}
console.log(orderCategory);

if (isMember && orderAmount >= 100) {
  console.log("You received a member discount!");
}

if (!isMember) {
  console.log("Sign up for membership to earn discounts on future orders!");
}

if (!isValidPayment || !(orderAmount > 0)) {
  console.log("Order cannot be processed!");
} else {
  const confirmedAmount = Math.max(0, orderAmount);
  console.log(
    `Order confirmed for ${customerName}! Category: ${orderCategory} Total paid via ${paymentMethod}: $${confirmedAmount.toFixed(2)}.`,
  );
}

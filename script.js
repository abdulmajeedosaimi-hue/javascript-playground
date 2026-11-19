function processOrder(orderPrice, balance) {
  if (orderPrice <= 0) {
    return "Invalid order amount";
  }

  if (balance < orderPrice) {
    return "Not enough money";
  }

  if (orderPrice >= 500) {
    return "Order accepted. Free delivery!";
  }

  return "Order accepted. Delivery costs $15";
}

console.log(processOrder(0, 100));
console.log(processOrder(-25, 100));
console.log(processOrder(200, 150));
console.log(processOrder(600, 750));
console.log(processOrder(120, 300));

const getMovieRecommendation = function (age, genre) {
  if (age < 0) {
    return "Invalid age";
  }

  if (age < 13) {
    return "You can watch an animated movie";
  }

  if (genre === "comedy") {
    return "Watch a comedy movie!";
  }

  if (genre === "action") {
    return "Watch an action movie!";
  }

  if (genre === "fantasy") {
    return "Watch a fantasy movie!";
  }

  return "No recommendations available";
};

console.log(getMovieRecommendation(-2, "comedy"));
console.log(getMovieRecommendation(10, "action"));
console.log(getMovieRecommendation(20, "comedy"));
console.log(getMovieRecommendation(16, "action"));
console.log(getMovieRecommendation(25, "fantasy"));
console.log(getMovieRecommendation(30, "horror"));

const websiteName = "My Website";

function showUserInfo(userName, userAge) {
  const welcomeMessage = "Welcome to";
  console.log(
    `${welcomeMessage} ${websiteName}! Name: ${userName}, Age: ${userAge}`,
  );

  if (userAge >= 18) {
    const userStatus = "Adult user";
    console.log(userStatus);
  }
}

showUserInfo("Sarah", 25);
showUserInfo("Leo", 15);
showUserInfo("Mia", 8);

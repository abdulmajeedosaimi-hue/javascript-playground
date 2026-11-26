const profileCard = document.querySelector(".profile-card");

const profileName = document.querySelector(".profile-name");
const profileDescription = document.querySelector(".profile-description");
const profileStatus = document.querySelector(".profile-status");
const profileButton = document.querySelector(".profile-button");
profileButton.addEventListener("click", function () {
  if (profileButton.textContent === "Profile Updated!") {
    profileName.textContent = "we can't find name";
    profileDescription.textContent = "learning to be Developer";
    profileStatus.textContent = "studying";

    profileCard.classList.remove("profile-card--featured");
    profileButton.textContent = "you need to click it again";
  } else {
    profileName.textContent = "name gone";
    profileDescription.textContent = "JavaScript Developer";
    profileStatus.textContent = "working";

    profileCard.classList.add("profile-card--featured");
    profileButton.textContent = "Profile Updated!";
  }
});

const galleryImage = document.querySelector(".gallery-image");
const galleryDescription = document.querySelector(".gallery-description");
const mountainBtn = document.querySelector(".gallery-button:nth-child(1)");
const beachBtn = document.querySelector(".gallery-button:nth-child(2)");
const cityBtn = document.querySelector(".gallery-button:nth-child(3)");

mountainBtn.addEventListener("click", () => {
  galleryImage.src = "https://picsum.photos/id/29/500/300";
  galleryImage.alt = "Mountain";
  galleryDescription.textContent = "Current image: Mountain";
});

beachBtn.addEventListener("click", () => {
  galleryImage.src = "https://picsum.photos/id/37/500/300";
  galleryImage.alt = "Beach";
  galleryDescription.textContent = "Current image: Beach";
});

cityBtn.addEventListener("click", () => {
  galleryImage.src = "https://picsum.photos/id/1011/500/300";
  galleryImage.alt = "City";
  galleryDescription.textContent = "Current image: City";
});

const emailSetting = document.querySelector(".settings");
const emailButton = document.querySelector(".email-button");

const pushSetting = document.querySelector(".settings");
const pushButton = document.querySelector(".push-button");

const statusParagraph = document.querySelector(".settings-status");

function updateStatus() {
  const isEmailEnabled = emailSetting.classList.contains("setting--enabled");
  const isPushEnabled = pushSetting.classList.contains("setting--enabled");

  if (isEmailEnabled && isPushEnabled) {
    statusParagraph.textContent = "All notifications are enabled.";
  } else if (isEmailEnabled) {
    statusParagraph.textContent = "Email notifications are enabled.";
  } else if (isPushEnabled) {
    statusParagraph.textContent = "Push notifications are enabled.";
  } else {
    statusParagraph.textContent = "All notifications are disabled.";
  }
}

emailButton.addEventListener("click", () => {
  const isEnabled = emailSetting.classList.toggle("setting--enabled");
  emailButton.classList.toggle("button--enabled");
  emailButton.textContent = isEnabled ? "Disable" : "Enable";

  updateStatus();
});

pushButton.addEventListener("click", () => {
  const isEnabled = pushSetting.classList.toggle("setting--enabled");
  pushButton.classList.toggle("button--enabled");
  pushButton.textContent = isEnabled ? "Disable" : "Enable";

  updateStatus();
});

const productCard = document.querySelector(".product-card");
const productImage = document.querySelector(".product-image");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const productStock = document.querySelector(".product-stock");
const productButton = document.querySelector(".product-button");

productTitle.textContent = "Bluetooth Speaker";

productImage.src = "https://picsum.photos/id/1082/300/200";
productImage.alt = "Bluetooth speaker";

productPrice.textContent = "$59";

productStock.textContent = "Only 3 items left";

productCard.style.backgroundColor = "#f4f6f8";
productCard.style.padding = "20px";
productCard.style.borderRadius = "12px";

productButton.addEventListener("click", () => {
  productCard.classList.add("product-card--favorite");
  productButton.textContent = "Added to Wishlist!";

  const isFavorite = productCard.classList.contains("product-card--favorite");
  console.log(isFavorite);
});
// function processOrder(orderPrice, balance) {
//   if (orderPrice <= 0) {
//     return "Invalid order amount";
//   }

//   if (balance < orderPrice) {
//     return "Not enough mones";
//   }

//   if (orderPrice >= 500) {
//     return "Order accepted. Free delivery!";
//   }

//   return "Order accepted. Delivery costs $15";
// }

// console.log(processOrder(0, 100));
// console.log(processOrder(-25, 100));
// console.log(processOrder(200, 150));
// console.log(processOrder(600, 750));
// console.log(processOrder(120, 300));

// const getMovieRecommendation = function (age, genre) {
//   if (age < 0) {
//     return "Invalid age";
//   }

//   if (age < 13) {
//     return "You can watch an animated movie";
//   }

//   if (genre === "comedy") {
//     return "Watch a comedy movie!";
//   }

//   if (genre === "action") {
//     return "Watch an action movie!";
//   }

//   if (genre === "fantasy") {
//     return "Watch a fantasy movie!";
//   }

//   return "No recommendations available";
// };

// console.log(getMovieRecommendation(-2, "comedy"));
// console.log(getMovieRecommendation(10, "action"));
// console.log(getMovieRecommendation(20, "comedy"));
// console.log(getMovieRecommendation(16, "action"));
// console.log(getMovieRecommendation(25, "fantasy"));
// console.log(getMovieRecommendation(30, "horror"));

// const websiteName = "My Website";

// function showUserInfo(userName, userAge) {
//   const welcomeMessage = "Welcome to";
//   console.log(
//     `${welcomeMessage} ${websiteName}! Name: ${userName}, Age: ${userAge}`,
//   );

//   if (userAge >= 18) {
//     const userStatus = "Adult user";
//     console.log(userStatus);
//   }
// }

// showUserInfo("Sarah", 25);
// showUserInfo("Leo", 15);
// showUserInfo("Mia", 8);

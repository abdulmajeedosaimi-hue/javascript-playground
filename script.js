const weather = "rainy";
let activity;

switch (weather) {
  case "sunny":
    activity = "Go for a walk";
    break;
  case "rainy":
  case "stormy":
    activity = "Watch a movie";
    break;
  case "snowy":
    activity = "Build a snowman";
    break;
  case "windy":
    activity = "Fly a kite";
    break;
  case "cloudy":
    activity = "Go shopping";
    break;
  default:
    activity = "Stay home and read a book";
    break;
}

console.log(`Weather: ${weather} -> Recommended activity: ${activity}`);

const secretCode = "Dragon2026!";

function validateSecretCode(code) {
  console.log(`--- Testing Code: "${code}" ---`);

  const isLongEnough = /.{8,}/.test(code);
  const hasUppercase = /[A-Z]/.test(code);
  const hasLowercase = /[a-z]/.test(code);
  const hasNumber = /[0-9]/.test(code);
  const hasSpecial = /[!@#$]/.test(code);

  const isValid =
    isLongEnough && hasUppercase && hasLowercase && hasNumber && hasSpecial;

  const doorMessage = isValid
    ? "Secret code accepted! The door is opening..."
    : "Access denied! Check your secret code.";
  console.log(doorMessage);

  switch (true) {
    case !isLongEnough:
      console.log("Code is too short");
      break;
    case !hasUppercase:
      console.log("Missing uppercase letter");
      break;
    case !hasLowercase:
      console.log("Missing lowercase letter");
      break;
    case !hasNumber:
      console.log("Missing number");
      break;
    case !hasSpecial:
      console.log("Missing special character");
      break;
    default:
      console.log("All checks passed! Welcome to the next room!");
      break;
  }
}

validateSecretCode(secretCode);
validateSecretCode("Drag1!");
validateSecretCode("dragon2026!");
validateSecretCode("Dragon2026");

const hasPaidDeposit = true;
const hasSelectedDate = true;

const sessionStatus =
  hasPaidDeposit && hasSelectedDate
    ? "Photography session confirmed!"
    : "Photography session pending: please pay the deposit and select a date.";

console.log(sessionStatus);

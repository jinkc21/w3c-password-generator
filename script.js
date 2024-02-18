// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Add generator code

// variables for available arrays amd choices.
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var choices;

// running funtion
function generatePassword() {

  //  adding user input (still unsure about parseInt)
  var passwordLength = parseInt(prompt("How many characters for the password? Must choose between 8-128"));
  // requires input between 8-128
  if (!passwordLength) {
    alert("This needs a value");
  } else if (passwordLength < 8 || passwordLength > 128) {

    passwordLength = parseInt(prompt("You must choose between 8-128"));

    // confirms use of each option
  } else {
    var lowerCases = confirm("Will this password use lowercase letters?");
    var upperCases = confirm("Will this password use uppercase letters?");
    var numbers = confirm("Will this password use numbers?");
    var special = confirm("Will this password use special characters?");

  };
  //  alerts if all confirms are false
  if (!special && !numbers && !upperCases && !lowerCases) {
    choices = alert("Conditions have not been met. Please try again.");
  }
  // these else if statements collects user inputs.

  // true to all four
  else if (special && numbers && upperCases && lowerCases) {
    choices = specialCharacters.concat(allNumbers, lowerLetters, upperLetters);
  }

  // true to 3 conditions
  else if (special && numbers && upperCases) {
    choices = specialCharacters.concat(allNumbers, upperLetters);
  }
  else if (special && numbers && lowerCases) {
    choices = specialCharacters.concat(allNumbers, lowerLetters);
  }
  else if (special && lowerCases && upperCases) {
    choices = specialCharacters.concat(lowerLetters, upperLetters);
  }
  else if (numbers && lowerCases && upperCases) {
    choices = allNumbers.concat(lowerLetters, upperLetters);
  }

  // true to 2 conditons
  else if (special && numbers) {
    choices = specialCharacters.concat(allNumbers);

  } else if (special && lowerCases) {
    choices = specialCharacters.concat(lowerLetters);

  } else if (special && upperCases) {
    choices = specialCharacters.concat(upperLetters);
  }
  else if (lowerCases && numbers) {
    choices = lowerLetters.concat(allNumbers);

  } else if (lowerCases && upperCases) {
    choices = lowerLetters.concat(upperLetters);

  } else if (numbers && upperCases) {
    choices = allNumbers.concat(upperLetters);
  }
  // true to one condition
  else if (special) {
    choices = specialCharacters;
  }
  else if (numbers) {
    choices = allNumbers;
  }
  else if (lowerCases) {
    choices = lowerLetters;
  }
  else if (upperCases) {
    choices = upperLetters;
  };

  // turns variable into an array
  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // joins the user choices into a single array (need explanation on UserInput)
  var passwordText = password.join("");
  UserInput(passwordText);
  return passwordText;
}

function UserInput(passwordText) {
  document.getElementById("password").textContent = passwordText;

}

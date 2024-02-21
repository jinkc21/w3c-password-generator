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


const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var choices;


function generatePassword() {

  var passwordLength = parseInt(prompt("How many characters for the password? Must choose between 8-128"));

  if (!passwordLength) {
    alert("This needs a value");
  } 
  
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Number must be between 8 and 128!");
    return;
  } 
  
  else {
    var lowerCases = confirm("Will this password use lowercase letters?");
    var upperCases = confirm("Will this password use uppercase letters?");
    var numbers = confirm("Will this password use numbers?");
    var special = confirm("Will this password use special characters?");
  };

  if (!special && !numbers && !upperCases && !lowerCases) {
    choices = alert("Conditions have not been met. Please try again.");
  }

  else if (special && numbers && upperCases && lowerCases) {
    choices = specialCharacters.concat(allNumbers, lowerLetters, upperLetters);
  }

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

  else if (special && numbers) {
    choices = specialCharacters.concat(allNumbers);
  } 
  
  else if (special && lowerCases) {
    choices = specialCharacters.concat(lowerLetters);
  } 
  
  else if (special && upperCases) {
    choices = specialCharacters.concat(upperLetters);
  }
  
  else if (lowerCases && numbers) {
    choices = lowerLetters.concat(allNumbers);
  } 
  
  else if (lowerCases && upperCases) {
    choices = lowerLetters.concat(upperLetters);
  } 
  
  else if (numbers && upperCases) {
    choices = allNumbers.concat(upperLetters);
  }

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

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var passwordText = password.join("");
  return passwordText;
}

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

const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword() {


  var passwordLength = prompt("How long would you like your password to be? Select a number between 8-128.");

  if (passwordLength < 8) {
    passwordLength = 8;
  }
  if (passwordLength > 128) {
    passwordLength = 128;
  }

  var lowerCases = confirm("Include lowercase letters?");

  var upperCases = confirm("Include uppercase letters?");

  var numbers = confirm("Include numbers?");

  var special = confirm("Include special characters?");

  var minimumCount = 0;


  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  var functionArray = {
    getNumbers: function () {
      return allNumbers[Math.floor(Math.random() * allNumbers.length)];
    },

    getLowerCases: function () {
      return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    },

    getUpperCases: function () {
      return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    },

    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

  };


  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    // minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    // minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    // minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    // minimumCount++;

  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < passwordLength ; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
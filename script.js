// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var passwordLength;
var capsLetter;
var lowLetter;
var num;
var specialSym;

generateBtn.onclick;

function generatePassword() {

  var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));

  if (passwordLength >= 127) {
    alert("Inavild number");
    var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));
  }
  if (passwordLength <= 7) {
    alert("Invalid number");
    var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));
  }

  console.log(passwordLength);

  var capsLetter = confirm("Click ok to confirm including upper case letters.");
  var lowLetter = confirm("Click ok to confirm including lower case letters.");
  var num = confirm("Click ok to confirm including numbers.");
  var specialSym = confirm("Click ok to confirm including special characters.");

  if (capsLetter === false && lowLetter === false && num === false && specialSym === false) {
    alert("Need to confirm one character type");
    var capsLetter = confirm("Click ok to confirm including upper case letters.");
    var lowLetter = confirm("Click ok to confirm including lower case letters.");
    var num = confirm("Click ok to confirm including numbers.");
    var specialSym = confirm("Click ok to confirm including special characters.");
  }
  var charcterTypes = [];

  if (capsLetter) {
    charcterTypes = charcterTypes.concat(uppercaseLetters);
  }

  if (lowLetter) {
    charcterTypes = charcterTypes.concat(lowercaseLetters);
  }

  if (num) {
    charcterTypes = charcterTypes.concat(numbers);
  }

  if (specialSym) {
    charcterTypes = charcterTypes.concat(specialSymbols);
  }

  console.log(charcterTypes);

  var firstPassword = "";

  for (let d = 0; d < passwordLength; d++) {
    firstPassword = firstPassword + charcterTypes[Math.floor(Math.random() * charcterTypes.length)];
    console.log(firstPassword);
  }

  return firstPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

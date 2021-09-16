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

//When Generate button is clicked present a series of prompts for password criteria
generateBtn.onclick;

function generatePassword() {
 
  //Ask user for length of password that is between 8 and 128.
  
  do {
    passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));

    if (passwordLength >= 127) {
      alert("Inavild number");
    } else if (passwordLength <= 7) {
      alert("Invalid number");
    }

  } while (passwordLength >= 127 || passwordLength <= 7);

  console.log(passwordLength);

  //Ask user for which charcter types to incude in password and at least one is selected.
  
  do {
    capsLetter = confirm("Click ok to confirm including upper case letters.");
    lowLetter = confirm("Click ok to confirm including lower case letters.");
    num = confirm("Click ok to confirm including numbers.");
    specialSym = confirm("Click ok to confirm including special characters.");

    if (capsLetter === false && lowLetter === false && num === false && specialSym === false){
      alert("Need to confirm one character type");
    }

  } while (capsLetter === false && lowLetter === false && num === false && specialSym === false);
  
  // Add user choices of character types into a empty array
  
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
  
  // Generates Password 
  
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
//Writes passsword on page
generateBtn.addEventListener("click", writePassword);

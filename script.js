// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!","#", "$", "%", "&","'","(",")","*", "+",",", "-",".","/",":",";","<","=",">","?","@","[","]","^", "_","`","{", "|", "}", "~"];

var passwordLength;
var capsLetter;
var lowLetter;
var num;
var sym;

generateBtn.onclick;

function generatePassword() {

  var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));

  if ( passwordLength >= 127) {
    alert("Inavild number");
    var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));
  }
  if (passwordLength <= 7) {
    alert("Invalid number");
    var passwordLength = (prompt("What will be the length of the password? Enter a number between 8 and 128"));
  }

  console.log(passwordLength);

  for (let i = 0; i < 4; i++) {

    var capsLetter = (prompt("Include upper case letters? Enter Y or N"));

    if (capsLetter === "Y") {
      console.log(capsLetter);
    } else if (capsLetter === "N") {
      i++;
      console.log(capsLetter);
    }
    else {
      alert("Invalid input");
      var capsLetter = (prompt("Include upper case letters? Enter Y or N"));
    }

    var lowLetter = (prompt("Include lower case letters? Enter Y or N"));

    if (lowLetter === "Y") {
      console.log(lowLetter);
    } else if (lowLetter === "N") {
      i++;
      console.log(lowLetter);
    } else {
      alert("Invalid input");
      var lowLetter = (prompt("Include lower case letters? Enter Y or N"));
    }

    var num = (prompt("Include numbers? Enter Y or N"));

    if (num === "Y") {
      console.log(num);
    } else if (num === "N") {
      i++;
      console.log(num);
    } else {
      alert("Invalid input");
      var num = (prompt("Include numbers? Enter Y or N"));
    }

    var sym = (prompt("Include special characters? Enter Y or N"));

    if (sym === "Y") {
      console.log(sym);
    } else if (sym === "N") {
      i++;
      console.log(sym);
    } else {
      alert("Invalid input");
      var sym = (prompt("Include special characters? Enter Y or N"));
    }

    if (i === 4) {
      alert("Choose at least one character type.")
      console.log(i);
      i = 0;
    } else if (i === 3) {
      i = 5;
    } else if (i === 2) {
      i = 5;
    } else if (i === 1) {
      i = 5;
    } else if (i === 0) {
      i = 5;
    }

  }

  var charcterTypes = [];

  if (capsLetter === "Y") {
    charcterTypes = charcterTypes.concat(uppercaseLetters);
  }

  if (lowLetter === "Y") {
    charcterTypes = charcterTypes.concat(lowercaseLetters);
  }

  if (num === "Y") {
    charcterTypes = charcterTypes.concat(numbers);
  }

  if (sym === "Y") {
    charcterTypes = charcterTypes.concat(symbols);
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

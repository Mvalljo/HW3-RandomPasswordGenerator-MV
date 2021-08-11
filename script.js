// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijkmnlopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";


document.getElementById("generate").onclick = function () { passwordCriteria() };

function passwordCriteria() {
  var length = prompt("What will be the length of the password? Enter a number between 8 and 128");

  if (length >= 128) {
    alert("Inavild number");
    var length = prompt("What will be the length of the password? Enter a number between 8 and 128");
  }
  if (length <= 8) {
    alert("Invalid number");
    var length = prompt("What will be the length of the password? Enter a number between 8 and 128");
  }
  for (let i = 0; i < 4; i++)  {
    var capsLetter = prompt("Include upper case letters? Enter Y or N");
    if (capsLetter === "Y") {
      console.log(capsLetter);
      console.log(i);
    } else if (capsLetter === "N") {
      i++;
      console.log(i);
    }
    else {
      alert("Invalid input");
      var capsLetter = prompt("Include upper case letters? Enter Y or N");
    }
    var lowLetter = prompt("Include lower case letters? Enter Y or N");
    if (lowLetter === "Y") {
      console.log(lowLetter);
      console.log(i);
    } else if (lowLetter === "N") {
      i++;
      console.log(i);
    } else {
      alert("Invalid input");
      var lowLetter = prompt("Include lower case letters? Enter Y or N");
    }
    var num = prompt("Include numbers? Enter Y or N");
    if (num === "Y") {
      console.log(num);
      console.log(i);
    } else if (num === "N") {
      i++;
      console.log(i);
    } else {
      alert("Invalid input");
      var num = prompt("Include numbers? Enter Y or N");
    }
    var sym = prompt("Include special characters? Enter Y or N");
    if (sym === "Y") {
      console.log(sym);
      console.log(i);
    } else if (sym === "N") {
      i++;
      console.log(i);
    } else {
      alert("Invalid input");
      var sym = prompt("Include special characters? Enter Y or N");
    }
    if (i === 4) {
      console.log(i);
      alert("Choose at least one character type.")
      i=0;
    } 
  }





}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

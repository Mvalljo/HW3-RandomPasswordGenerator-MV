// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijkmnlopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";


document.getElementById("generate").onclick = function () { passwordCriteria() };

function passwordCriteria() {
  var length = prompt("What will be the length of the password? Enter a number between 8 and 128");
  capsLetter = confirm("Click ok to confirm including upper case letters.");
  lowLetter = confirm("Click ok to confirm including lower case letters.");
  num = confirm("Click ok to confirm including numbers.");
  sym = confirm("Click ok to confirm including special characters.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

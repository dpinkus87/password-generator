// Assignment Code
var generateBtn = document.querySelector("#generate");
var chosenChar = []
var password = ""

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "~", "|", "<", ">", "=", "-", "_"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function generatePassword() {

    var charLength = prompt("How many characters do you want your password to be? Please select a number between 8 and 128")

    if (charLength < 8 || charLength > 128) {
        alert("Please enter a number between 8 and 128");
        generatePassword();

    }

    function characterSelection() {
        var userSelectupperCase = confirm("Do you want to include uppercase characters?")
        var userSelectlowerrCase = confirm("Do you want to include lowercase characters?")
        var userSelectspecial = confirm("Do you want to include special characters?")
        var userSelectnumbers = confirm("Do you want to include numbers?")

        if (
            !userSelectupperCase &&
            !userSelectlowerrCase &&
            !userSelectspecial &&
            !userSelectnumbers
        ) {
            alert("You must select at least one character type");
            generatePassword();
        }

        if (userSelectupperCase) {
            chosenChar = chosenChar.concat(upperCase)
            password = password+chosenChar[Math.floor(Math.random() * upperCase.length)]
    
        }
        if (userSelectlowerrCase) {
            chosenChar = chosenChar.concat(lowerCase)
            password = password+chosenChar[Math.floor(Math.random() * lowerCase.length)]
        }
        if (userSelectspecial) {
            chosenChar = chosenChar.concat(specialChar)
            password = password+chosenChar[Math.floor(Math.random() * specialChar.length)]
        }
        if (userSelectnumbers) {
            chosenChar = chosenChar.concat(number)
            password = chosenChar[Math.floor(Math.random() * number.length)]
        }
    }
    characterSelection()

  

    for (var index = 0; index < charLength; index++) {
        console.log(chosenChar);
        var randomChar = chosenChar[Math.floor(Math.random() * chosenChar.length)]

        var finalPassword = password += randomChar
    }

    return finalPassword
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
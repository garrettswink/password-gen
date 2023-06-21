var characterLength = 8;
var choiceArray = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']



// Defines generateBtn variable, matching it to generate Button-ID in HTML
var generateBtn = document.querySelector("#generate");

//Creates Event Listener: When generateBtn is clicked, the writePassword function is called.
generateBtn.addEventListener("click", writePassword);

//writePassword function calls the generatePassword function declared in the 'password' variable.
function writePassword() { // I need to define the generatePassword function.
      var correctPrompts = getPrompts(); // returns true or false
      
    if(correctPrompts) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
      } 
    }

//The function to generate password.
function generatePassword () {
    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomIndex];
    }
    return password;
}

//Prompt 
function getPrompts(){
    choiceArray = [];

    characterLength = parseInt(prompt("How many characters for your password? (8 - 128)"));
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character Length Invalid. Try again");
        return false;
    } 

    if(confirm("Would you like lowercase letters in you password?")) {
        choiceArray = choiceArray.concat(lowerCase);
    }

    if(confirm("Would you like uppercase letters in you password?")) {
        choiceArray = choiceArray.concat(upperCase);
    }

    if(confirm("Would you like special characters in you password?")) {
        choiceArray = choiceArray.concat(specialChar);
    }

    if(confirm("Would you like numbers in you password?")) {
        choiceArray = choiceArray.concat(numberArray);
    }

    return true;
}
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

//Generate password according to criteria
function generatePassword(){
  //Character types Objects 
  var charType = [
    //Lowercase Object
    {
      "name": "Lowercase",
      "value": "abcdefghijklmnopqrstuvwxyz",
      "status": false
    },
    //Uppercase Object
    {
      "name": "Uppercase",
      "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      "status": false
    },
    //Numbers Object
    {
      "name": "Number",
      "value": "0123456789",
      "status": false
    },
    //Special Characters Object
    {
      "name": "Uppercase",
      "value": "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~",
      "status": false
    }
  ]
  //First requirement: Length
  //Ask for the length until the criteria of at least 8 characters and no more than 128 characters is met
  do{
    var enteredLength = parseInt(prompt("Enter the length of the password, at least 8 characters and no more than 128 characters"));
  }while(!isNaN(enteredLength) && !(enteredLength >= 8) || !(enteredLength <= 128));
  //Second requirement: Must include at least one of the the following: lowercase, uppercase, numeric or special character
  //Ask All 4 questions until one of them is answered "OK"
  do{
    var askLower = confirm("Would you like to include lowercase characters in the generated password?");
    charType[0].status = askLower;
    var askUpper = confirm("Would you like to include uppercase characters in the generated password?");
    charType[1].status = askUpper;
    var askNumeric = confirm("Would you like to include numeric characters in the generated password?");
    charType[2].status = askNumeric;
    var askSpecial = confirm("Would you like to include a special characters in the generated password?");
    charType[3].status = askSpecial;
    //loop thru chartypes object for one of its key value to be true
    var minReq = charType.find(charType => charType.status === true);
    //alert user that at least one charater type must be selected if none were selected
    if(!minReq){
      alert("You must include at least one of the the following: lowercase, uppercase, numeric or special character");
    }
  }while(!minReq);
  //Loop thru charType objects and concat all values that status === true
  var usedReq = charType.filter(charType => charType.status === true);
  var stringForPass = ""
  for (let i = 0; i < usedReq.length; i++) {
    stringForPass = stringForPass + usedReq[i].value
  }
  //Generate Password
  var password=""
  for (let i = 0; i < enteredLength; i++) {
    password += stringForPass.charAt(Math.floor(Math.random() * stringForPass.length))
  }
  return password;
}
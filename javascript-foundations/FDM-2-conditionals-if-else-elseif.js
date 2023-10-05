//////////JavaScript if, else, and else if///////////
console.log("   JAVASCRIPT IF, ELSE, AND ELSE IF");
//Conditional statements are used to perform different actions based on different conditions.

console.log("     Conditional Statements : (Look in the code for more info)");
/*
- Use IF to specify a block of code to be executed, if a specified condition is true
- Use ELSE to specify a block of code to be executed, if the same condition is false
- Use ELSE IF to specify a new condition to test, if the first condition is false
- Use SWITCH to specify many alternative blocks of code to be executed
*/

const d = new Date();
let hour = 19;
console.log(`The hour now is: ${hour}`)
if (hour < 18) {
  greeting = "Good day";
  console.log("     The if Statement :");
  console.log(greeting);
} 
else if (hour < 10) {
  console.log("     The else if Statement :");
  console.log("Good Evening");
} 
else {
  console.log("     The else Statement :");
  console.log("Good evening");
} 
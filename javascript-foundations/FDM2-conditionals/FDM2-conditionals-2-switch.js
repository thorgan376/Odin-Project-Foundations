console.log("   JAVASCRIPT SWICH STATEMENT: (Look in the code for more info)")
//The switch statement is used to perform different actions based on different conditions.
//Use the switch statement to select one of many code blocks to be executed.

/*This is how it works:

    The switch expression is evaluated once.
    The value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.
*/

console.log("     SWITCH EXAMPLE 1 :");
switch(new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(`Today is: ${day}`);
    break;
  case 1:
    day = "Monday";
    console.log(`Today is: ${day}`);
    break;
  case 2:
     day = "Tuesday";
     console.log(`Today is: ${day}`);
    break;
  case 3:
    day = "Wednesday";
    console.log(`Today is: ${day}`);
    break;
  case 4:
    day = "Thursday";
    console.log(`Today is: ${day}`);
    break;
  case 5:
    day = "Friday";
    console.log(`Today is: ${day}`);
    break;
  case 6:
    day = "Saturday";
    console.log(`Today is: ${day}`);
    break;
  default:
    day = "This day is not exsist, how can you come here ?"
    console.log(`Today is: ${day}`);
    break
}
console.log("     THE BREAK KEY WORD : (Look in the code for more info)");
/*
- When JavaScript reaches a break keyword, it breaks out of the switch block.

- This will stop the execution inside the switch block.

- It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway. 
*/

console.log("     THE DEFAULT KEY WORD : (Look in the code for more info)");
//The default keyword specifies the code to run if there is no case match:

console.log("   COMMON CODE BLOCKS :");
console.log("     SWITCH EXAMPLE 2 : ");
let a111 = new Date().getDay();

console.log(`a111 = ${a111}`);
//considering sometime you enter the wrong day like Monday to Wednesday,
//the log may not show up on console and you need to modify the case to test it
switch (a111) {
  case 4:
  case 5:
    //console.log(a);
    text = "Soon it is Weekend";
    if (a111 == 4) {
      a111 = "Thursday";
    } else { //a ==5
      a111 = "Friday";
    }
    console.log(`Hmm, today is : ${a111} and ${text} `);
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    if (a111 == 0) {
      a111 = "Sunday";
    } else {
      a111 = "Saturday";
    }
    console.log(`Hmm, today is : ${a111} and ${text} `);
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log("     SWITCHING DETAILS : (Look in the code for more info)");
/*
If multiple cases matches a case value, the first case is selected.

If no matching cases are found, the program continues to the default label.

If no default label is found, the program continues to the statement(s) after the switch. */


console.log("     STRICT COMPARION : (Look in the code too understand why)");
//switch case use strict comparison (===).
// Operands must be same type and value to be match.
// In this example there will be no match for x: 
console.log("A not-working example :");
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    console.log(text);
    break;
  case 1:
    text = "On";
    console.log(text);
    break;
  default:
    text = "No value found";
    console.log(text);
}
//END OF SWITCH EXAMPLE`S
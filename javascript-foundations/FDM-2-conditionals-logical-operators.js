//LOGICAL OPERATORS
console.log("   LOGICAL OPERATORS");
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

console.log("     || OR :");
console.log(`       The “OR” operator is represented with two vertical line symbols:
Ex: result = a || b;`);
/*
In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

There are four possible logical combinations: */
console.log(`true || true == ${true || true}`); //true
console.log(`false || true == ${false || true}`); //true
console.log(`true || false == ${true || false}`); //true
console.log(`false || false == ${false || false}`); //false
/*
As we can see, the result is always true except for the case when both operands are false.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false: */
if (1 || 0) { // works just like if( true || false )
   console.log(`1 || 0 is truthy!`);
}

/*Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

For example: */
let hourInLO = 9;

if(hourInLO < 10 || hourInLO > 18) {
    console.log("The office is closed")
}

//Or we can pass more conditions :
let hourInLO2 = 12;
let isWeekend = true;
if (hourInLO2 < 10 || hourInLO2 > 18 || isWeekend) {
    console.log("The office is closed"); //Because it's the weekend
}

//OR "||" finds the first truthy value
console.log(`       OR "||" finds the first truthy value : (Look into the code to understand)`);
/*
The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values: */
//let result = value1 || value2 || value3;

/*
The OR || operator does the following:

    Evaluates operands from left to right.
    For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance: */
console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
//1. Getting the first truthy value from a list of variables or expressions.
console.log(`       1. Getting the first truthy value from a list of variables or expressions : 
(Look into the code to understand)`);
let alcohol1 = "";
let alcohol2 = "";
let alcohol3 = "Whiskey";
console.log(alcohol1 || alcohol2 || alcohol3 || "Fuck u");
//If all variables were falsy, "Fuck u" would show up.

//2. Short circuit evaluation
console.log("       2. Short circuit evaluation : (Look into the code to understand)");
/*Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed: */
true || console.log("not printed");
false || console.log(`"printed" because false is first before ||`);
/*In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

=>>>>>>>> Sometimes, people use this feature to execute commands only if the condition on the left part is falsy. */

console.log("     && AND :");
//The AND Operator is represented with two ampersands 

//Ex: result = a && b;

//In classical programming, AND returns true IF BOTH OPERANDS ARE TRUTHY and false otherwise:
//Look at this example below:
console.log(`true && true is: ${true && true}`);
console.log(`false && true is: ${false && true}`);
console.log(`true && false is: ${true && false}`);
console.log(`false && false is: ${false && false}`);

//An example with if;
let hourAnd = 11;
let minuteAnd = 31;
if (hourAnd <= 12 && minuteAnd > 30) {
    console.log(`It's true`);
} else {
    console.log(`It's false`);
}
//Just as with OR, any value is allowed as an operand of AND:
if(1 && 0) {console.log(`"won't work, because the result is falsy"`)}
else {console.log(`Damn it's false`)}

//AND "&&" finds the first falsy value
console.log(`     AND "&&" finds the first falsy value`);
//EX: result = value1 && value2 && value3;

/*
The AND && operator does the following:

    Evaluates operands from left to right.
    For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
    If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one. */
//Examples:
//if the first operand is truthy
//AND returns the second operand
console.log(`1 && 0 is: ${1 && 0}`);//false => return the original value of that false operand: 0
console.log(`1 && 5 is: ${1 && 5}`);//truthy => reutrn 5 - last value

//if the first operand is falsy
//AND returns it. The second operand is ignored
console.log(`null && 5: ${null && 5}`); //null and 5 is ignored
console.log(`0 && "no matter what": ${0 && "no matter what"}`)//ignored the last one

//We can also pass several values in a row. See how the first falsy one
//is returned:
console.log(`1 && 2 && null && 3: ${1 && 2 && null && 3}`);//null
//When all value are truthy, the last value is returned
console.log(`1 && 2 && 3: ${1 && 2 && 3}`);//3, the last one

//Remember: Precedence of AND && is higher than OR ||
console.log(`     Precedence of AND && is higher than OR ||`);
console.log(`Ex: a && b || c && d is the same with (a && b) || (c && d)`);

//Don't replace if with || or &&: 
console.log(`     Don't replace if with || or &&: `);
/*
Sometimes, people use the AND && operator as a "shorter way to write if".

For instance:

    let x = 1;
    (x > 0) && alert( 'Greater than zero!' );

The action in the right part of && would execute only 
if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:

    let x = 1;
    if (x > 0) alert( 'Greater than zero!' );

Although, the variant with && appears shorter, 
if is more obvious and tends to be a little bit more readable. 
So we recommend using every construct for its purpose: 
use if if we want if and use && if we want AND. */

console.log("     ! (NOT) :");
//The boolean NOT operator is represented with an exclamation sign !.

//The syntax is pretty simple:
//Ex: result = !value;

/*
The operator accepts a single argument and does the following:

    Converts the operand to boolean type: true/false.
    Returns the inverse value. true => false or false to true

For instance:
*/
console.log(`!true = ${!true}`);//false
console.log(`!0 = ${!0}`);//true

//A double NOT !! is sometimes used for converting a value to boolean type:
console.log(`     Double NOT !!: converting a value to boolean type:`);
console.log(`!!"non-empty string" = ${!!"non-empty string"}`);//true
console.log(`!!null = ${!!null}`);//false
/*
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, 
we have a plain value-to-boolean conversion.
*/
//There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log(`Boolean("non-empty string") = ${Boolean("non-empty string")}`)//true
console.log(`Boolean(null) = ${Boolean(null)}`)//false

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
console.log(`     The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.`);

console.log(`     TASKS:`);
//What's the result of OR?
console.log(`       What's the result of OR ?`);
console.log(`null || 2 || undefined = ${null || 2 || undefined}`); //2 => Correct - that’s the first truthy value.
//What's the result of OR'ed alerts?
console.log(`       What's the result of OR'ed alerts ?`);
console.log(`alert(1) || 2 || alert(3) = ${alert(alert(1) || 2 || alert(3))}`);//alert(1) then alert 2 ignore alert(3)=> Incorrect

/*
The call to alert does not return a value. Or, in other words, it returns undefined.

    The first OR || evaluates its left operand alert(1). That shows the first message with 1.
    The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
    The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.

There will be no 3, because the evaluation does not reach alert(3). */

//What is the result of AND?
console.log(`       What is the result of AND?`);
console.log(`alert( 1 && null && 2) = ${alert(1 && null && 2)}`);//null => Correct
//The answer: null, because it’s the first falsy value from the list.

//What is the result of AND'ed alerts?
console.log(`       What is the result of AND'ed alerts?`);
console.log(`alert( alert(1) && alert(2)) = ${alert( alert(1) && alert(2))}`);
//undefined => Incorrect => alert(1) then alert undefined
/*
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops,
because undefined is a falsy value. And && looks for a falsy value 
and returns it, so it’s done. */

//The result of OR AND OR
console.log(`       The result of OR AND OR`)
console.log(`alert( null || 2 && 3 || 4 ) = ${alert( null || 2 && 3 || 4 )}`);//3 => Correct
/*
The precedence of AND && is higher than ||, so it executes first.
The result of 2 && 3 = 3, so the expression becomes:
    null || 3 || 4
Now the result is the first truthy value: 3.
*/

//Change the range between 
/*
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.

 */
console.log(`Read the code inside the IDE`);
let ageTaskRange = 56;
if ( ageTaskRange >= 14 && ageTaskRange <= 90 ) {
    console.log(`The if is: if(ageTaskRange >= 14 && ageTaskRange <= 90)`);
}
//Good, you make it right => Correct

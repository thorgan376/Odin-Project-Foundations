//This section covers some basic concept 
console.log(`     CONDITIONAL PART 5: SOME BASIC CONCEPT:`);
console.log(`       Conditional branching: if, '?'`);

//Again, the if statement:
console.log(`       The "if" statement:`);
//Old lesson that we learned before can be read through as a review:
// condition in parentheses ()
/*
let year = prompt(`In which year was ECMAScript-2015 specification published?`, '');
if(year == 2015) console.log(`You are right !`);

//OR
//wrap code block inside curly braces
if (year == 2015) {
    console.log(`You are right 1`);
    console.log(`That's a good one`);
}
 */
//RECOMMENDED => Doing so improves readability.

//Boolean conversion:
console.log(`       Boolean conversion:`);
/*
    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.
 */

//The else clause:
console.log(`       The "else" clause:`);
//Execute when the condition is falsy
//Ex:
/*
if(dui) {
//Execute when truthy
} else {
//Execute when falsy 
}
*/

//Several conditions: "else if"
console.log(`       Several conditions: "else if"`);
//Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
/*
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
} 
*/

//Conditional Operator 'if'
console.log(`       Conditional operator '?':`);
//This can also a shorter and simpler way like if else
/*The operator is represented by a question mark ?. Sometimes it’s called “ternary”,
 because the operator has three operands. It is actually the one and only operator 
 in JavaScript which has that many. */
//Syntax: 
////let results = condition ? value1 : value2;
//The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
//Ex
////let accessAllowed1 = (age > 18) ? true : false;

/*
Technically, we can omit the parentheses around age > 18. 
The question mark operator has a low precedence, 
so it executes after the comparison >.

This example will do the same thing as the previous one: */
////let accessAllowed2 = age > 18 ? true : false;
//This also equal to:
////let accessAllowed3 = age > 18 
//(Avoid question mark operator because the comparison ifself returns true/false)

//RECOMMENDED: But parentheses make the code more readable, so we recommend using them.

//MULTIPLE '?'

/*
A sequence of question mark operators ? can return a value 
that depends on more than one condition.

For instance: */
/*
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

//alert( message ); //Uncomment this to run the code block above
//This looks like three set of if, else if and else

if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }
 */
//NON - TRADITIOAL USE OF '?'
console.log(`       NON - TRADITIOAL USE OF '?'`);
//Sometimes the question mark ? is used as a replacement for if:
/*
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
alert('Right!') : alert('Wrong.'); 
*/
/*
- Depending on the condition company == 'Netscape', 
either the first or the second expression 
after the ? gets executed and shows an alert. 
- We don’t assign a result to a variable here. 
Instead, we execute different code depending on the condition.*/

//==> NOT RECOMMENDED, less readable

/*Change into this instead:
 let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
*/

/*Our eyes scan the code verticaly. Code blocks which span several lines
 are easier to understand than a long, horizontal instruction set.*/
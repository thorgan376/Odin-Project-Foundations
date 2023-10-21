//Like I said, this is old things that I have learned 2 days ago
//So i just review through these
//BUT not the new one, i still adding them to this file
console.log(`     FDM2-CONDITIONALS-6-SWITCH-CONCEPT:`);

//Go through those things have learned before, 
//we ended up learn these:

//CASE 1:
console.log(`       CASE 1:Without break;`);
//without break;
//==> If there is no break then the execution continues with the next case without any checks.


//CASE 2:
console.log(`       CASE 2:Any expression can be a switch/case argument`);
//Both 'switch' and 'case' allow arbitrary expressions.

let aArgument = "1";
let bArgument = 0;

switch (+aArgument) {
  case bArgument + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}

//Here +a gives 1, that's compared with b + 1 in case, and the corresponding code is executed.

//CASE 3:
console.log(`       CASE 3:Grouping of "case";`);

//Several variants of case which share the same code can be grouped.
let aHa = 3;

switch (aHa) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}//The ability to “group” cases is a side effect of how switch/case works without break.

//CASE 4:
console.log(`       CASE 4:Type matters;`);
//Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
//For example, let’s consider the code:
/*
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
 */
/*
    For 0, 1, the first alert runs.
    For 2 the second alert runs.
    But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
 */

//Code above commented because to prevent annoying prompt popup ( I just don't like it ! );
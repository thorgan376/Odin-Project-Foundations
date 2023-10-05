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
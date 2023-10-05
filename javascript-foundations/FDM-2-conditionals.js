//////Conditionals//////
//Funstufff//
//Note: All comparison operators return a boolean value
//true or false

//String are comapared letter by letter
/*
The algorithm to compare two strings is simple:

   1. Compare the first character of both strings.
   2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
   3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
   4. Repeat until the end of either string.
   5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/
//Ex: Glo vs Glee: 
/*
1. G == G
2. l == l
3. o > e => Stop here 
Even Glee has more character than Glo, Glo still greater than Glee
The first the greater*/

//Remmember: In case sensitive: lower case is greater than Uppercase
/* Because the lower case character has a greater index in the internal encoding table Javascript use (Unicode) */

//Compare of different types
// alert('185397' == 185397);
// alert(`This is not what call a equality expression: ${true == 1}`);

//A funny consequence: 
//- Two values are equal
//- One of them is true as a boolean and the other one is false as a boolean.
let a1 = 0;
console.log(`Boolean a1 is this: ? ${Boolean(a1)}`); //False

let b1 = "0"; 

//In this time, a string with only 0 is the character is generate:
//Also 0 in UTF-16 == 48 > 1 equal true
console.log(`b1.charCodeAt(0) is this: ${b1.charCodeAt(0)}`);

console.log(`Is that boolean b1: ? ${Boolean(b1)}`); //True

console.log(`The difference after all of a1 and b1: ${a1 == b1}`); //True!!! In theory, must be false, but in CS is true
//An equality check converts values using the numeric conversion (hence "0" becomes 0), 
//while the explicit Boolean conversion uses another set of rules.

//Strict Equality
// == cannot tell differentiate 0 from false :
console.log(`The differentiate of 0 and false: ${0 == false}`);
//The samething happens with an empty string:
console.log(`The differentiate of '' and false: ${'' == false}`);
// => This happens because operands of different types are converted
// to numbers by the equality operator ==. An empty string, just like 
// false, becomes a zero.

//A strict equality operator === check the equality WITHOUT type conversion
console.log(`Is 0 equal to false, let's check: ${0 === false}`);
//false, because the types are different
//There is also a “strict non-equality” operator !== analogous to !=.

//COMPARE with null and undefined
//There’s a non-intuitive behavior when null or undefined are compared to other values.

console.log("   COMPARE WITH NULL AND UNDIFINED: ");

//For a strict strict equality check ===
//These values are different, because each of them is a different type.
console.log(`null === undefined ???: ${null === undefined}`);

//For a non-strict check ==
//There’s a special rule. These two are a “sweet couple”: 
//they equal each other (in the sense of ==), but not any other value.
console.log(`null == undefined ???: ${null == undefined}`);

//For maths and other comparisons < > <= >=
//both are converted to number: null => 0; undefined => NaN.
// ==> Very funny when apply this rule, but don't fall into that trap of them

console.log("   Strange result null vs 0: ");
//TH1: Strange result null vs 0
console.log(`What if: null > 0: ${null > 0}`); //false(1)
console.log(`What if: null == 0: ${null == 0}`); //false(2)
console.log(`What if: null >= 0: ${null >= 0}`); //true(3)

/*
Mathematically, that’s strange. The last result states 
that "null is greater than or equal to zero", so in one of 
the comparisons above it must be true, but they are both false.

The reason is that an equality check == and 
comparisons > < >= <= work differently. 
Comparisons convert null to a number, treating it as 0. 
That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for 
undefined and null is defined such that, without any conversions, 
they equal each other and don’t equal anything else. 
That’s why (2) null == 0 is false.
 */

console.log("   An incomparable undefined: ");
//The value undefined shouldn’t be compared to other values:
console.log(`What if: undefined > 0: ${undefined > 0}`); //false(1)
console.log(`What if: undefined < 0: ${undefined < 0}`); //false(2)
console.log(`What if: undefined == 0: ${undefined == 0}`); //false(3)
//(1) and (2) False because undefined gets converted to NaN 
//and NaN is a special numeric value for all comparisons.

//(3) False because undefined only equals to null, undefined, and no other value.

//AVOID PROBLEM BETWEEN NULL AND UNDEFINED
console.log("   AVOID PROBLEM: read the comment in the code");
/*
  - Treat any comparison with undefined/null 
  except the strict equality === with exceptional care.
  - Don’t use comparisons >= > < <= with a variable which 
  may be null/undefined, unless you’re really sure 
  of what you’re doing. If a variable can have these values, 
  check for them separately.
 */

console.log("   SUMMARY OF COMPARISON PART: read the comment in the code");
/*
  - Comparison operators return a boolean value.
  - Strings are compared letter-by-letter in the “dictionary” order.
  - When values of different types are compared, they get converted 
  to numbers (with the exclusion of a strict equality check).
  - The values null and undefined equal == each other and 
  do not equal any other value.
  - Be careful when using comparisons like > or < with variables 
  that can occasionally be null/undefined. 
  Checking for null/undefined separately is a good idea.
*/

//TASKS
console.log("   TASK:");
//Task 1: 
console.log(`5 > 4 : ${5 > 4}`); //true: Correct
//Obviously, true.

//Task 2: 
console.log(`"apple" > "pineapple" : ${"apple" > "pineapple"}`); 
//false - Correct
//Dictionary comparison, hence false. "a" is smaller than "p".

//Task 3: 
console.log(`"2" > "12" : ${"2" > "12"}`); 
//false - Incorrect: Must be True
//Again, dictionary comparison, first char "2" is greater than the first char "1".

//Task 4:
console.log(`undefined == null : ${undefined == null}`); 
//true - Correct
//Values null and undefined equal each other only.

//Task 5:
console.log(`undefined === null : ${undefined === null}`); 
//false - Correct
//Strict equality is strict. Different types from both sides lead to false.

//Task 6: 
console.log(`null == "\n0\n" : ${null == "\n0\n"}`); 
//false - Correct
//Similar to (4), null only equals undefined.

//Task 7: 
console.log(`null === +"\n0\n" : ${null === +"\n0\n"}`); 
//true -- Incorrect
//Strict equality of different types. Type of null in Javascript is an Object
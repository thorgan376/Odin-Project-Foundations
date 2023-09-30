console.log("Fundamentals Part 1");
// console.log("Hello World");

// let message = "Hello";
// var user = "Stephen";
// message = user;
// // alert(message);

// let admin, thename;
// thename = "John";
// admin = thename;
// // alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "aoyaki";

// /*We generally use upper case for constants that are “hard-coded”.
//  Or, in other words, when the value is known
//  prior to execution and directly written into the code.

//  In this code, birthday is exactly like that.
//  So we could use the upper case for it.*/
// const birthday = "18.04.1982"; //upperCase

// /*The age is calculated from birthday using someCode(),
//  which means a function call that we didn’t explain yet (we will soon!),
//  but the details don’t matter here, the point is that age
//  is calculated somehow based on the birthday.*/
// //const age = someCode(birthday); keep the lower case

// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true + " = True" ); // 1
// alert( +"" + " = The blank ");   // 0

// // => It actually does the same thing as Number(...), but is shorter.

// let apples = "2";
// let oranges = "3";

// //The binary plus would add them as strings:
// alert( apples + oranges ); // "23", the binary plus concatenates strings

// // If we want to treat them as numbers, we need to convert and then sum them:
// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// // the longer variant
// // alert( Number(apples) + Number(oranges) ); // 5

// let counter = 3;
// counter++; //postfix form
// //++counter; //prefix form
// alert("This counter = " + counter);

////////////////////////////////////// Ctrl + / to run again the code above

//The postfix and prefix form
// let a = 1, b = 1;

// let c = ++a;//postfix return new value //a=2
// let d = b++;//prefix return old value //b=2
// alert("c = " + c); //2
// alert("d = " + d); //1

// alert("a, b lần lượt là = "+ a + " và "+ b);

// Ctrl + / to run again the code above

//Assignment result
// let a = 2;
// let x = 1 + (a *= 2);

// alert("The value of a and x is: " + a + " and " + x);

////////////////////////////////////// Ctrl + / to run again the code above

//Type conversion
// alert("" + 1 + 0); //Test: can't guest ; Answer: 10 => Incorrect

// alert("" - 1 + 0); //Test: -1; Answer: -1 => Correct
// alert(true + false);
// //Test: 1; Answer: 1 => Correct: + operator convert anything to a numeric operation
// alert(6 / "3"); //Test: 2; Answer: 2 => Correct
// alert("2" * "3");//Test: 6; Answer: 6 => Correct
// alert(4 + 5 + "px");//Test: 9px; Answer: 9px => Correct
// alert("$" + 4 + 5); //Test: $45; Answer: $45 => Correct
// alert("4" - 2); //Test: 2; Answer: 2 => Correct

// alert("4px" - 2); //Test: 4px-2; Answer: NaN => Incorrect VERY INTERESTING ANSWER

// //The addition with a string appends the number 5 to the string. (the example below)
// alert("  -9   " + 5); //Test:"   -9   5"; Answer: "   -9   5" => Correct

// alert("  -9  " - 5); //Test: -4; Answer: -14 => Incorrect: WTF, you calculate wrong ???

// //null becomes 0 after the numeric conversion.
// alert(null + 1); //Test: NaN; Answer: 1 => Incorrect: WOW, ANOTHER EXAMPLE MUST KEEP AN EYE ON

// //undefined becomes NaN after the numeric conversion.
// alert(undefined + 1); //Test: 1; Answer: NaN => Incorrect: Damn, the opposite of the above example

// //Space characters are trimmed off string start and end when a string is converted to a number.
// //Here the whole string consists of space characters, such as \t, \n and a “regular” space between them.
// //So, similarly to an empty string, it becomes 0.
// alert(" \t \n" - 2);// Test: downgrade the line and NaN; Answer: -2; => Incorrect: Again ???

// //Fix the addition
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// //You can put the + operator in above, before the "prompt" word
// //Or the expression like below
// alert(+a + +b);

///////////////////////////////////////////// Ctrl + / to run again the code above
//1
console.log(23 + 97);
//2
console.log(1 - (12 * 905) / 28 + 57 - 11);
//3
console.log((4 + 6 + 9) / 77);
//4
let a = 10;
console.log("This is the result of a: " + a);
//console.log("Another result of a after multiply by 9: " + a*9);

let b = 7 * a;
console.log(b);

//5
const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

const min = 12;

// ASSIGNMENT:
// Name the three ways to declare a variable

// Ans: Var, let and const

// Which of the three variable declarations should you avoid and why?

// Ans: Sometime the behavior of var is not what u expect

// What rules should you follow when naming variables?

// Ans: 1. The name must contain only letter, digits or the symbol $ and _
// Ans: 2. The first character must not be a digit

// What happens when you add numbers and strings together?
// Ans: Only happen when we using + operator ( It both used for addition and conatenation)
// String + String => String
// String + Number + Number => String + String + String
// Number + Number + String => (Number + Number: Additon first then become string) + String

// How does the Modulo (%), or Remainder, operator work?
// Ans: Return the remainder of the integer division of a and b

// Explain the difference between == and ===.
// Ans: ==: Equal only between the values of the variables
// Ans: ===: Strict Equality: Both types and values

// When would you receive a NaN result?
// Ans: NaN stands for "Not a legal number": Return after exercute a non numeric operation

// How do you increment and decrement a number?
// Ans: a++ and a--

// Explain the difference between prefixing and postfixing increment/decrement operators.
// Ans: prefixing: Return the old value after execute
// Ans: postfixing: Return the new value after execute

// What is operator precedence and how is it handled in JS?
// Ans: From high to low:
// 14 	unary plus 	+
// 14 	unary negation 	-
// 13 	exponentiation 	**
// 12 	multiplication 	*
// 12 	division 	/
// 11 	addition 	+
// 11 	subtraction 	-
// … 	… 	…
// 2 	assignment 	=
// 1    comma ,

// How do you access developer tools and the console?
// F12 and Ctrl + Shift + I

// How do you log information to the console?
// External script file or internal script element

// What does unary plus operator do to string representations of integers? eg. +”10”
// Ans: Unary plus does the same thing as Number(...), but it shorter convert string or non-number to number

//THE DIFFERENT BETWEEN VAR AND LET:
//https://javascript.info/var
//1. “var” has no block scope
//Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.
//So if you declare a variable in an "if" block code with var type;
//it will remain access after you call it outside the block if
//If you put a var type variable inside a code block and inside a function => it now become function-scoped not global-scoped, will only can access inside that function

//2. "var" tolerates redeclarations
//Not like "let" var can declare the same variable any number of times.
//If we use var with an already-declared variable, it’s just ignored the old value and doesn't trigger an error

//3. “var” variables can be declared below their use
//var declarations are processed when the function starts (or script starts for globals).
//In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).
//* Declarations are hoisted, but assignments are not.
//Ex: var phrase = "Hello";
/*The line var phrase = "Hello" has two actions in it:

    Variable declaration var
    Variable assignment =.

The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears. */

//4. IIFE - “immediately-invoked function expressions”:
//- But nowadays there’s no reason to write such code.

console.log("Fundamentals Part 2");

//Beign
//when writing a string, you need to surround the value with quotes "" or '' or ``.
const string = "The revolution will not be televised.";
console.log(string);

//The following will work if you previously defined the variable string
const badstring = string;
//badString is now set to have the same value as string.
console.log(badstring);

//Single quotes, double quotes, and backticks
//You must use the same character for the start and end of a string, or you will get an error:
//EX: const badQuotes = 'This is not allowed!";
/*Strings declared using single quotes and 
strings declared using double quotes are the same, 
and which you use is down to personal preference - Bạn muốn chọn cái nào là việc của bạn*/

/*
Strings declared using backticks are a special kind of string called a template literal. In most ways, 
template literals are like normal strings, but they have some special properties:

    you can embed JavaScript (Search this in mdn web docs) in them
    you can declare template literals (Search this in mdn web docs) over multiple lines
*/

//Embedding Javascript
/*Inside a template literal, you can wrap JavaScript variables or expressions 
inside ${ }, and the result will be included in the string:*/
const namea = "Hello";
const fullname = `${namea} World `;
console.log(fullname);

//You can also use the same technique to join together two variables:
const one = "Hello";
const two = "Guys";
const joined = `${one} ${two}`;
console.log(joined);

//Concatenation in context template literal
// You have to look at the internal code in the HTML file
/* const button = document.querySelector('.odd');

function greet() {
    const name = prompt("What is your name ?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, 
    it's very nice to see you!`;
}

button.addEventListener("click", greet); */
//Concatenation using "+"
const greetingb = "Hello";
const nameb = "Chris";
console.log(greetingb + ", " + nameb); // "Hello, Chris"

// Including expressions in strings
// Include Javascript expression in template literals
const thesong = "The Man";
const author = "Taylor Swift";
const score = 9.5;
const highestscore = 10;
const output = `I like the song ${thesong} by ${author}. 
I gave it a score of ${(score/highestscore)*100}%.`
console.log(output);

//Multiline strings
const newlineA = `One day you 
finally knew
what you had
to do, and began,`;
console.log(newlineA);

/*To have the equivalent output using a normal string 
you'd have to include line break characters (\n) in the string:*/

const newlineB = "One day you\nfinally knew\nwhat you had\nto do, and began,";
console.log(newlineB);

//Including quotes in strings
//Use different character to declare the string, like "" or '' or ``
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1, goodQuotes2);
/*Escape the problem quotation mark: Also means that we do
something to them to make sure they are recognized as text
, not part in the code => in javascript, we do this by 
putting a backslash just before the character*/
const bigmouth = 'You\'ve got no right to take my place…';
console.log(bigmouth);
//You can see "Escape sequences for more escape other special character

//Number vs strings;
/*1. Concatenate a string and a number => Work just fine. The browser 
automatically converts the number to a string 
and concatenate the two strings*/

/*Number() and String() do they job as converter,
 they convert the anything passed to it into its type*/

 //String length
 let text1 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let length = text1.length;
 console.log("Alphabet character string length is: " + length);

 //Extracting String Parts:
 //There are three methods for extracting a part of a string
 /*
 - slice(start, end)
 - substring(start, end)
 - substr(start, length)
 */

//slice()
//extract a part of a string and returns the extracted part in a new string
//The method takes 2 parameters: start position, end position ( end not include )
//JavaScript counts positions from zero. first is 0, second is 1
let text = "dajfhajodjs, askfoiwhnc, iaushven";
let part0 = text.slice(9, 16);
console.log(part0);
//If you omit the second parameter, the method will slice out the rest of the string:
let part1 = text.slice(9);
console.log(part1);
//If a parameter is negative, the position is counted from the end of the string:
let part2 = text.slice(-9);
console.log(part2);
//This example slices out a portion of a string from position -12 to position -6: 
let part3 = text.slice(-12,-9);
console.log(part3);

//substr(); deprecated
//substring()
/*substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().*/
let part4 = text.substring(-9,12);
console.log(part4);

//Replacing String Content
let replace = "Ohohoho"
let textafter = text.replace("skfoiwh", replace);
console.log(textafter);
/*
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

By default, the replace() method is case sensitive so writing Ohohoho will not work */
let textafter2 = text.replace("SKFOIWH", "HAHA");
console.log(textafter2);
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let textafter3 = text.replace(/SKFOIWH/i, "HAHA");
console.log(textafter3);

//to replace all matches use a regular expression with a /g flag (global match):
let text2 = "Hahaaiuhvoah, iahsHahaaojwd, Hahaisijv"
let textafter4 = text2.replace(/Haha/g, "HAHA");
console.log(textafter4);

//ReplaceAll()
/*The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.*/
text6 = text.replaceAll("a","Dogs");
text7 = text.replaceAll("a","dogs");
text8 = text.replaceAll(/a/g,"Dogs");
text9 = text.replaceAll(/a/g,"dogs");
console.log(`text   is: ${text}
text 6 is: ${text6}, 
text 7 is: ${text7}, 
text 8 is: ${text8}, 
text 9 is: ${text9}`);
//converting to uppercase and lowercase
//toUpperCase();
//toLowerCase();

let beforeUpperOrLower = "i\'m hoàng thái sơn";
let afterUpper = beforeUpperOrLower.toUpperCase();
console.log(afterUpper)

//similar to lower case
let afterLower = afterUpper.toLowerCase();
console.log(afterLower);

//Joins two or more string
//concat()
let concatPart1 = "Xin chao, "
let concatPart2 = "ban ten la gi ?"
let concatAll = concatPart1.concat(concatPart2);
console.log(concatAll);

//can be used instead of the + operator
//Ex:
let concatPart3 = "Nhin" + " " + "tui" + " " + "day a ban";
console.log(concatPart3);
let concatPart4 = "Nhin".concat(" ","tui"," ","day a ban");
let confirmTwo = (concatPart3 == concatPart4);
console.log("concatPart3 == concatPart4 ? => " + confirmTwo);

//Remove whitespace from both side of a string
//trim()
let removeWPTrim = "         Fuckkkk";
let afterRemoveWPTrim = removeWPTrim.trim();
console.log("removeWPTRim value: " + removeWPTrim+ "\nafterRemoveWPTRim value: " +afterRemoveWPTrim);

//Works like trim but remove whitespace only form the start or endof a string
//trimStart()
let trimBefore = "   aklsjhf  aaasf      ";
let trimStartAfterB = trimBefore.trimStart();
console.log("trimStart():" + trimStartAfterB);
//trimEnd()
let trimEndAfter = trimBefore.trimEnd();
console.log("trimEnd()  :" + trimEndAfter);

//Javascript stringpadding
//padStart(): pad a strings from the start
let padString = "asjchkaw";
let padStart1 = padString.padStart(13, "+");
console.log("padStart():" + padStart1);
//padEnd(): pad a strings from the end
let padEnd1 = padString.padEnd(12, "-");
console.log("padEnd()  :" +padEnd1);

//Extracting String Characters
//3 Methods
//charAt(position)
//charCodeAt(position)
//Property acess []

//Javascript String charAt():
//the charAt() methos returns the character at a specified index (position) in a string
let stringchar = "this is a long string";
let charAtmethodString = stringchar.charAt(5);
console.log("charAt() method result: " + charAtmethodString);

//the charCodeAt() returns the unicode of the character at a specified index in a string:
//the method returns a UTF-16 code (an interge between 0 and 65535).
let charCodeAtMethod = stringchar.charCodeAt(12);
console.log("charCodeAt() method result: " + charCodeAtMethod);

//Property Acceess []
//ECMAScript 5 (2009) allows property access [ ] on strings:
let propertyAccess = stringchar[5];
console.log("Property Acceess [] method result: " + propertyAccess);

//It makes strings look like arrays (but they are not)
//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
//It is read only. str[0] = "A" gives no error (but does not work!)
stringchar[0] = "A"; //no error
console.log("After property access test: "+stringchar);

//Converting a String to an Array
//split()
//split on commas
let textBFSplit = "a,b,c,d,e,f";
const firstArray = textBFSplit.split(",");
console.log("First array result [2]: "+ firstArray[2]);

//split on spacees
let textBFSplit1 = "a b c,d e,f";
const secondArray = textBFSplit1.split(" ");
console.log("Second array result [3]: "+ secondArray[3]);

//or anything you could use to split string in to array
//If the separator is "", the returned array will be 
//an array of single characters:
const thirdArray = textBFSplit.split("");
console.log(thirdArray);

//test commit
//test commit 2

//Comparing strings
const str1 = "c";
const str2 = "b";

if (str1 < str2) {
    // true
    console.log(`${str1} is less than ${str2}`);
  } else if (str1 > str2) {
    console.log(`${str1} is greater than ${str2}`);
  } else {
    console.log(`${str1} and ${str2} are equal.`);
  }

  //compare strings case-insensitively => Convert both to the same case (Upper or lower) before comapring them

function areEqualCaseInsensitively (str1, str2) {
    console.log(str1.toUpperCase(), str2.toUpperCase());
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(areEqualCaseInsensitively(str1, str2));
//Remember: The choice of whether to transform by toUpperCase() or toLowerCase() is mostly arbitrary
//, and neither one is fully robust when extending beyond the Latin alphabet.
/*Example: Note recommend when using with German or Turkish*/

//More to diving is to search: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects

//String object
const strObj = new String("motivation");
console.log(typeof strObj);

/*String primitives and String Object also give 
different results when using eval(). 
Primitives passed to eval are treated as source code; 
String objects are treated as all other objects are, 
by returning the object. For example: */

/*const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
*/

/*For these reasons, the code may break when 
it encounters String objects when it expects 
a primitive string instead, although generally,
 authors need not worry about the distinction. */

 /*A String object can always be converted to its 
 primitive counterpart with the valueOf() method.  */
 const s2 = new String("2 + 2");
 console.log(eval(s2.valueOf()));

 

 //String coercion: 
 /*Strings are returned as-is
 undefined turns into "undefined"
 null turns into "null"
 true turns into "true", false turns into "false"
 Number and BigInts are converted with the same algorithm as toString(10).
 Symbols throw a TypeError
 Objects are first converted to a primitive by calling it [@@toPrimitive]() (with "string" as hint)
 , to String(). and valueOf() methods. The resulting primitive is then converted to a string. */

 //Other ways:
 /* 
- Template literals: `${x} == the string coercion for the embedded expressions` (Recommended)
- String() function: String(x), except that Symbols don't throw a TypeError, but return a 
 "Symbol(description) where description is the description of the symbols" (Recommended)
- Using the + operator: "" + x coerces its operand to a primitive instead of 
a string, and, for some objects, has entirely different behaviors from normal 
string coercion. (Should not use)
 */

/* More infomation about:
UTF-16 characters, Unicode code points, and grapheme clusters 
can see in this link :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion*/

console.log("👨‍👦".split(""));
//splits into array of four surrogates

//Constructor: String()
/* Creates a new String object. It performs type conversion 
when called as a function, rather than as a constructor, 
which is usually more useful. */

//Static method: 
/*
String.fromCharCode():
- Returns a string created by using the specified sequence of Unicode values.
String.fromCodePoint():
- Returns a string created by using the specified sequence of code points.
String.raw():
- Returns a string created from a raw template string. */

//Instance properties
//String.prototype.constructor
//length (read-only)

//Instance methods: etc... (a lot - you show find it when you need it, not now)
/* 
.endsWith(): Determines whether a string ends with the characters of the string you want to search
.includes(): Determines whether the calling string contains the string you want
.indexOf(): 
.isWellFormed()
( And a lot of them to play with )*/


//////Funstufff/////////
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

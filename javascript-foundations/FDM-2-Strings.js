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


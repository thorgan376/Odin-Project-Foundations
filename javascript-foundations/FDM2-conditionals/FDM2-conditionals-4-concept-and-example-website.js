//This article reinforces the concept and provides several interesting examples
// of how you could use it building websites ( conditional structures in Javascript ).
/*
Making decisions in your code — conditionals
Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals */

console.log("   FDM2 - conditional - 4 concept and example website");
console.log("     A real Example: ( In the html file you will see )");
//If, else

/*
To understand this syntax better, let's consider a real example. Imagine a child being asked 
for help with a chore by their mother or father. The parent might say "Hey sweetheart! 
If you help me by going and doing the shopping, I'll give you some extra allowance 
so you can afford that toy you wanted." In JavaScript, we could represent this like so: */

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

/*
This code as shown always results in the shoppingDone variable returning false, 
meaning disappointment for our poor child. It'd be up to us to provide a mechanism
for the parent to set the shoppingDone variable to true if the child did the shopping. */

//ELSE IF

const selectOption = document.querySelector(`select[id="weather-choice"]`);
const textUnder = document.querySelector(`p[class='label']`)

selectOption.addEventListener('change', weatherForcastStatus);

function weatherForcastStatus() {
    const choice = selectOption.value;
    if (choice === "sunny") {
        textUnder.textContent =
          "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      } else if (choice === "rainy") {
        textUnder.textContent =
          "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      } else if (choice === "snowing") {
        textUnder.textContent =
          "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      } else if (choice === "overcast") {
        textUnder.textContent =
          "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      } else {
        textUnder.textContent = "You haven't make a choice yet";
      }
    }
    //OR you can also do this SWITCH STATEMENT: 

    /*
    switch (choice) {
        case "sunny":
            textUnder.textContent =
          "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            textUnder.textContent =
          "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing": 
            textUnder.textContent =
          "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            textUnder.textContent =
          "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default:
            textUnder.textContent = "You haven't make a choice yet";
            break;
    }
    */

/*
Any value that is not false, undefined, null, 0, NaN, or an empty string ('')
actually returns true when tested as a conditional statement, 
therefore you can use a variable name on its own to test whether it is true, or even that it exists
(that is, it is not undefined.) */

/*
And, returning to our previous example about the child doing a chore for their parent, you could write it like this:
 */
let shoppingDone2 = false;
let childsAllowance2;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone2) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

//NESTING IF...ELSE

//You can nest more block if else code inside another if else block code 
/*
 if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
 */

//TERNARY OPERATOR
console.log("     TERNARY OPERATOR: ");
/*
The ternary or conditional operator is a small bit of syntax that tests a condition
and returns one value/expression if it is true, and another 
if it is false — this can be useful in some situations, 
and can take up a lot less code than an if...else block if you have two choices 
that are chosen between via a true/false condition. The pseudocode looks like this: 

condition ? (true) run this code : (false) run this code instead

Ex: const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";

*/

console.log("       Bigger Example of Ternary operator:");
/*
The ternary operator is not just for setting variable values;
you can also run functions, or lines of code — anything you like. 
The following live example shows a simple theme chooser where the
styling for the site is applied using a ternary operator. */

const selectTheme = document.querySelector('select[id="theme-choice"]');
const htmlStyle = document.querySelector("html");
document.body.style.padding = "10px";
console.log(selectTheme.value);

function updateTheme(bgColor, textColor) {
  htmlStyle.style.backgroundColor = bgColor;
  htmlStyle.style.color = textColor;
}

selectTheme.addEventListener('change', () => {
  console.log(selectTheme.value);
  selectTheme.value === "black" 
  ? updateTheme("black", "white")
  : updateTheme("white", "black");
});

//ACTIVE LEARNING
console.log(`     ACTIVE LEARNING: A simple calendar`);

//Declare variables
const selectMonth = document.querySelector('select[id="month-selector"]');
const monthName = document.querySelector('h2[id="month-name"]');
const listDays = document.querySelector('ul[id="list-days"]');

//Show the first loaded/previous selected month option
if(selectMonth.value) {
  daysClassify();
}

function daysClassify() {
  const choice = selectMonth.value;
  if(selectMonth.value === "January" || 
  selectMonth.value === "March" ||
  selectMonth.value === "May" ||
  selectMonth.value === "July" ||
  selectMonth.value === "August" ||
  selectMonth.value === "October" ||
  selectMonth.value === "December" ) {
    createCalendar(31, choice);
  } else if (selectMonth.value === "February") {
    createCalendar(28, choice);
  } else if(selectMonth.value === "Choose the month") {
    createCalendar(0, choice);
  } else {
    createCalendar(30, choice);
  }
}

function createCalendar(days, choice) {
  // Cách dùng insertBefore:
  /* const newP = document.createElement('p')
   newP.textContent = 'Days :';
   document.body.insertBefore(newP, listDays); */
  if(choice === "Choose the month") {
    monthName.textContent = "You haven't chosen a month yet";
  } else {
    monthName.textContent = choice;
  }
  listDays.innerHTML = '';
  // listDays.setAttribute('background-color', 'red'); 
  // => Testing attribute modification DOM breakpoint debug javascript
  for( let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    
    listItem.className = 'listItem';
    listItem.textContent = i;
    listDays.appendChild(listItem);
    // listDays.remove();
    // => DOM change breakpoints: node removal
  }
}

selectMonth.addEventListener('change', daysClassify);

//Active Learning: More color choices:
console.log(`     ACTIVE LEARNING: More color choices`);

const themeChoiceAdvanced = document.querySelector('select[id = "theme-selector"]');
const html = document.querySelector('html');

if(themeChoiceAdvanced.value) {
  themeAttribute();
}

function themeAttribute() {
  const choice = themeChoiceAdvanced.value;
  switch(choice) {
    case 'white': 
      websiteThemeChanger("white", "black");
    break;
    case 'black': 
      websiteThemeChanger("black", "white");
    break;
    
    case 'purple': 
      websiteThemeChanger("purple", "white");
    break;

    case 'yellow': 
      websiteThemeChanger("yellow", "black");
    break;

    case 'psychedelic':
      websiteThemeChanger("chartreuse", "blueviolet");
    break;

    default :
    
  }
}

function websiteThemeChanger(backgroundColor, color) {
  htmlStyle.style.backgroundColor = backgroundColor;
  htmlStyle.style.color = color;
}

themeChoiceAdvanced.addEventListener('change', themeAttribute);
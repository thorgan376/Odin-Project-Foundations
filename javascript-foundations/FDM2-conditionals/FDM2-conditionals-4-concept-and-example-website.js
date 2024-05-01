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
function goShopping() {
  const vegetables = 5;
  const meat = 0.5;
  const rice = 50;
  if(vegetables >= 4 && meat == 0.5 && rice <= 60) {
    shoppingDone = true;
  } else {

  }
}
goShopping();
if (shoppingDone === true) {
  childsAllowance = 10;
  console.log("Yay, more money");
} else {
  childsAllowance = 5;
  console.log("T-T, less money");
}

/*
This code as shown always results in the shoppingDone variable returning false, 
meaning disappointment for our poor child. It'd be up to us to provide a mechanism
for the parent to set the shoppingDone variable to true if the child did the shopping. */

//ELSE IF

const selectOption = document.querySelector(`select[id="weather-choice"]`);
const textUnder = document.querySelector(`p[class='label']`)

selectOption.addEventListener('change', weatherForcastStatus);
//Solution 1:
function weatherForcastStatus() {
    const choice = selectOption.value;
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
    }

//Solution 2:    /*OR you can also do this way*/

    // if (choice === "sunny") {
    //     textUnder.textContent =
    //       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    //   } else if (choice === "rainy") {
    //     textUnder.textContent =
    //       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    //   } else if (choice === "snowing") {
    //     textUnder.textContent =
    //       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    //   } else if (choice === "overcast") {
    //     textUnder.textContent =
    //       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    //   } else {
    //     textUnder.textContent = "You haven't make a choice yet";
    //   }
    }
    //OR you can also do this SWITCH STATEMENT: 

//Solution 3: I just did this above :)))    
    /*switch (choice) {
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

//define variables
const themeChooser = document.querySelector(`select[id='theme-choice']`);
const htmlStyle = document.querySelector(`html`);
document.body.style.padding = "10px";
console.log(themeChooser.value);
//define function that work with variables
function themeSwitch(backgroundColor, textColor) {
  htmlStyle.style.backgroundColor = backgroundColor;
  htmlStyle.style.color = textColor;
}

/*

If you want to run some code when the page first loads, you can do that in jQuery
with this (you tagged your question with jQuery so you may as well use it):

$(document).ready(function() {
    // put your code here that runs when the page first loads
});

Or, you can do this in plain Javascript:

window.addEventListener("load", function() {
    // put your code here that runs when the page first loads
});

*/
window.addEventListener('load', () => {
  themeChooser.value === "black" ?
  themeSwitch('black', 'white') :
  themeSwitch('white','black');
})
//add changes when the event start
themeChooser.addEventListener('change', () => {
  themeChooser.value === "black" ?
  themeSwitch('black', 'white') :
  themeSwitch('white','black');
})

//ACTIVE LEARNING
console.log(`     ACTIVE LEARNING: A simple calendar`);
//Recode the example for better reviewing
//First, i declare the variables which are needed to affect the data outside the HTML page
const selectedMonth = document.querySelector(`select[id="month-selector"]`);
const monthName = document.querySelector(`h2[id="month-name"]`);
const listDays = document.querySelector(`ul[id="list-days"]`);

//test the variables
/* 
days.addEventListener('click', ()=> {
  console.log(2, days.value + "Haha");
})
monthName.addEventListener('click', ()=> {
  console.log(2, monthName.value + "Haha");
})
selectedMonth.addEventListener('change', () => {
  console.log(1, selectedMonth.value);
})
*/
//Second, i check if when the page load, the data may still the so they days have to correspond and display the data
if(selectedMonth.value) {
  dayClassify();
}

//onChange method when user change the month
selectedMonth.addEventListener('change', () => {
  dayClassify();
});

function dayClassify() {
  const choice = selectedMonth.value;
  let days = 30;
  if(choice === "January" ||
  choice === "March" ||
  choice === "May" ||
  choice === "July" ||
  choice === "August" ||
  choice === "October" ||
  choice === "December") {
    days = 31;
  } else if(choice === "February") {
    days = 28;
  }
    else if(choice === "Select the month") {
    days = 0;
  }
  createCalendar(days, choice);
}

//This function create the days of the month we've chosen
function createCalendar(days, selectedMonthName) {
  // Cách dùng insertBefore:
  /* const newP = document.createElement('p')
   newP.textContent = 'Days :';
   document.body.insertBefore(newP, listDays); */
  if(selectedMonthName === "Select the month") {
    monthName.innerHTML = "Please choose the month"
  } else {
    monthName.textContent = selectedMonthName;
  }
  listDays.innerHTML = '';
  
  // listDays.setAttribute('background-color', 'red'); 
  // => Testing attribute modification DOM breakpoint debug javascript
  for(let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.id = "listItem"
    listItem.textContent = i;
    listDays.appendChild(listItem);
    // listDays.remove();
    // => DOM change breakpoints: node removal
  }
}

//Active Learning: More color choices:
//This also resemble to the above example so I think it isn't need to practice again
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
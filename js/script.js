/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

var message = '';
var quotes;
var source;
var citation;
var Year;


var quoteList = [

     {quotes: 'GitHub and Visual Studio had a bad First Date', 
     source: "Me",
     Year: 2019}, 

    {quotes: 'WOOO!!', 
     source: "-Ellen, Queen of Durham",
     Year: 2018},

    {quotes: "Im your huckleberry", 
     source: "-Doc Holiday",
     citation: "Tombstone",
     Year: 1993},

    {quotes: "In a dark place we find oursleves,  and a little more knowledge lights our way.",
    source: '-Yoda'},

    {quotes: "No one likes a grumpy muffin.",
     source: '-Ellen, Queen of Durham',
     Year: 2019},

    {quotes: "Nothing will work unless you do", 
     source: 'Maya Angelou'},

    {quotes: "I learned that courage is not the absence of fear but the triumph over it",
     source: 'Nelson Mandela'},
]

function getRandomQuote () {

  var getRandomNumber = quoteList[Math.floor(Math.random() * quoteList.length)];
  return getRandomNumber;
 }
 getRandomQuote();
console.log(getRandomQuote());

function printQuote () {

    var HTMLString = '<p class = "qoute">' + getRandomQuote + '</p>';
    HTMLString += '<p class = "source"> + [quoteList].quotes' + '</p>';
    if ([quoteList].citation) {
        HTMLString += '<span class="citation">' + quotes[quoteList].citation + '</span>';
    }
    if ([quoteList].Year) {
        HTMLString += '<span class = "Year">' + quote[quoteList].Year + '</p>';
    }
    message += '<h2>' + getRandomQuote() + '</h2>';
 console.log(HTMLString);   
 return getRandomQuote();
}
printQuote();
console.log(printQuote());



function print(message) {
  var quoteBoxDiv = document.getElementById("quoteBox");
  quoteBoxDiv.innerHTML = message;
}

print(message);
document.write(getRandomQuote);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
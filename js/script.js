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

/*var message = '';
var quotes;
var source;
var citation;
var Year;*/


var quotes = [

     {quote: 'GitHub and Visual Studio had a bad First Date', 
     source: "Me",
     year: 2019}, 

    {quote: 'WOOO!!', 
     source: "-Ellen, Queen of Durham",
     year: 2018},

    {quote: "Im your huckleberry", 
     source: "-Doc Holiday",
     citation: "Tombstone",
     year: 1993},

    {quote: "In a dark place we find oursleves,  and a little more knowledge lights our way.",
    source: '-Yoda'},

    {quote: "No one likes a grumpy muffin.",
     source: '-Ellen, Queen of Durham',
     year: 2019},

    {quote: "Nothing will work unless you do", 
     source: 'Maya Angelou'},

    {quote: "I learned that courage is not the absence of fear but the triumph over it",
     source: 'Nelson Mandela'},
]

console.log(quotes);



function getRandomQuote () {

  var getRandomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  return getRandomNumber;
 }
 console.log(getRandomQuote());


function printQuote () {
  
    var displayRandomQuote = getRandomQuote(); 
    var HTMLString = '<p class = "quote">' + displayRandomQuote.quote + '</p>';
    HTMLString += '<p class = "source">' + displayRandomQuote.source;
    if (displayRandomQuote.citation) {
        HTMLString += '<span class="citation">' + displayRandomQuote.citation + '</span>';
    }
    if (displayRandomQuote.year) {
        HTMLString += '<span class = "year">' + displayRandomQuote.year + '</span> </p>';
    }
   // message += '<h2>' + displayRandomQuote + '</h2>';
   
 document.getElementById('quote-box').innerHTML = HTMLString;
}

/*printQuote();
return getRandomQuote();

function print(message) {
  var quoteBoxDiv = document.getElementById("quoteBox");
  quoteBoxDiv.HTMLString = message;
}

print(message);*/


document.getElementById('load-quote').addEventListener("click", printQuote, false);
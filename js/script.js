/* Fxn=Function
*/

var quotes = [

    {quote: 'WOOO!!', 
     source: "-Ellen, Queen of Durham",
     year: 2018,
     context: "Motivation"},

    {quote: "Im your huckleberry", 
     source: "-Doc Holiday",
     citation: "Tombstone",
     year: 1993,
     context:"Classic Western Movie"},

    {quote: "In a dark place we find oursleves,  and a little more knowledge lights our way.",
    source: '-Yoda, ',
    context: "Star Wars Movie"},

    {quote: "No one likes a grumpy muffin.",
     source: '-Ellen, Queen of Durham',
     year: 2019},

    {quote: "Nothing will work unless you do", 
     source: 'Maya Angelou'},

    {quote: "I learned that courage is not the absence of fear but the triumph over it",
     source: 'Nelson Mandela'},
]

console.log(quotes);

var intervalPrintID = setInterval(printQuote, 5000);
var intervalID = setInterval(getRandomQuote, 5000); 
//Interval timers above, no parameters included

function getRandomQuote () {

  var getRandomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  return getRandomNumber;
 }
 console.log(getRandomQuote());
//Function above pulls from the array, a random quote. It does not display it.//

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
    if (displayRandomQuote.context) {
        HTMLString += '<span class = "context">' + displayRandomQuote.context + '</span> </p>';
  }
   
 document.getElementById('quote-box').innerHTML = HTMLString;
}
/*Fxn above pulls random quote from first fxn and checks for 'citation' and 'year'. 
Then adds them to the string via the HTMLstring variable */



document.getElementById('load-quote').addEventListener("click", printQuote, false);
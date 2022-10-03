const quotes = [
{
    quote : "The best way to predict your future is to create it.",
    author :"Abraham Lincoln",
},
{
    quote : "The things that we love tell us what we are.",
    author :"St. Thomas Aquinas",
},
{
    quote : "The secret of getting ahead is getting started.",
    author :"Mark Twain",
},
{
    quote : "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author :"Robert Louis Stevenson",
},
{
    quote : " As soon as you truly commit to making something happen, the “how” will reveal itself.",
    author :"Tony Robbins",
},
{
    quote : "Forever – is composed of nows.",
    author :"Emily Dickinson",
},
{
    quote : "It is never too late to be what you might have been.",
    author :"George Eliot",
},

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
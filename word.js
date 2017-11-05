// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require("prompt");
// Using the require keyword lets us access all of the exports in our word.js file
var letter = require("./letter.js");

var wordSelection = ["trace scheduling", "fortran", "formatting objects processor", 
"fourier transform", "high level assembly", "instruction set architecture", 
"sparse conditional constant propagation", "design compiler"];

// randomized word chosen from wordOptons[]
var chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];

// number of "__ __"  so when I call placeHolder I can have it === "__"
var placeHolder = lettersInWord.length;

// split word and store in var
var lettersInWord = chosenWord.split("");

// constructor function used to create objects
function Word(chosenWord, lettersInWord) {
  this.chosenWord = chosenWord;
  this.lettersInWord = lettersInWord;
}

// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {
  // based on # of letters in correctWord.
for (var i = 0; i < lettersInWord.length; i++) {
  placeHolder.push("_");
  }
};

// module.exports is an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.
module.exports = wordSelection;
module.exports = Word;

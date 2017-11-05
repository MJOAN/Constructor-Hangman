// dependency for inquirer npm package
// access all of the exports in our word.js file
var inquirer = require("inquirer");
var prompt = require("prompt");
var word = require("./word.js");

var wordSelection = ["trace scheduling", "fortran", "formatting objects processor", 
"fourier transform", "high level assembly", "instruction set architecture", 
"sparse conditional constant propagation", "design compiler"];

// randomized word chosen from wordOptons[]
var chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];

// split word and store in var
var lettersInWord = chosenWord.split("");

// number of "__ __"  so when I call placeHolder I can have it === "__"
var placeHolder = lettersInWord.length;

// display "__" + letterGuessed correctly
var lettersWithPlacholders = []; 

// counts how many times 'guess a letter' question occurs
var numberOfGuesses = 25;

function Letter(chosenWord, lettersGuessed, placeHolder) {
  this.letterGuessed = letterGuessed,
  this.placeHolder = placeHolder,
  this.lettersWithPlacholders = lettersWithPlacholders
}

var startGame = function() {
// runs inquirer and asks the user a series of questions 
// replies are stored in variable answers inside .then statement
// run placeholder prototype function @ start of game "__ __ " 
  this.lettersInWord.placeHolder();  

    inquirer.prompt([
      {
      type: "input",
      message: 'Guess a letter!',
      validate: function(value) {
        if (isNaN(value) === true) {
            return true;
        }
          return false;
        }
      }, 
    ]).then(function(err, res) {
      // initializes the variable to be an object user answers to questions
      var letter = new Letter(res.letterGuessed);

    for (var i = 0; i < chosenWord.length; i++) {
      if (this.lettersInWord[i] === this.letter) {

      // letter match? then, set bool to TRUE
      this.letterGuessed = true;
      console.log("Your letter guess " + res.letterGuessed + " is correct!");

    } else {
      console.log("Your letter guess " + res.letterGuessed + " is not correct! Guess again!");
    }
  }

  // letter is indiced in chosenWord then loop through and populate 
  if (this.letterGuessed) {

    // Loop through the chosenWord which is all placeHolder 
    for (var j = 0; j < placeHolder.length; j++) {

      // Populate every instance of the letter
      if (this.chosenWord[j] === this.letter) {

        // set specific blank spaces to equal the correct letter if match
        this.placeHolder[j] = this.letter;
      }
    }
    // Log the current state of chosenWord
    console.log(letterAndPlacholderUpdated);
  }
      // add one to count to increment our recursive loop by one
      numberOfGuesses++;
      // run the askquestion function again - either end the loop or ask the questions again
      startGame();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
// call askQuestion to run our code
startGame();

 function endGame() {
 if (lettersInWord.toString() === placeHolder.toString()) {
    alert("You win! PLease play again!");
    // Restart the game
    startGame();

  } else if (numberOfGuesses === 0) {

    inquirer.prompt([
      {
      type: 'input',
      message: 'You are now all out of guesses. Would you like to play again?',
      name: "confirm",
      default: true
    },
  ])
    .then(function(err, res) {

    if (res.confirm) {
      console.log("\nGreat, a new hangman game will begin!\n");
      // Restart the game
      startGame();
    } 

    else {
      console.log("\nPlay again when you are ready!\n");
      }
    });
  }
}


module.exports = Letter;

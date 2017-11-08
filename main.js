// Using the require keyword lets us access all of the exports in our word.js file
var inquirer = require("inquirer");
var prompt = require("prompt");

var wordSelection = ["trace scheduling", "fortran", "formatting objects processor",
    "fourier transform", "high level assembly", "instruction set architecture",
    "sparse conditional constant propagation", "design compiler"
];
// randomized word chosen from wordOptons[]
var chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];

// blank space array  "__ __" to use in placeHolder();
var spaceHolder = [];

// split word and store in var
var lettersInWord = chosenWord.split("");

// display "__" + letterGuessed correctly
var lettersWithPlaceholders = [];

// counts how many times 'guess a letter' question occurs
var numberOfGuesses = 30;

// string for user guesses
var letterGuessed = "";

// letters in word length
var lettersInWordLength = lettersInWord.length;

// constructor function used to create objects
function Word(chosenWord, spaceHolder, lettersInWordLength) {
    this.chosenWord = chosenWord;
    this.spaceHolder = spaceHolder;
    this.lettersInWordLength = lettersInWordLength;
    this.lettersInWord = lettersInWord;
    this.letterGuessed = letterGuessed; 
};

// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {
    // based on # of letters in chosenWord.
    for (var i = 0; i < lettersInWordLength; i++) {
        spaceHolder.push("__");
        spaceHolder.toString();
    }
    console.log(spaceHolder.join(" ")); // supposed to 'join' the "__" in word array
};

var word = new Word(chosenWord, spaceHolder, lettersInWord);
// run placeholder prototype function to start game "__ __ " 
word.placeHolder();

var startGame = function() {
// runs inquirer and asks the user a series of questions 
// replies are stored in variable answers inside .then 
inquirer.prompt([{
  name: "start",
  type: "input",
  message: 'Guess a letter!',
  validate: function(value) {
      if (isNaN(value) === true) {
          return true;
      }
      return false;
  },
  }, ]).then(function(err, res) {

  console.log(res);
  // set user guess callback from result to variables letterGuessed
  word.letterGuessed = res, false;

  console.log(chosenWord);
  console.log(word.letterGuessed)
  console.log("test");
  console.log(word.lettersInWordLength);

// var checkLetterWithPlaceholder = function() {
for (var i = 0; i < word.lettersInWordLength; i++) {
    console.log("test");
    // if letterGuess is === to chosenword letter set to true
    if (word.lettersInWord[i] === word.letterGuessed) {
        console.log("test");
        // letter match? then, set boolean to true
        word.letterGuessed = true;
        // display message to user
        console.log("Your letter guess " + word.letterGuessed + " is correct!");
        console.log("test");
        startGame();

    } else {
        console.log("Your letter guess " + word.letterGuessed + " is incorrect!");
        console.log("test");
        numberOfGuesses--;
        startGame();
    }

// var replaceLetterWithPlaceholder = function() {
  if (word.letterGuessed) {
      // Loop through the word
      for (var j = 0; j < word.lettersInWordLength; j++) {
          if (word.lettersInWord[j] === word.letterGuessed) {
              // get letter + placehodler array and replace with letter guess when correctly matched
              word.spaceHolder[j] = word.letterGuessed;
              lettersWithPlaceholders = word.spaceHolder[j];
              console.log(lettersWithPlaceholders);
              console.log("test");
          } else {
              numberOfGuesses--;
              startGame();
            }
          };
        }; // end if letterGuessed
      }; // end for loop 
  }); // end startGame()
};

startGame();

var endGame = function() {

if (lettersInWord.toString() === lettersWithPlaceholders.toString()) {
    alert("You win! PLease play again!");
    // Restart the game
    startGame();

} else if (numberOfGuesses === 0) {
  // run inquirer to ask user if they want to start a new game after guesses run out
  inquirer.prompt([{
      type: 'input',
      message: 'You are now all out of guesses. Would you like to play again?',
      name: "confirm",
      default: true
  }, ])
  .then(function(err, res) {

      if (res.confirm) {
          console.log("\nGreat, a new hangman game will begin!\n");
          // Restart the game
          startGame();
      } else {
          console.log("\nPlay again when you are ready!\n");
      }
  });
  }
}
endGame();

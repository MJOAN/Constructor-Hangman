
// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require("prompt");
// Using the require keyword lets us access all of the exports in our word.js file
var word = require("./word.js");
var letter = process.argv[2];





// Grabs the letter information
if (process.argv[2]) {
  var letter = process.argv[2];
}

// Loop through word file in wordOptions [] and print out details
for (var letter in word) {
  // somehow turn randomized wordOptions array to __ __ __ __ __ __ [show/hide?]

  console.log(wordOptions[i].join('__');
}




// variable we will use to count how many times 'guess a letter' question occurs
var letterCount = 0;
// array in which we will store each of our new word objects
var wordArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked word array length
  if (count < wordArray.length) {
  
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
      type: "list",
      name: "letter",
      message: 'Guess a letter!',
      choices: ["__", "2", "3", "4"],
      validate: function(letter) {
        if (isNaN(letter) === false) {
            return true;
        }
          return false;
        }
      }, 
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var letterGuesses = new Word(answers.letter,answers.position);

      if (letterGuesses === wordArray[0]) {
        letterGuesses.push(wordArray);
        console.log(' ' + letterGuesses +  ' ');
      } 
      else {
        console.log('Guess again!');
      }

      // pushes newguy object into our array
      wordArray.push(letterGuesses);
      // add one to count to increment our recursive loop by one

      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < wordArray.length; x++) {
      wordArray[x].printInfo();
    }
  }
};

// call askQuestion to run our code
askQuestion();

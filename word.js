// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require("prompt");


var wordOptions = {
  words: ["engineering", "bluetooth", "electricity", "amperes", "electrons", "gate"]
};

// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.






// THIS IS THE OTHER OPTION: 

// constructor function used to create programmer objects
function Word(letter, position) {
  this.letter = letter;
  this.position = position;
}

// creates the printInfo method and applies it to all programmer objects
Word.prototype.printInfo = function() {
  console.log("__" + this.letter + "__" + this.position);
};




module.exports = wordOptions;
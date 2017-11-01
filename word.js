// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require("prompt");


// constructor function used to create programmer objects
function Word(letter, position) {
  this.letter = letter;
  this.position = position;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("__" + this.letter + "__" + this.position);
};


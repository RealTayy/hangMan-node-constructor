// Import Letter contruction function
var Letter = require('./Letter.js');

function Word(word) {
    // String value of word
    this.word = word;

    // Array of Letter objects
    this.letterArr = [];

    // Populates this.letterArr with Letter objects
    for (var i = 0; i < word.length; i++) {
        curLetter = word.charAt(i);
        this.letterArr.push(new Letter(curLetter));
    }

    // Returns true if all Letter objects in this.letterArr have a isGuessed value of true else returns false
    this.isWordGuessed = function () {
        for (var i = 0; i < this.letterArr.length; i++) {
            curLetter = this.letterArr[i];
            if (!curLetter.isGuessed) return false;
        }
        return true
    }

    // Takes a String as an argument and iterates through each Letter in this.letterArr and sets the isGussed value
    this.guessLetter = function (letterGuessed) {
        this.letterArr.forEach(function (letter) {
            letter.setIsGuessed(letterGuessed);
        });
    }

    // Print function for ez concatination <-- Probably spelled that wrong but WHATEVER FIGHT ME IF YOU GOT A PROBLEM BRUH
    this.toString = function () {
        var display = '';
        this.letterArr.forEach(function (letter) {            
            display += letter + " ";
        });
        return display;
    }
}

// Exports the Word constructor function
module.exports = Word;
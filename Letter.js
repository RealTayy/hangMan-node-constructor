function Letter(letter) {
    // Value of the Letter
    this.letter = letter;

    // Value of whether the Letter has been gussed or not
    this.isGuessed = false;

    // Setter for isGuessed value
    this.setIsGuessed = function (letterGuessed) {
        // If Letter has already been guessed return out of the function
        if (this.isGuessed) return;
        // If Letter has not been guessed checks if letterGuessed is a match to letter and sets correct value.
        if (letterGuessed.toLowerCase() === this.letter.toLowerCase()) this.isGuessed = true;
        else this.isGuessed = false ;
    }

    // If letter is a space then sets its isGuessed value to true automatically
    if (this.letter === ' ') this.isGuessed = true;
    
    // Print function for ez concatination <-- Probably spelled that wrong but WHATEVER FIGHT ME IF YOU GOT A PROBLEM BRUH    
    this.toString = function () {
        if (this.isGuessed) return this.letter;
        else return '_';
    }
}

// Exports the Letter contruction function
module.exports = Letter;
function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.isMatch = function (letterGuessed) {
        if (letterGuessed === letter) this.isGuessed = true;
        else this.isGuessed = false;
    }
    this.toString = function () {
        if (isGuessed) return letter;
        else return '_';
    }
}
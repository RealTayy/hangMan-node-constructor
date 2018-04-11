var Word = require('./Word.js');
var inquirer = require('inquirer');

var wordBank = {
    words: ['There is no cow level', 'These are not the droids you are looking for', 'I love lamp', 'Hold my beer', ],
    getWord() {
        var randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    }
}

function hangManGame() {
    this.curWord = new Word(wordBank.getWord());
    this.hasWon = false;
    this.hasLost = false;
    this.curIncorrect = 0;
    this.maxIncorrect = 8;
    this.lettersGuessed = [];
    this.checkWinOrLost = function () {
        if (this.curIncorrect === this.maxIncorrect) this.hasLost = true;
        if (this.curWord.isWordGuessed()) this.hasWon = true;
    }
    this.playRound = function () {
        console.log('\n' + this.curWord);
        console.log('Incorrect guesses remaining: ' + (this.maxIncorrect - this.curIncorrect));
        this.queryPlayerGuess();
    }
    this.runVictory = function () {
        console.log('WOWZA! You did it you won! The correct word was \'' + this.curWord.word + '\'')
        this.queryPlayAgain();
    }
    this.runLose = function () {
        console.log('OH NO! You lost :< This doesn\'t mean you aren\'t a smart person okay?')
        this.queryPlayAgain();
    }
    this.queryPlayerGuess = function () {
        var that = this;
        inquirer.prompt([
            {
                type: 'input',
                name: 'playerGuess',
                message: 'Please guess a letter!',
                validate: function (input) {
                    if (!/[a-zA-Z]/.test(input)) return 'Okay that\'s not a letter. You know a letter like from the alphabet?';
                    if (input.length != 1) return 'Like one letter... not ' + input.length + ' letters... You know the number after zero?';
                    if (that.lettersGuessed.includes(input)) return 'Yea you\'ve already guessed \'' + input + '\' before. Try a different letter';
                    return true;
                }
            }
        ]).then(function (answers) {
            that.lettersGuessed.push(answers.playerGuess);
            if (that.curWord.hasLetter(answers.playerGuess)) {
                console.log('\x1b[32m%s\x1b[0m%s', 'CORRECT! ', 'The letter \'' + answers.playerGuess.toLowerCase() + '\' is in the word!');
                that.curWord.guessLetter(answers.playerGuess);
            }
            else {
                console.log('\x1b[31m%s\x1b[0m%s', 'INCORRECT! ', 'The letter \'' + answers.playerGuess.toLowerCase() + '\' is NOT in the word!');
                that.curIncorrect++;
            };
            that.checkWinOrLost();
            if (that.hasWon) that.runVictory();
            else if (that.hasLost) that.runLose();
            else that.playRound();
        });
    }
    this.queryPlayAgain = function () {
        var that = this;
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'wantsToPlay',
                message: 'Would you like to play again?'
            }
        ]).then(function (answers) {
            if (answers.wantsToPlay) startNewGame();
            else console.log("Alright..! Thanks for playing!");
        })
    }

}

function startNewGame() {
    var curGame = new hangManGame();
    curGame.playRound()
}

startNewGame();
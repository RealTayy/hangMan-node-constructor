import { start } from 'repl';

var Word = require('./Word.js');
var inquirer = require('inequirer');

var wordBank = ['word zero', 'word one', 'word two'];

var wantsToPlay = true;

function getWord() {
    var randomIndex = Math.floor(Math.random * wordBank.length);
    return wordBank[randomIndex];
}

function startNewGame() {
    var curWord = getWord();
    console.log(curWord);
}

startNewGame();
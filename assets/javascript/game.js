//variables//

var gameWords = ["Prescott", "Witten"];
var gameLetters = gameWords[0].toUpperCase().split('')
var gamePlaceholders = [];
var lettersGuessed = [];
var lettersCorrect = [];


//create placeholders//
for (var i = 0; i < gameLetters.length; i++) {
    gamePlaceholders.push("_")
}

//populate current word with placeholders//
document.getElementById("currentWord").innerHTML = gamePlaceholders

//on key press//
document.onkeyup = function (event) {

    var userGuess = event.key.toUpperCase();

    var indexed = lettersGuessed.indexOf(userGuess)
    var indexedCorrect = lettersCorrect.indexOf(userGuess)

    var inWord = gameLetters.indexOf(userGuess)
    var isAlpha = function (ch) {
        return /^[A-Z]$/i.test(ch);
    }

    if (indexed < 0 && inWord < 0 && isAlpha(userGuess) === true) {
        lettersGuessed.push(userGuess);
    }

    if (indexedCorrect < 0 && inWord > -1) {
        lettersCorrect.push(userGuess);
    }


    for (var i = 0; i < gamePlaceholders.length; i++) {


        if (gameLetters[i] === userGuess) {
            gamePlaceholders[i] = userGuess;
            document.getElementById("currentWord").innerHTML = gamePlaceholders
        }
    };


    document.getElementById("guessedIncorrectly").innerHTML = lettersGuessed


};


//variables//

var gameWords = ["Prescott", "Witten"];
var gameLetters = gameWords[0].toUpperCase().split('')
var gamePlaceholders = [];
var guessesRemaining = 10;
var wins = 0;
var lettersGuessed = [];
var lettersCorrect = [];


//create placeholders//
for (var i = 0; i < gameLetters.length; i++) {
    gamePlaceholders.push("_")
}

//populate current word with placeholders//
document.getElementById("currentWord").innerHTML = gamePlaceholders.join("")

//populate initial wins//
document.getElementById("wins").innerHTML = wins;

//populate initial guesses//
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

//on key press//
document.onkeyup = function (event) {
    //variables//
    var userGuess = event.key.toUpperCase();
    var indexed = lettersGuessed.indexOf(userGuess)
    var indexedCorrect = lettersCorrect.indexOf(userGuess)
    var inWord = gameLetters.indexOf(userGuess)
    var isAlpha = function (ch) {
        return /^[A-Z]$/i.test(ch);
    }
    //push incorrect letters to incorrect div, change guesses remaining//
    if (indexed < 0 && inWord < 0 && isAlpha(userGuess) === true && guessesRemaining>0) {
        lettersGuessed.push(userGuess);
        guessesRemaining= guessesRemaining-1;
        document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
    }


    //push correct letters//
    if (indexedCorrect < 0 && inWord > -1 &&guessesRemaining>0) {
        lettersCorrect.push(userGuess);
    }

    //replace placeholders with correct letters//
    for (var i = 0; i < gamePlaceholders.length; i++) {
        if (gameLetters[i] === userGuess && guessesRemaining>0) {
            gamePlaceholders[i] = userGuess;
            document.getElementById("currentWord").innerHTML = gamePlaceholders.join("")
        }
    };

    document.getElementById("guessedIncorrectly").innerHTML = lettersGuessed
    
    //win counter//
    if(gamePlaceholders.indexOf("_")===-1){
        wins++
        document.getElementById("wins").innerHTML = wins
    }

    //stop when guessRemaining=0//
    if (guessesRemaining===0){
        alert("Game Over")
    }
};


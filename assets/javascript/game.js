var gameWords = ["Awuzie","Prescott", "Witten", "Touchback", "Bryant", "Bailey", "Field Goal", "Beasley", "Switzer", "Jerry's World", "Cheerleaders", "America's Team", "AT&T Stadium", "Feed Zeke", "Touchdown", "Defense"];
var gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
var wins = 0;
var guessesRemaining = 10;

function reset() {
gameWords.splice(gameWords.indexOf(gameWord),1);
console.log(gameWords);
gameWord=gameWords[Math.floor(Math.random()*gameWords.length)];
console.log(gameWord);
guessesRemaining=10;
lettersGuessed=[];
document.getElementById("guessedIncorrectly").innerHTML=lettersGuessed;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
gamePlaceholders=[];
var gameLetters = gameWord.toUpperCase().split('');
for (var i = 0; i < gameLetters.length; i++) {
    if (gameLetters[i] === " " || gameLetters[i] === "'" || gameLetters[i] === "&") {
        gamePlaceholders.push(gameLetters[i])
    }
    else {
        gamePlaceholders.push("_")
    }
};
document.getElementById("currentWord").innerHTML=gamePlaceholders.join("");
}

//variables//
var gameLetters = gameWord.toUpperCase().split('');
var gamePlaceholders = [];
var lettersGuessed = [];
var lettersCorrect = [];

//create placeholders//
for (var i = 0; i < gameLetters.length; i++) {
    if (gameLetters[i] === " " || gameLetters[i] === "'" || gameLetters[i] === "&") {
        gamePlaceholders.push(gameLetters[i])
    }
    else {
        gamePlaceholders.push("_")
    }
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
    var gameLetters = gameWord.toUpperCase().split('');
    var userGuess = event.key.toUpperCase();
    var indexed = lettersGuessed.indexOf(userGuess);
    var indexedCorrect = lettersCorrect.indexOf(userGuess);
    var inWord = gameLetters.indexOf(userGuess);
    var isAlpha = function (ch) {
        return /^[A-Z]$/i.test(ch);
    }
    lettersRemaining = 0;

    for (var k = 0; k < gamePlaceholders.length; k++) {
        if (gamePlaceholders[k] === "_") {
            lettersRemaining++
        }
    }

    console.log(gameWord)
    console.log(gameLetters)


    //push incorrect letters to incorrect div, change guesses remaining//
    if (indexed < 0 && inWord < 0 && isAlpha(userGuess) === true && guessesRemaining > 0 && lettersRemaining > 0) {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);
        guessesRemaining = guessesRemaining - 1;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("guessedIncorrectly").innerHTML = lettersGuessed
    }

    //push correct letters//
    if (indexedCorrect < 0 && inWord > -1 && lettersRemaining > 0) {
        lettersCorrect.push(userGuess);
    }

    //replace placeholders with correct letters//
    for (var i = 0; i < gamePlaceholders.length; i++) {
        if (gameLetters[i] === userGuess && guessesRemaining > 0 && lettersRemaining > 0) {
            gamePlaceholders[i] = userGuess;
            document.getElementById("currentWord").innerHTML = gamePlaceholders.join("")
        }
    };

    //game over//
    if (guessesRemaining === 0) {
        alert("Game over!");
    }

    //win round//
    if (gamePlaceholders.indexOf("_") === -1 && lettersRemaining > 0) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        reset();
    
    //win game//
    if(wins===10){
        alert("You win!");
    }
       
};
};

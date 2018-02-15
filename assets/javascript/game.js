//global variables//

var gameWords = ["Prescott", "Witten"];
var lettersGuessed = [];

//on key press//
document.onkeyup = function (event) {

    var userGuess = event.key.toUpperCase();
     
    var indexed = lettersGuessed.indexOf(userGuess)
    
    if (indexed<0){
        lettersGuessed.push(userGuess);
    }
   
    
   
    document.getElementById("currentWord").innerHTML = '__    '.repeat(gameWords[0].length)
   
    document.getElementById("guessedIncorrectly").innerHTML=lettersGuessed 
        

};


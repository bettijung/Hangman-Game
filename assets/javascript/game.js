// GLOBAL VARIABLES 
// ==================================================================================================

    var wordsList = ["emma", "olivia", "ava", "sophia", "isabella", "mia", "charlotte", "abigail", "emily", "harper", "noah", "liam", "william", "mason", "james", "benjamin", "jacob", "michael", "elijah", "ethan", "cora", "amelia", "charlotte", "isla", "maia", "aurora", "amara", "ava", "atticus", "asher", "jack", "theodore", "jasper", "milo", "oliver", "silas", "henry", "wyatt", "riley", "zoey", "natalie", "andrew", "luke", "dylan"];
    var chosenWord = "";
    var lettersInChosenWord = [];
    var numBlanks = 0;
    var blanksAndSuccesses = [];
    var wrongGuesses = [];

    // Game counters
    var winCounter = 0;
    var lossCounter = 0;
    var numGuesses = 9;

// FUNCTIONS 
// =========================================================================================

    // Start and restart the game
    function startGame() {
        numGuesses = 9;

        chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        lettersInChosenWord = chosenWord.split("");
        numBlanks = lettersInChosenWord.length;

        console.log(chosenWord);

        blanksAndSuccesses = [];
        wrongGuesses = [];

        for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");
        }

        console.log(blanksAndSuccesses);

        document.getElementById("guesses-left").innerHTML = numGuesses;
        document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    }

    // Check comparisons for matches
    function checkLetters(letter) {

        var letterInWord = false;

        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
            letterInWord = true;
            }
        }

        if (letterInWord) {
            for (var j = 0; j < numBlanks; j++) {
                if (chosenWord[j] === letter) {
                    blanksAndSuccesses[j] = letter;
                }
            }
            console.log(blanksAndSuccesses);
        }
        else {
            wrongGuesses.push(letter);
            numGuesses--;
        }
    }

    function roundComplete() {

        // Update wins, losses, and guesses  left
        console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

        document.getElementById("guesses-left").innerHTML = numGuesses;
        document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

        if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
            winCounter++;
            alert("You win!");

            document.getElementById("win-counter").innerHTML = winCounter;
            startGame();
        }

        else if (numGuesses === 0) {
            lossCounter++;
            alert("You lose");

            document.getElementById("loss-counter").innerHTML = lossCounter;
            startGame();
        }

    }

// MAIN PROCESS
// ==================================================================================================

// Starts Game 
startGame();

// Then initiate  function for capturing key clicks
document.onkeyup = function(event) {
  // Converts  key clicks to lowercase letters
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};

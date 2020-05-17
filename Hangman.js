// HANGMAN

// In this exercise you will create you own Hangman game. For more info on the game, visit: https://en.wikipedia.org/wiki/Hangman_(game)
// Flow of the game:
// 1. Choose a random word from a list of 10 predefined words.
// 2. Ask the user how many chances he/she wants to be given to guess the word. (Bonus Points: actually draw the individual parts of a hangman --> each part = 1 chance)
// 3. Ask the user for a letter.
// --> what are all possible cases of user input and what will be the effect of that input on the game?
// 4. Success message if the user guesses the word in the previously selected amount of guesses. Option to retry if he/she fails.


// Rules:
// 1. Make it look nice! (Inspiration: image on the Wikipedia page
// 2. Submit assignment as repo via Github (including Readme with explanation, proper folder structure etc.)
// 3. Save progress after each coding session with a commit.
let game;

function startGame() {
    game = new Game();
    game.startGame();
}

function checkLetter() {
    game.checkLetter();
}

function resetGame() {
    game.resetGame();
}

function testHangman() {
    let testgame = new Game();
    testgame.testHangman();
}

class Game {
    constructor() {
        this.usedLetters = [];
        this.word = "";
        this.letter = "";
        this.wordUnderscore = "";
        this.chances = null;
        this.hangman = document.getElementById("hangman");
    }

    startGame() {
        this.chances = document.getElementById("chances").valueAsNumber;
        this.word = this.selectWord();
        this.usedLetters.length = 0;
        this.clear("word-field");
        this.clear("used-letters");
        this.clear("messages");
        this.hangman.style.backgroundImage = "url('Images/hangman_start.jpg')";
        if (this.chances > 0) {
            this.wordUnderscore = "";
            for (let i = 0; i < this.word.length; i++) {
                this.wordUnderscore += "_";
            }
            this.addContent("word-field", this.wordUnderscore);
            this.showSubmit = document.getElementById("submit")
            this.showSubmit.style.display = "inline";
        }
        else {
            this.clear("messages");
            this.addContent("messages", "Please choose a chance");
        }
    }

    checkLetter() {
        this.letter = document.getElementById("letter-submitted").value.toUpperCase();
        this.clear("messages");
        if (this.letter.match(/([A-Z])$/)) {
            console.log(this.letter + " has been entered");
            if (this.usedLetters.includes(this.letter)) {
                this.clear("messages");
                this.addContent("messages", "This letter has been used before, please choose a new one");
                console.log("Used letter")
            }
            else {
                this.usedLetters.push(this.letter);
                this.addLetterBox("used-letters", this.letter)
                this.containsLetter();
            }
        }
        else {
            this.addContent("messages", "Please enter a letter");
        }
    }

    containsLetter() {
        if (this.word.includes(this.letter) === true) {
            for (let j = 0; j < this.word.length; j++) {
                if (this.word[j] === this.letter) {
                    this.wordUnderscore = this.replaceAt(this.wordUnderscore, j, this.letter)
                    this.addContent("messages", "Great, keep on going!");
                    this.addContent("word-field", this.wordUnderscore);
                    this.checkWin();
                }
            }
        }
        else {
            this.addContent("messages", "What a pity. Keep on trying!");
            this.chances--;
            this.changeHangman(this.chances);
            if (this.chances === 0) {
                this.addContent("messages", "You lost! The word was " + this.word + ". Try again.");
                this.disappearSubmit = document.getElementById("submit")
                this.disappearSubmit.style.display = "none";
            }
        }
    }

    selectWord() {
        this.words = ["Food", "freedom", "approach", "xylophone", "truck", "trainstation", "car", "combination", "desoxyribonucleic", "lifegoal", "warzone", "virologist", "accidentally", "heaven", "snowboarding", "gryffindor", "shipwreck", "beer", "plagiarism", "homeoffice"];
        this.n = (Math.floor(Math.random() * 20));
        this.selectedWord = this.words[this.n].toUpperCase();
        return this.selectedWord;
    }

    changeHangman() {
        switch (this.chances) {
            case 1: hangman.style.backgroundImage = "url('Images/hangman1.jpg')";
                break;
            case 2: hangman.style.backgroundImage = "url('Images/hangman2.jpg')";
                break;
            case 3: hangman.style.backgroundImage = "url('Images/hangman3.jpg')";
                break;
            case 4: hangman.style.backgroundImage = "url('Images/hangman4.jpg')";
                break;
            case 5: hangman.style.backgroundImage = "url('Images/hangman5.jpg')";
                break;
            case 6: hangman.style.backgroundImage = "url('Images/hangman6.jpg')";
                break;
            case 7: hangman.style.backgroundImage = "url('Images/hangman7.jpg')";
                break;
            case 8: hangman.style.backgroundImage = "url('Images/hangman8.jpg')";
                break;
            case 9: hangman.style.backgroundImage = "url('Images/hangman9.jpg')";
                break;
        }
    }

    checkWin() {
        if (this.wordUnderscore.includes("_") === false) {
            this.addContent("messages", "You won! Congratulations");
            this.disappearSubmit = document.getElementById("submit")
            this.disappearSubmit.style.display = "none";
        }
    }

    addContent(id, message) {
        this.textBox = document.getElementById(id);
        this.textBox.innerHTML = message;
    }

    addLetterBox(id, message) {
        this.letterBox = document.getElementById(id);
        this.letterBox.innerHTML += message;
    }

    replaceAt(s, index, character) {
        return s.substr(0, index) + character + s.substr(index + 1)
    }

    clear(element) {
        this.elemClear = document.getElementById(element);
        this.elemClear.innerHTML = "";
    }

    resetGame() {
        this.clear("word-field");
        this.clear("used-letters");
        document.getElementById("chances").value = "";
        document.getElementById("letter-submitted").value = "";
        this.clear("messages");
        this.hangman.style.backgroundImage = "url('Images/hangman_start.jpg')";
        this.disappearSubmit = document.getElementById("submit")
        this.disappearSubmit.style.display = "none";
    }

    testHangman() {
        //Test 1: Winning the game?
        this.wordUnderscore = "Halloween";
        this.checkWin();
        console.log(document.getElementById("messages").innerHTML)
        if (document.getElementById("messages").innerHTML === "You won! Congratulations") {
            console.log("Test 1 was successful");
        }
        else {
            console.log("Test 1 failed");
        }

        //Test 2: Does the Hangman picture change according to chances?
        this.chances = 3;
        this.changeHangman();
        if (document.getElementById("hangman").style.backgroundImage === 'url("Images/hangman3.jpg")') {
            console.log("Test 2 was successful");
        }
        else {
            console.log("Test 2 failed");
        }

        // Test 3: Is it a word?
        this.testWord = this.selectWord();
        if (typeof this.testWord === "string") {
            console.log("Test 3 was successful");
        }
        else {
            console.log("Test 3 failed")
        }

        // Test 4: Is the letter a part of the word?
        this.letter = "Z";
        this.word = "TESTEDASSPIEL"
        this.chances = 5;
        this.containsLetter();
        if (this.chances === 4) {
            console.log("Test 4 was successful")
        }
        else {
            console.log("Test 4 failed");
        }

        // Test 5: Was a letter entered?
        this.checkLetter();
        if (document.getElementById("messages").innerHTML === "Please enter a letter") {
            console.log("Test 5 was successful");
        }
        else {
            console.log("Test 5 failed");
        }
    }
}


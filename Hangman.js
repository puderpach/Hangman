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

let usedLetters = [];
let word = "";
let letter = "";
let wordUnderscore = "";
let chances = null;
let hangman = undefined;    

function startGame() {
    chances = document.getElementById("chances").value;
    word = selectWord();
    usedLetters.length = 0;
    clear("word-field");
    clear("used-letters");
    clear("messages");

    if (chances > 0) {
        changeHangman(chances);
        wordUnderscore = "";
        for (let i = 0; i < word.length; i++) {
            wordUnderscore += "_";
        }
        console.log(wordUnderscore);
        addContent("word-field", wordUnderscore);
        let showSubmit = document.getElementById("submit")
        showSubmit.style.display = "inline";
    }
    else {
        clear("messages");
        addContent("messages", "Please choose a chance");
    }
}

function changeHangman(chances) {
    hangman = document.getElementById("hangman");
    switch (chances) {
        case "1": hangman.style.backgroundImage = "url('Images/hang8.jpg')";
            break;
        case "2": hangman.style.backgroundImage = "url('Images/hang7.jpg')";
            break;
        case "3": hangman.style.backgroundImage = "url('Images/hang6.jpg')";
            break;
        case "4": hangman.style.backgroundImage = "url('Images/hang5.jpg')";
            break;
        case "5": hangman.style.backgroundImage = "url('Images/hang4.jpg')";
            break;
        case "6": hangman.style.backgroundImage = "url('Images/hang3.jpg')";
            break;
        case "7": hangman.style.backgroundImage = "url('Images/hang2.jpg')";
            break;
        case "8": hangman.style.backgroundImage = "url('Images/hang1.jpg')";
            break;
    }
}

function clear(element) {
    let elemClear = document.getElementById(element);
    elemClear.innerHTML = "";
    console.log(element + " has been cleared")
}

function selectWord() {
    let words = ["freedom", "xylophone", "trainstation", "combination", "deoxyribonucleic", "virologist", "accidentally", "gryffindor", "shipwreck", "plagiarism"];
    let n = (Math.floor(Math.random() * 10));
    let selectedWord = words[n].toUpperCase();
    return selectedWord;
}

function addContent(id, message) {
    let textBox = document.getElementById(id);
    textBox.innerHTML = message;
}

function addLetterBox(id, message) {
    let letterBox = document.getElementById(id);
    letterBox.innerHTML += message;
}

function checkLetter() {
    letter = document.getElementById("letter-submitted").value.toUpperCase();
    clear("messages");
    if (letter.match(/([A-Z])$/)) {
        console.log(letter + " has been entered");
        if (usedLetters.includes(letter)) {
            clear("messages");
            addContent("messages", "This letter has been used before, please choose a new one");
            console.log("Used letter")
        }
        else {
            usedLetters.push(letter);
            console.log("New letter entered");
            addLetterBox("used-letters", letter)
            containsLetter();
        }
    }
    else {
        addContent("messages", "Please enter a letter");
    }
}

function containsLetter() {
    console.log(word);
    if (word.includes(letter) === true) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                wordUnderscore = replaceAt(wordUnderscore, j, letter)
                addContent("messages", "The letter was part of the word, keep on going!");
                addContent("word-field", wordUnderscore);
            }
        }
    }
    else {
        addContent("messages", "What a pity. Keep on trying!");
        chances--;
        changeHangman(chances);
    }
}

function replaceAt(s, index, character) {
    return s.substr(0, index) + character + s.substr(index + 1)
}
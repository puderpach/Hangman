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


function startGame() {
    const hangman = document.getElementById("hangman");
    const chances = document.getElementById("chances").value;
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

function selectWord() {
    let words = ["freedom", "xylophone", "trainstation", "combination", "deoxyribonucleic", "virologist", "accidentally", "gryffindor", "shipwreck", "plagiarism"];
    let n = (Math.floor(Math.random() * 10) + 1);
    let selectedWord = words[n - 1];
    return selectedWord;
}

function addContent() {
    let textBox = document.getElementById("messages");
    textBox.innerHTML += "Button clicked version 2<br>";
}
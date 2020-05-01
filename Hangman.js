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

let words = ["freedom", "xylophone", "trainstation", "combination", "deoxyribonucleic", "virologist", "accidentally", "gryffindor", "shipwreck", "plagiarism"]

function addContent(text, element) {
    let textBox = document.getElementById(element);
    let addedText = document.createTextNode(text);
    textBox.appendChild(addedText);
}

addContent("pen", "messages");
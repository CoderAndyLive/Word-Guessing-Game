let words = ["hello", "world", "javascript", "programming", "computer", "puzzle", "challenge", "brainstorm", "logic", "solution", "mystery", "decipher", "encrypt", "keyboard", "language"]; 
let currentWord;
let scrambledWord;
let usedReshuffle = false; // Track if reshuffle has been used




function startGame() {
    chooseNewWord(); // Start with a word
    usedReshuffle = false; // Reset reshuffle status

}

function chooseNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById("scramble").textContent = scrambledWord;
    document.getElementById("guessInput").value = ""; // Clear input field
    usedReshuffle = false; // Reset reshuffle status

}

function scrambleWord(word) {
    let wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) { // Fisher-Yates Shuffle
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
}


function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");

    if (guess.toLowerCase() === currentWord) {
        result.textContent = "Correct!";
        chooseNewWord(); // Generate a new word
    } else {
        result.textContent = "Nope, try again.";
    }
}
function reshuffleWord() {
    if (usedReshuffle) {
        document.getElementById("result").textContent = "You've already used the reshuffle!";
        return;
    }

    scrambledWord = scrambleWord(currentWord); 
    document.getElementById("scramble").textContent = scrambledWord;
    usedReshuffle = true;
}

// Start the game on page load
startGame();

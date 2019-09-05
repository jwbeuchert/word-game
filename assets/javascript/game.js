let correct = 0;
let incorrect = 0;
let guessesLeft = 13;
let guessesSoFar = [];
let pyschicChoice = "";
let userGuess = "";

let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];



let pyschic = () => {
    pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


}

let resetGame = () => {
    guessesLeft = 13;
    guessesSoFar = [];
    pyschic();
};




document.onkeyup = (event) => {

    userGuess = event.key.toLowerCase();

    pyschic();

    if (userGuess == pyschicChoice) {
        correct++;
        alertWin();
    }
    if (userGuess != pyschicChoice) {
        guessesLeft--;
        guessesSoFar.push(userGuess);




        let html =
            "<p>Guesses Left </p>" +
            "<p>" + guessesLeft + "</p>" +
            "<p>Letters Guessed</p>" +
            "<p>" + guessesSoFar + "</p>" +
            "<br>" +
            "<p>Correct </p>" +
            "<p>" + correct + "</p>" +
            "<p>Incorrect </p>" +
            "<p>" + incorrect + "</p>";

        document.querySelector("#game_output").innerHTML = html;

        if (guessesLeft === 0) {
            incorrect++;
            alertLoss();
        }
    }

};

let alertWin = () => {
    alert("You guessed correct! " + pyschicChoice + ".");
    resetGame();
};

let alertLoss = () => {
    alert("That was not correct, I was actually thinking of! " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
    resetGame();
};
// Global Variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var psychicsChoice = "";
var userGuess = "";

// array of all the letters in the alphabet
var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
			];



// Randomly chooses a letter from the alphabet array. This is the psychic's choice.

var psychic = () =>  {
	psychicsChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	userGuess = event.key.toLowerCase();
	if(alphabet.indexOf(userGuess)===-1) 
	
		{
		alert("Please enter letters only!")
		
	}

};

// Resets game 
var resetGame = () => {
	guessesLeft = 10;
	guessesSoFar = [];
	psychic();
};

// Grabs user input
document.onkeyup = (event) => {

	psychic();

			if (userGuess === alphabet) {
		wins++;
		alertWin();
	} 
	if (userGuess != alphabet) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	
// Displays it on the page
	var html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Your Guesses So Far</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Wins </p>" + 
		"<p>"+ wins + "</p>" +
		"<p>Losses </p>" + 
		"<p>"+ losses + "</p>";

	
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		losses++;
		alertLoss();
		}
	}

};


var alertWin = () => {
	alert("You Win! " + psychicsChoice + ".");
	resetGame();
};

var alertLoss = () => {
	alert("You Lose! "+ " I Guessed " + psychicsChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};
// Generate a random number between 1 and 100.
const randomNumber = Math.floor(Math.random() * 100) + 1; // Adjusted to include 1-100

// NUMBER OF ROUNDS: Record the turn number the player is on. Start it on 1.
const playerRounds = document.getElementById('rounds');
let rounds = 1; // Initialize to 1.
playerRounds.innerHTML = `rounds: ${rounds}` 

// GETTING THE VALUE THE USER INPUTED
const userInput = document.getElementById('userInput');

// SUBMIT BUTTON
const submitBtn = document.getElementById('submit-btn');

// RESULT
let resultMessage = document.getElementById('result');

// GAME RESET
const resetGame = document.getElementById('reset');

// shows the previous guesses
const previousInput = document.getElementById('prevInput');
 
// IMAGES
const blueImage = document.getElementById('blue-bg')
const redImage = document.getElementById('red-bg')
const pinkImage = document.getElementById('pink-bg')

// Define a boolean flag to track the game state
let gameOver = false;

// CLICKING THE BUTTON
submitBtn.addEventListener('click',  () => {
  if (gameOver) {
    return; // Exit the function if the game is already over
  }
  // CAPTURING THE INPUT VALUE: Parse the user's input as a floating-point number.
  const guess = parseFloat(userInput.value);

  // Check whether the guess is correct.
  if (guess === randomNumber) {
    resultMessage.innerText = 'Congratulations You Won';
    submitBtn.disabled = true; // Stop the player from entering more guesses.
  } 
  else if (rounds >= 5){
    pinkImage.style.visibility = 'visible';
    blueImage.style.visibility = 'hidden';
   

  }
  else if (rounds >= 10) {
    resultMessage.innerText = 'Game Over';
    // submitBtn.disabled = true; // Game over, stop the player from entering more guesses.
    redImage.style.visibility = 'visible';
    blueImage.style.visibility = 'hidden';
  } 
  else if (guess > randomNumber){
    resultMessage.innerText = 'You are way too high';
    userInput.value = ''; // Clear the input field for the next guess.

    // Record the previous guess.
    previousInput.innerText += ` ${guess},`;

    rounds++; // Increment the turn number.
    playerRounds.innerHTML = rounds; // Update the displayed round count.
  }
  else if (guess < randomNumber){
    resultMessage.innerText = 'You are way too low';
    userInput.value = ''; // Clear the input field for the next guess.

    // Record the previous guess.
    previousInput.innerText += ` ${guess},`;

    rounds++; // Increment the turn number.
    playerRounds.innerHTML = rounds; // Update the displayed round count.
  }
 
  
});
submitBtn()

// RESET BUTTON
resetGame.addEventListener('click', () => {
  userInput.value = ''; // Clear the input field.
  rounds = 1; // Reset the turn number.
  playerRounds.innerHTML = rounds;
  resultMessage.innerText = ''; // Clear the result message.
  submitBtn.disabled = false; // Re-enable the submit button.
  previousInput.innerText = `Your previous guesses: `;
  blueImage.style.visibility = 'visible';
  redImage.style.visibility = 'hidden';
  pinkImage.style.visibility = 'hidden';
});

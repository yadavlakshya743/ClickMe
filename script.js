// Variables to keep track of the score and time left
var score = 0; // Starting score is 0
var timeLeft = 10; // Starting time is 10 seconds
var timerInterval; // This will hold the timer
var gameActive = true; // A flag to check if the game is still running

// Function to increase the score when the "Click Me!" button is clicked
function clickMe() {
  if (gameActive) { // Only increase the score if the game is active
    score = score + 1; // Add 1 to the score
    document.getElementById("scoreDisplay").innerText = score; // Update the score on the screen
  }
}

// Function to start the game
function startGame() {
  score = 0; // Reset the score to 0
  timeLeft = 10; // Reset the time to 10 seconds
  gameActive = true; // Set the game as active
  document.getElementById("scoreDisplay").innerText = score; // Show the reset score
  document.getElementById("timeDisplay").innerText = timeLeft; // Show the reset time
  document.getElementById("clickButton").disabled = false; // Enable the "Click Me!" button
  document.getElementById("gameOverMessage").style.display = "none"; // Hide the "Game Over" message

  // Start the countdown timer
  timerInterval = setInterval(function() {
    timeLeft = timeLeft - 1; // Decrease the time by 1
    document.getElementById("timeDisplay").innerText = timeLeft; // Update the time on the screen

    // If time runs out, stop the game
    if (timeLeft === 0) {
      clearInterval(timerInterval); // Stop the timer
      gameActive = false; // Set the game as inactive
      document.getElementById("clickButton").disabled = true; // Disable the "Click Me!" button
      document.getElementById("gameOverMessage").style.display = "block"; // Show the "Game Over" message
    }
  }, 1000); // Run the code inside this function every 1 second (1000 milliseconds)
}

// Function to restart the game when the "Restart" button is clicked
function restartGame() {
  clearInterval(timerInterval); // Stop the current timer
  startGame(); // Start a new game
}

// Add event listeners to the buttons
document.getElementById("clickButton").addEventListener("click", clickMe); // Run clickMe when "Click Me!" is clicked
document.getElementById("restartButton").addEventListener("click", restartGame); // Run restartGame when "Restart" is clicked

// Start the game when the page loads
startGame();

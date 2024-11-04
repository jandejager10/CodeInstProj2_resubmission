// Function to update and save the high score
function saveHighScore(score) {
    const highScore = localStorage.getItem('highScore') || 0;
    if (score > highScore) {
        localStorage.setItem('highScore', score);
        alert(`New high score: ${score}`);
    }
}

// Function to retrieve and display the high score
function displayHighScore() {
    const highScore = localStorage.getItem('highScore') || 0;
    document.getElementById('highScore').textContent = `High Score: ${highScore}`;
}

// Call displayHighScore() to update the UI with the saved high score when the page loads
window.onload = function() {
    displayHighScore();
};

// localStorage
function saveGameState(attempts, matches, cardStates) {
    const gameState = {
        attempts: attempts,
        matches: matches,
        cardStates: cardStates  // This could be an array of card states, e.g., flipped or unflipped
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const gameState = JSON.parse(localStorage.getItem('gameState'));
    if (gameState) {
        // Apply saved data to the game
        attempts = gameState.attempts;
        matches = gameState.matches;
        cardStates = gameState.cardStates;
        updateGameUI();
    }
}

// Clear game state on game reset
function resetGameState() {
    localStorage.removeItem('gameState');
}

// autoSave
window.addEventListener('beforeunload', () => {
    saveGameState(attempts, matches, cardStates);
});

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
    try {
        const gameState = JSON.parse(localStorage.getItem('gameState'));
        if (gameState && gameState.attempts != null && gameState.matches != null && Array.isArray(gameState.cardStates)) {
            // Apply saved data to the game
            attempts = gameState.attempts;
            matches = gameState.matches;
            cardStates = gameState.cardStates;
        }
    } catch (error) {
        console.error('Failed to load game state:', error);
        resetGameState();
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
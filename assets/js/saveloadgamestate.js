// Function to save and load the game state
function saveGameState() {
    const gameState = {
        attempts: attempts,
        matches: matches,
        cardStates: cardStates
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

function resetGameState() {
    localStorage.removeItem('gameState');
}

// Automatically save the game state when the page is unloaded
window.addEventListener('beforeunload', saveGameState);

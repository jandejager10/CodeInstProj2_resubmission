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
    const highScore = Number(localStorage.getItem('highScore')) || 0;

    document.getElementById('highScore').textContent = `High Score: ${highScore}`;
}

// Call displayHighScore() to update the UI with the saved high score when the page loads
window.onload = function() {
    displayHighScore();
};

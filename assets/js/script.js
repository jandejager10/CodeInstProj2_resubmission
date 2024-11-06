/* esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gameGrid');
    const statusText = document.getElementById('statusText');
    let attempts = 0;
    let matches = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let cardStates = []; // Array to hold the state of each card
    let startTime; // To track the start time of the game
    let endTime; // To track the end time of the game

    function createCard(cardName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = cardName;
        cardElement.addEventListener('click', flipCard);
        cardElement.style.backgroundImage = `url('assets/img/${cardName}.webp')`; // Ensure this path is correct
        return cardElement;
    }

    function flipCard() {
        if (lockBoard || this.classList.contains('flipped')) return;

        this.classList.add('flipped');
        cardStates.push({ name: this.dataset.name, flipped: true }); // Save card state

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        matches++;
        attempts++;
        updateStatusText();
        if (matches === 8) { // Assuming there are 8 pairs
            endGame();
        }
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1500);
        attempts++;
        updateStatusText();
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function updateStatusText() {
        statusText.textContent = `Attempts: ${attempts} | Matches: ${matches}`;
        saveGameState(attempts, matches, cardStates); // Save game state
    }

    function endGame() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds
        const score = calculateScore(timeTaken, attempts);
        saveHighScore(score); // Save high score based on score calculation
        alert(`Game Over! Your score: ${score}.`);
        resetGame(); // Reset the game after showing the score
    }

    function calculateScore(timeTaken, attempts) {
        const matchPoints = matches * 100;                 // 100 points per match
        const attemptBonus = Math.max(0, 50 - attempts);   // Small bonus, with a max of 50 points for minimal attempts
        const timePenalty = Math.floor(timeTaken / 5);     // Deduct 1 point for every 5 seconds
    
        // Final score calculation
        return matchPoints + attemptBonus - timePenalty;
    }
    

    // To reset the game
    function resetGame() {
        grid.innerHTML = '';
        attempts = 0;
        matches = 0;
        cardStates = []; // Reset card states
        resetGameState(); // Clear saved game state
        initGame();
    }

    // Initialize game
    function initGame() {
        const cardNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
        const deck = [...cardNames, ...cardNames].sort(() => Math.random() - 0.5).map(createCard);
        deck.forEach(card => {
            card.classList.remove('flipped');
            grid.appendChild(card);
        });
        updateStatusText();
        loadGameState(); // Load saved game state if available
        startTime = new Date(); // Start the timer
    }

    initGame();
    // Event listener for the reset button
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

// Show instructions function
function showInstructions() {
    alert('Match cards with identical symbols. Click to flip a card, find its match to keep it open. Match all pairs to win.');
}

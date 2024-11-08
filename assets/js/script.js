/* esversion: 6 */
// Define variables globally to make them accessible in saveloadgamestate.js
let attempts = 0;
let matches = 0;
let cardStates = []; // Array to hold the state of each card
let level = 1;  // Starting level
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let startTime;

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gameGrid');
    const statusText = document.getElementById('statusText');

    // Adjust grid layout based on level
    function setGridSize(level) {
        if (level === 1) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (level === 2) {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        } else {
            grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }
    }

    function createCard(cardName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = cardName;
        cardElement.addEventListener('click', flipCard);
        cardElement.style.backgroundImage = `url('assets/img/${cardName}.webp')`;
        return cardElement;
    }

    function flipCard() {
        if (lockBoard || this.classList.contains('flipped')) return;

        this.classList.add('flipped');
        cardStates.push({ name: this.dataset.name, flipped: true });

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
        saveGameState(); // Save updated game state
        const requiredMatches = level === 1 ? 2 : level === 2 ? 3 : 8;
        if (matches === requiredMatches) {
            endLevel();
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
        saveGameState(); // Save updated game state
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function updateStatusText() {
        statusText.textContent = `Attempts: ${attempts} | Matches: ${matches}`;
    }

    function endLevel() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds
        const score = calculateScore(timeTaken, attempts);
        saveHighScore(score); // Save high score if applicable
        alert(`Level ${level} Complete! Your score: ${score}`);
        level++;
        resetGame(); // Start the next level
    }

    function calculateScore(timeTaken, attempts) {
        const matchPoints = matches * 100;                 // 100 points per match
        const attemptBonus = Math.max(0, 50 - attempts);   // Small bonus, with a max of 50 points for minimal attempts
        const timePenalty = Math.floor(timeTaken / 5);     // Deduct 1 point for every 5 seconds

        return matchPoints + attemptBonus - timePenalty;
    }

    function resetGame() {
        grid.innerHTML = '';
        attempts = 0;
        matches = 0;
        cardStates = [];
        resetGameState(); // Clear saved game state
        initGame();
    }

    // Helper function to randomly select a subset of pairs from available card names
    function getRandomPairs(numPairs) {
        const cardNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
        const shuffled = cardNames.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numPairs);
    }

    // Initialize game with level-based grid and pairs
    function initGame() {
        let numPairs;

        // Determine the number of pairs based on the level
        if (level === 1) {
            numPairs = 2; // 2 pairs (4 cards) for a 2x2 grid
        } else if (level === 2) {
            numPairs = 3; // 3 pairs (6 cards) for a 3x2 grid
        } else {
            numPairs = 8; // 8 pairs (16 cards) for a 4x4 grid
        }

        // Set the grid size based on level
        setGridSize(level);

        // Get a random selection of pairs
        const pairs = getRandomPairs(numPairs);

        // Create and shuffle the deck
        const deck = [...pairs, ...pairs].sort(() => Math.random() - 0.5).map(createCard);
        deck.forEach(card => {
            card.classList.remove('flipped');
            grid.appendChild(card);
        });

        updateStatusText();
        loadGameState(); // Load saved game state if available
        startTime = new Date();
    }

    initGame();
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

function showInstructions() {
    alert('Match cards with identical symbols. Complete each level to move to the next.');
}

/* esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gameGrid');
    const statusText = document.getElementById('statusText');
    let attempts = 0;
    let matches = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

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
        updateStatusText();
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
    }

    // To reset the game
    function resetGame() {
        grid.innerHTML = '';
        attempts = 0;
        matches = 0;
        initGame();
    }

    // Initialize game
    function initGame() {
        const cardNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const deck = [...cardNames, ...cardNames].sort(() => Math.random() - 0.5).map(createCard);
        deck.forEach(card => {
            card.classList.remove('flipped');
            // card.style.visibility = 'hidden';
            grid.appendChild(card);
        });
        updateStatusText();
    }

    initGame();
    // Event listener for the reset button
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

function showInstructions() {
    alert('Match cards with identical symbols. Click to flip a card, find its match to keep it open. Match all pairs to win.');
}

### Test Cases

1.  **Game Functionality**
    
    - **Card Flip**: Test that each card flips upon click and reveals the image.
    - **Matching Mechanism**: Ensure that a pair of matching cards stays flipped while unmatched pairs revert to their hidden state.
    - **Game Reset**: Verify that clicking the reset button resets the game grid, shuffles cards, and updates the status to zero attempts and matches.
    - **Victory Condition**: Test that all pairs being matched triggers a message or visual indicator that the game is complete.
2.  **UI and UX**
    
    - **Instructions Pop-up**: Check that the instructions button displays an alert with instructions for gameplay.
    - **Responsive Design**: Verify the grid layout, buttons, and text scale appropriately on different screen sizes, especially on mobile.
    - **Navigation**: Ensure the "Home" and "Contact" links function correctly and that both pages are styled consistently.



    **Shuffling**
    - Test that the cards are shuffled randomly since I added more cards.
    - const deck = [...pairs, ...pairs].sort(() => Math.random() - 0.5).map(createCard); "https://stackoverflow.com/questions/64370139/codewars-permutations-kata-sort-method-that-returns-0-5-math-random"


    
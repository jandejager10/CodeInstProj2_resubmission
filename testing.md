### Testing Overview

**Purpose of Testing:**
The purpose of testing is to ensure that the game functions correctly and is responsive to different screen sizes.

**Testing Methodology:**
The types of testing performed is manual, including the tools: JSLint for JavaScript linting, HTML and CSS validation tools.

**Testing Results:**

1.  **Game Functionality**
    
| Feature                | Test Case                                                     | Expected Outcome                       | Pass/Fail |
|------------------------|---------------------------------------------------------------|----------------------------------------|-----------|
| **Game Start**         | Load game page                                               | Game grid displays with correct layout | Pass      |
| **Card Flip**          | Click on a card                                              | Card flips to reveal image             | Pass      |
| **Match Check**        | Flip two matching cards                                       | Both cards stay visible                | Pass      |
| **Level Progression**  | Complete a level                                             | Game advances to next level grid       | Pass      |
| **High Score Tracking**| Complete game and check high score                           | High score displays in UI              | Pass      |
| **Responsive Design**  | Open game on various screen sizes (mobile, tablet, desktop)  | Layout adjusts without overlap         | Pass      |
| **Save Game State**    | Exit and reload the page                                     | Game continues from last state         | Pass      |

2.  **UI and UX**
    
    - **Instructions Pop-up**: Check that the instructions button displays an alert with instructions for gameplay. &#x2611;
    - **Responsive Design**: Verify the grid layout, buttons, and text scale appropriately on different screen sizes, especially on mobile. &#x2611;
    - **Navigation**: Ensure the "Home" and "Contact" links function correctly and that both pages are styled consistently. &#x2611;
3. **Shuffling**

    - Test that the cards are shuffled randomly since I added more cards. &#x2611;
    - const deck = [...pairs, ...pairs].sort(() => Math.random() - 0.5).map(createCard); "https://stackoverflow.com/questions/64370139/codewars-permutations-kata-sort-method-that-returns-0-5-math-random"
4. **Footer Positioning**: 

    - In contact.html, the footer is set to position: fixed;, which causes it to overlap with content if the page height is less than the viewport height. Anything else does some weird things to the layout. &#x2612;
5. **Game State Saving and Loading**

    - Test that the game state is saved and loaded correctly. &#x2611;
    - In loadGameState, if the game state fails to load, I call resetGameState(), which clears the local storage. This ensures that it will erase any saved game state and restart from level 1. &#x2611;
6. **Accessibility**

    - I added aria-labels to all the buttons and links. &#x2611;
    - Not done for the images. &#x2612;
    - Keyboard Navigation: Verify that all elements are accessible via keyboard-only navigation. &#x2611;
        - I added keyboard navigation to the game.
        - This implementation allows players to control the game using the keyboard, enhancing accessibility and user experience.:
            - I can navigate to the game grid left and right with arow keys and flip cards with the enter key. To move to the next row, just continue left or right.
            - Arrow Keys: Navigate through the cards. Left and right arrow keys.
            - Enter Key: Flip the selected card.
            - R Key: Reset the game.
    - Screen Reader Compatibility: Confirm that screen readers can announce instructions, card content, and feedback messages. &#9746;
    - Color Contrast: Ensure that color choices are accessible to visually impaired users. &#9746;
7. **Responsiveness**

    - Test that the game is responsive to different screen sizes. &#x2611;
    - Tested for mobile and desktop. &#x2611;
    - Tested for scale on multiple screen sizes. &#x2611;
8. **Browser Compatibility**

    - Tested for Edge, Chrome, and Firefox. &#x2611;
9. [JS Hint](https://jshint.com/) validation

    - No errors or warnings.

JavaScript file `script.js` was validated using [JSHint v2.13](https://jshint.com/).  
![Results of JavaScript validation](assets/img/jshint.png)
<p align="center">
<em>Figure: JavaScript Validation Result</em>
No errors highlighted. 
</p>

10. CSS validated using [W3C Jigsaw Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input).  
![Results of W3C Validation](assets/img/w3c_validation.png)   
<p align="center>
<em>Figure: CSS Validation Result<em>
No errors highlighted.
</p> 

11. The [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool in Google Chrome was used to test site performance, accessibility and best practice.

12. The HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/). Passed with no errors.

![Results of HTML validtion](assets/img/html-validation1.png)
<p align="center">
<em>Figure: HTML Validation Result</em>
No errors highlighted. 
</p>

**Conclusion:**

The game is fully functional and responsive to different screen sizes. The game state is saved and loaded correctly. The game is accessible via keyboard navigation. The game is responsive to different screen sizes. The game is compatible with different browsers. The HTML code is valid. The CSS code is valid.


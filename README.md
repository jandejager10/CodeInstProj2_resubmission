# CodeInstProj2_resubmission

## Project Requirements <br>

### Main Technologies<br>
  Required: HTML, CSS, JavaScript.

### Optional: 
Bootstrap, jQuery or any other JavaScript libraries, external APIs.<br>

## Mandatory Requirements<br>
A project violating any of these requirements will FAIL

  - Dynamic Front End Project: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.
  - Site Responses: Use JavaScript to have the site produce relevant responses dependent on users' actions.
  - Information Architecture: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).
  - Documentation: Write a README.md file for your project that explains what the project does and the value that it provides to its users.
  - Version Control: Use Git & GitHub for version control.
  - Attribution: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.
  - Deployment: Deploy the final version of your code to a hosting platform such as GitHub Pages.

### Overview
This coding project is a Kawaii-themed Memory Game implemented with HTML, CSS, and JavaScript. The game allows players to match pairs of cards, providing a fun, interactive experience that aligns with the "kawaii" (cute) theme.

## Goals
### User goal:
	Enjoy the game.

### Site owner's goal:
	Build a functional easily navigable site that users can enjoy.

## Features and Enhancements

1.  **Game Enhancements**:
    
    - **Difficulty Levels**: Add options for different grid sizes (2x2, 2x3, 4x4) to adjust game difficulty.
    - **Scoring System**: Implement a points system based on attempts or time taken to finish the game, allowing players to challenge themselves.
    - **Animations and Sound Effects**: Add animations and sound effects for card flips, matches, and completion, making the game more engaging.
2.  **UI Improvements**:
    
    - **Loading Animation**: Display a loading animation while the game initializes, especially for slower networks.
    - **Feedback on Victory**: Once all pairs are matched, display a congratulatory message or graphic.(Future Development)
    - **Theme Variations**: Provide an option for players to switch between themes, changing card designs and background colors.(Future development)
3.  **Game Data Persistence**:
    
    - **Save Progress**: Allow players to save progress or attempt tracking across sessions using local storage, so they can resume later.
    - **Leaderboard**: Implement a leaderboard showing top scores for various difficulties, adding a competitive aspect to the game. (future development)

### Data Persistence with localStorage

1.  **localStorage**:
    
    - Stores data persistently in the browser, even after the user closes the browser or restarts their device.
    - Stores data in key-value pairs as strings.
    - Useful for saving high scores, game progress, or settings that you want to keep available across multiple game sessions.
2.  **Save High Scores with localStorage**
    
    Use `localStorage` to store and retrieve high scores. This way, the high score will persist across different sessions. 
    
    Each time the player finishes a game or beats their high score, `saveHighScore(score)` will check if the current score is higher than the saved high score and update it if so. 
    
3.  **Save Game Progress or Current State**
    
    To allow players to resume a game from where they left off, we store the game state in `localStorage` as well.
    
    For example, we can store:
    
    - The number of attempts
    - Matched pairs
    - The layout of the current game grid
4.  **Auto-Save Feature** (Optional-maybe)
    
    We can apparently use the `window.beforeunload` event to save the game state whenever the player leaves or reloads the page. To be tested.
    
5.  ### Limitations
    
    1.  **Security**: localStorage is accessible through JavaScript, so any script on the page can potentially read/write to it (might be blocked by local security settings).
    2.  **Storage Size**: localStorage has a storage limit (typically around 5MB per domain), so it’s best for small amounts of data.
    3.  **Browser Dependency**: Data stored in localStorage is limited to a single browser on a single device.


### Prerequisites
You only need a modern web browser to run the game. The game is tested on Google Chrome, Mozilla Firefox, and Safari.

**Installation**<br>
No installation is necessary. Simply clone the repository to your local machine or download as a ZIP file. git clone https://github.com/jandejager10/CodeInstProj2_resubmission.git Navigate to the project directory and open index.html in your web browser to start playing the game.

### How to Play
- Start the Game: Open the `index.html` file in a web browser.
- Play: Click on a card to flip it over. Try to find another card that matches the flipped card.
- Match Pairs: Successfully matching pairs will remain flipped.
    - Winning the Game: The game is won when all pairs are matched.
Reset Game: Click the "Reset Game" button to shuffle the cards and start a new game.
Software installed and used
VS Code - Live Preview Extension - GitHub Pull Requests and Issues Extension
Github Desktop
git
Notepad++
Wireframes
Game Title: Placed at the top center of the page.
Instructions Button: A button that, when clicked, displays a modal or popup with game instructions.
Game Grid: A 4x4 grid where the game cards will be placed.
Status Text: Below the grid, showing the number of attempts and matches.
Reset Game Button: An option to restart the game at any time.
![Layout Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/img/wireframe.png)
Mockup with [amiresponsive](https://ui.dev/amiresponsive)
Reminders
keep track of time
Acknowledgements + Code
Adobe, for the color wheel. #2D3540 #0B8C38 #20733D #5DBF4E #F2F2F2
Pictures https://www.shutterstock.com/
Favicon - https://www.shutterstock.com/
Fonts - https://fonts.googleapis.com/
Stylesheets and icons - https://kit.fontawesome.com
Code usage lookups - https://www.w3schools.com/
Media (images and animations)
All them pictures have got to come from somewhere afterall:
Pictures / Photos from https://stock.adobe.com/
Favicon - https://icons8.com/


Contact
Jan de Jager – @JdJage - jandejager10@hotmail.com

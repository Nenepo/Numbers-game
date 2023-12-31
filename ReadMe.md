# TITLE: Numbers Game

## DESCRIPTION

Welcome aboard fellow developer! In the Numbers Game, players have the exciting task of picking a number (selecting an option) and trying to guess the correct number with as few attempts as possible. If they pick a number that's too high or too low, they'll get an alert to guide them.

## CHALLENGES

### 1. Capturing User Input

**Challenge:** Initially, I struggled with capturing and processing user input correctly. I used `document.getElementById('userInput').value`, but it didn't work as expected.

**Solution:** I realized that I needed to use `parseFloat(userInput.value)` to correctly capture and convert the user's guess into a number.

### 2. Event Listener Syntax

**Challenge:** Setting up the event listener for the submit button was a bit tricky. I initially used `addEventListener = ('click', () => { ... })`, which caused issues.

**Solution:** I fixed this by using the correct syntax for `addEventListener`: `submitBtn.addEventListener('click', () => { ... })`. It made the button work as intended.

### 3. Handling Game Over

**Challenge:** Determining when the game should end and disabling further input after a certain number of rounds was challenging.

**Solution:** I solved this by checking if the `rounds` variable exceeded a maximum limit (in my case, 10) and disabling the submit button to prevent additional guesses when the game was over.

## Learning and Progress

Throughout this project, I learned the importance of debugging and troubleshooting. These challenges helped me gain a deeper understanding of JavaScript and event handling. I also realized the significance of clear and precise code to avoid issues.

Feel free to explore the code and try out the game. Your feedback and suggestions are always welcome!

Happy coding! 🚀
## REAL-WORLD USES

The Numbers Game concept is found in various real-world applications, including:
- Puzzles and Brain Teasers: Many puzzle books and mobile apps include number-based guessing games to challenge the player's problem-solving skills.

- Raffles and Lotteries: In some raffle or lottery systems, players need to guess specific numbers to win prizes.

- Psychological Studies: Researchers use similar guessing games in experiments to study decision-making and risk-taking behaviors.

- Market Research: Marketers sometimes use games that involve guessing numbers or predicting outcomes to gather consumer preferences and insights.

- Random Number Generators: Various applications require random number generation, including gaming, cryptography, and simulations.

## WEEKLY CODING CHALLENGE

Join me in my weekly challenge for the entire month! Let's learn and code together!

## TIPS

To build this game, we recommend using the following resources:
- JavaScript documentation: [https://developer.mozilla.org/en-US/docs/Web/JavaScript]
  - It's essential to use official documentation to understand JavaScript functions and methods thoroughly. This will help you understand how to think about the logic and what to use for certain actions
- W3Schools JavaScript Tutorial: [https://www.w3schools.com/js/]
[https://www.w3schools.com/jsrEF/default.asp]
  - This resource provides practical examples and explanations for JavaScript concepts.

Remember to:
- Focus on logic to create a challenging and engaging game.
- Keep track of player attempts for a better gaming experience.
- Feel free to customize the game logic to make it your own.
- Take your time, you do not have to get it immediately, just try
- Reflect on your solution and share your thought process
- Peer Program
- Do your research and explore 



Let's code along and have fun learning together!

Wrote this README using this blog as a guide [https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/]

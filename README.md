# Dice Game

This is a simple web-based dice game project. The game allows you to roll virtual dice and displays a random dice face each time you click the "Roll the dice" button.

## Usage

To use the Dice Game, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

## Requirements

The Dice Game project has the following requirements:

- HTML5 compatible web browser.

## Files

The project repository contains the following files:

- `index.html`: The main HTML file that displays the game interface.
- `dice_game.css`: The CSS file that styles the game interface.
- `dice_game.js`: The JavaScript file that handles the game logic.
- `Images/`: A directory containing the dice face images used in the game.
- `dice_sound.mp3`: An audio file that plays when the dice is rolled.

## How It Works

The `index.html` file contains the structure of the game interface, including the dice images and the roll button. The CSS file `dice_game.css` provides the styling for the interface.

The game logic is implemented in the JavaScript file `dice_game.js`. When the page loads, the script hides all dice images except the first one. When the roll button is clicked, a random dice face is selected, and only that face is displayed while hiding the rest. Additionally, a dice rolling sound is played.

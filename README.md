# Connect Four

Project 1 - GA

Creator: Pat Eaton

Type: JavaScript Game

## Objective

Two users compete to get four chips in consecutive order in the form of a row, column or diagonal

The winner will be determined once four chips are in a row, column or diagonal 

## Gameplay

•	User opens game, then game board with chip pops on screen

•	User drags mouse onto board and the chip will follow the mouse

•	User selects which column they want to drop the chip in

•	Once column is selected the chip drops down to the available spot

•	If there are other chips in the column then the new chip will stack on top of the other chip


•	User continues to click on a different column to drop a chip

•	Second user has turn to select column and drop their chip

•	This interaction continues until there are four consecutive chips in a row, column or diagonal

•	Once there are four consecutive chips the winner’s chips will flash 

•	Then the board will disappear with the loser’s chip left on screen 

•	Then loser user chip disappears and background color changes to indicate game has ended

•	User then refreshes page to restart the game


## Coding
•	Create container display of board with animations for each column using @keyframes and display for chip 

•	Maybe try using <td> tag in HTML to make table for game board

•	Create colors for chips to change or maybe flash when game is won by user

•	Function to display chip above column that is hovered over by user

•	Function to drop chip over column that user clicks on

•	Function that displays chips when they are placed in 
column

•	Function that allows for chip to fall to closest available space in selected column

•	Function to check the board for when the user does get four chips in a row, column or diagonal

•	Create event listeners for moving chips over the column then darken/highlight the selected column, for dropping chip and checking for the win


## Wireframe

 ![Part 1](https://i.imgur.com/zudsI6T.jpg)

 ![Part 2](https://i.imgur.com/80MfaOX.jpg)


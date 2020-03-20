// Declare global variables //
const td = document.querySelectorAll('td');
const chip = document.querySelector('.chip');
const inner = document.querySelector('.inner');
const introMsg = document.querySelector('.intro');

// Add  Event Listeners to every cell //
for(let i = 0; i < td.length; i++) {

	// Listener responsible for moving chip over column then darken column
	td[i].addEventListener('mouseover', selectColumn);

	// Listener responsible for dropping chip
	td[i].addEventListener('click', dropChip);

 	// Listener responsible for checking for win
 	td[i].addEventListener('animationend', checkBoard);

 	// Listener responsible for mouseover pullOut
 	td[i].addEventListener('mouseover', pullOutIntro);
}

// Declare selectColumn function //
function selectColumn() {
	// Call function to position chip over column
	displayChipAtTop(this);
	// Grab current column and store it in variable
	let currentCol = this.className;
	// Sort through and grab each td element with the chosen column
	for(let i = 0; i < td.length; i++) {
		// If that element is in the chosen column darken background
		if(td[i].classList.contains(currentCol)) {
			td[i].style.backgroundColor = 'darkblue';
		} 
		// Else if the cell isn't in the column make sure to switch it back to blue
		else {
			td[i].style.backgroundColor = 'blue';
		}
	}
	// Declare function to display chip over columns //
	function displayChipAtTop(cell) {
	// Switch position given column
		switch(cell.className) {
			case 'column-1':
				chip.style.left = '328px';
				break;
			case 'column-2':
				chip.style.left = '425px';
				break;
			case 'column-3':
				chip.style.left = '524px';
				break;
			case 'column-4':
				chip.style.left = '627px';
				break;
			case 'column-5':
				chip.style.left = '728px';
				break;				
			case 'column-6':
				chip.style.left = '826px';
				break;
			case 'column-7':
				chip.style.left = '928px';
				break;		
		}
	}
}

// Declare function to drop chip over columns //
function dropChip() {
	// Grab functions global variables
	// Create new chip to drop
	let placedChip = document.createElement('div');
	// Create inner circle for shadow effect
	let innerCircle = document.createElement('div');
	// Create variable to hold the amount of spots open in the column
	let spotsOpen = 0;
	// Put chip together
	placedChip.classList.add('placed-chip');
	innerCircle.classList.add('inner');
	placedChip.appendChild(innerCircle);
	// Call place chip funcion and pass it the current td
	placeChip(this);
	// Call function to change chip
	changeChip();					

	// Declare placeChip function //
	function placeChip(cell) {
		// Grab current column
		let currentColumn = cell.className;
		// Create array to hold each td with the currentColumn
		let filterArray = [];
		// Loop through all td's
		for(let i = 0; i < td.length; i++) {
			// If td has column add td to filterArray
			if(td[i].classList.contains(currentColumn)) {
				filterArray.push(td[i]);
			}
		}
		// Loop through filterArray
		for(let i = 0; i < filterArray.length; i++) {
			// Create boolean variable to see if td in filterArray already has chip!
			let hasChip = filterArray[i].hasChildNodes();
			// If cell doesn't have div.chip then placeChip
			if(!hasChip) {
				// Place chip
				// If the td below td[i] is empty, chip will be placed in that td
				filterArray[i].appendChild(placedChip); 
				// Increase spotsOpen
				spotsOpen++;
			}
		}	
		// Adjust placedChip animation to account for chips already in column (put in reverse order b/c other order was not working)
		switch(spotsOpen) {
			// 6 spots open
			case 6:
				placedChip.style.animationName = 'animate'; 
				break;
			// 5 spots open	
			case 5:
				placedChip.style.animationName = 'one-chip';
				break;
			// 4 spots open	
			case 4:
				placedChip.style.animationName = 'two-chip';
				break;
			// 3 spots open
			case 3:
				placedChip.style.animationName = 'three-chip';
				break;
			// 2 spots open
			case 2:
				placedChip.style.animationName = 'four-chip';
				break;
			// 1 spot open
			case 1:
				placedChip.style.animationName = 'five-chip';
				break;
		}
	}
	// Declare changeChip function //
	function changeChip() {
		// If chip isn't yellow then chip is now yellow
		if(!chip.classList.contains('yellow')&&!inner.classList.contains('inner-yellow')) {
			chip.classList.add('yellow');
			inner.classList.add('inner-yellow');
			placedChip.classList.remove('yellow');
			innerCircle.classList.remove('inner-yellow');
		} 
		// Else it's red
		else {
			chip.classList.remove('yellow');
			inner.classList.remove('inner-yellow');
			placedChip.classList.add('yellow');
			innerCircle.classList.add('inner-yellow');
		}
	}
}

// Declare a function to check the board //
function checkBoard() {
	// Make array variable to to store every possible win combo
	const winCombos = [
	[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
	[20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
	[1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
	[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
	[7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
	[13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
	[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
	[12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
	[22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
	[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
	];
	// childNodes: read-only property returns a live NodeList of child nodes of 
	// the given element where the first child node is assigned index 0
	// Takes the four combination values & plug them into the game board values 
	for(let i = 0; i < winCombos.length; i++) {
		const i1 = td[winCombos[i][0]];
		const i2 = td[winCombos[i][1]];
		const i3 = td[winCombos[i][2]];
		const i4 = td[winCombos[i][3]];
		// Check to see if all 4 spots have a div.chip
		if(i1.hasChildNodes() === true &&
		   i2.hasChildNodes() === true && 
		   i3.hasChildNodes() === true && 
		   i4.hasChildNodes() === true) {
		   	// If they do now check those chips to see if they all have the class of yellow
			if(i1.firstChild.classList.contains('yellow') &&
			   i2.firstChild.classList.contains('yellow') &&
			   i3.firstChild.classList.contains('yellow') &&
			   i4.firstChild.classList.contains('yellow')) {
			   	// If they do yellow is passed as the winner if the chip positions are correct
				gameOver('Yellow', i1, i2, i3, i4);
			} 
			// Check to see if none of them have  the yellow class
			else if (!i1.firstChild.classList.contains('yellow') &&
			   !i2.firstChild.classList.contains('yellow') &&
			   !i3.firstChild.classList.contains('yellow') &&
			   !i4.firstChild.classList.contains('yellow')) {
			   	// If they don't red is passed as the winner if the chip positions are correct
				gameOver('Red', i1, i2, i3, i4);
			}
		}
	}	
	// Declare gameOver function //
	function gameOver(winner, chip1, chip2, chip3, chip4) {
		// Animate the winning chips
		animateChip(chip1);
		animateChip(chip2);
		animateChip(chip3);
		animateChip(chip4);
		display(winner);
		// Declare animate function //
		function animateChip(chip) {
			// Grab chip from chip position
			let disk = chip.firstChild;
			// Grab inner circle from that chip
			let innerDisk = disk.firstChild;
			// Take away its box shadow
			innerDisk.style.boxShadow = 'none';

			// Apply animation duration
			disk.style.animationDuration = '0.2s';
			innerDisk.style.animationDuration = '0.2s';

			// Apply animation count
			disk.style.animationIterationCount = 'infinite';
			innerDisk.style.animationIterationCount = 'infinite';

			// Apply animation
			disk.style.animationName = 'winner';
			innerDisk.style.animationName = 'innerWinner';
		}
		
		// Declare display function //
		function display(winner) {
			// Grab elements that are needed
			const body = document.querySelector('body');
			const board = document.querySelector('.board');
			const dropChip = document.querySelector('.chip');
			const gameOver = document.querySelector('.game-over');
			// Set timeout to pull game board off screen
			setTimeout(function() {board.style.top = '-900px';}, 2000);
			// Set timeout to drop the losing chip
			setTimeout(function() {dropChip.style.animationName = 'dropChip';}, 3200);
			// Set background color to the winner
			body.style.backgroundColor = winner;
		}
	}
}

// Function to pull away title //
function pullOutIntro() {
	introMsg.style.left = '65px';
	introMsg.style.animationName = 'fadeOut' 
}

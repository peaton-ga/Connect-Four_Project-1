// Console.log("Connect-Four")

// Declare global variables
const td = document.querySelectorAll('td');
const chip = document.querySelector('.chip');
const inner = document.querySelector('.inner');
const introMsg = document.querySelector('.intro');

// Add  Event Listeners to every cell
for(let i = 0; i < td.length; i++) {

	// Listener responsible for moving chip over column then darken column
	td[i].addEventListener('mouseover', selectColumn);

	// Listener responsible for dropping chip
	td[i].addEventListener('click', dropChip);

 	// Listener responsible for checking for win


 	// Listener responsible for mouseover pullOut

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

// Declare function to drop chip over columns
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

	// Declare placeChip function
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
			placedChip.style.animationName = 'animate'; // (Still working on animation, addressing JS bug) //
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
	}
}



// Declare changeChip function
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

// Declare animate function (still need to add more)
// function animateChip(chip) {
// 	// Grab chip from chip position
// 	let disk = chip.firstChild;
// 	// Grab inner circle from that chip
// 	let innerDisk = disk.firstChild;
// 	// Take away its box shadow
// 	innerDisk.style.boxShadow = 'none';

	// animation duration?

	// animation count?

	// active/apply animation


// Call the place chip function? pass to current td //
// Call function to change chip --> Two players



// Declare a function to check the board //
	// thought about making array variable to store every possible win combo? (not yet, functionality first and foremost!)




// Use loop through all td's created
	// If td has a column, add td to array (create a filter array?)
	// The filter() method creates an array filled with all array elements 
	// that pass a test (provided as a function).






// Declare a game over function 
	// Goal: Animte the winning chips! (declare function for animation)



// Declare function that will display Winner!
	// How to pull board off of screen? (timer?)
	// How to drop off the loser's chip? (timer?)
	// Change background color once game ends to 
	// indicate end of game


// function to end game? //
// function pullOutIntro() {
// 	introMsg.style.left = '65px';
// 	introMsg.style.animationName = 'fadeAway' (animationName not defined)
// }

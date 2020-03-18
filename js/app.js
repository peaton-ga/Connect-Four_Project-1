// console.log("Connect-Four")

// Declare global variables
const td = document.querySelectorAll('td');
const chip = document.querySelector('.chip');
const inner = document.querySelector('.inner');
const introMsg = document.querySelector('.intro');

// // add  Event Listeners to every cell
// for(let i = 0; i < td.length; i++) {

// 	// Listener responsible for moving chip over column then darken column
// 	td[i].addEventListener('mouseover', selectColumn);

// 	// Listener responsible for dropping chip
// 	td[i].addEventListener('click', dropChip);

// 	// Listener responsible for checking for win
// 	td[i].addEventListener('animationend', checkBoard);

// 	// Listener responsible for mouseover pullOut
// 	td[i].addEventListener('mouseover', pullOutIntro);
// }

// Declare selectColumn function
function selectColumn() {
	// Call function to position chip over column
	displayChipAtTop(this);
	// Grab current column and store it in variable
	let currentCol = this.className;
	// Sort through and grab each td element with the chosen column
	for(let i = 0; i < td.length; i++) {
		// If that element is in the chosen column darken background
		if(td[i].classList.contains(currentCol)) {
			td[i].style.backgroundColor = 'darkred';
		} 
		// Else if the cell isn't in the column make sure to switch it back to blue
		else {
			td[i].style.backgroundColor = 'lightsteelblue';
		}
	}
}
// Declare function to display chip over columns //
function displayChipAtTop(cell) {
	//switch position given column
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
// Declare function to drpo chip over columns
function dropChip() {
	//grab functions global variables
	//create new chip to drop
	let placedChip = document.createElement('div');
	//create inner circle for shadow effect
	let innerCircle = document.createElement('div');
	//create var to hold the amount of spots open in the column
	let spotsOpen = 0;
	//put chip together
	placedChip.classList.add('placed-chip');
	innerCircle.classList.add('inner');
	placedChip.appendChild(innerCircle);

	//call place chip funcion and pass it the current td
	placeChip(this);
	//call function to change chip
	changeChip();
}

//declare changeChip function
function changeChip() {
	//if chip isn't yellow then chip is now yellow
	if(!chip.classList.contains('yellow')&&!inner.classList.contains('inner-yellow')) {
		chip.classList.add('yellow');
		inner.classList.add('inner-yellow');
		placedChip.classList.remove('yellow');
		innerCircle.classList.remove('inner-yellow');
	} 
	//else it's red
	else {
		chip.classList.remove('yellow');
		inner.classList.remove('inner-yellow');
		placedChip.classList.add('yellow');
		innerCircle.classList.add('inner-yellow');
	}
}





// Declare place chip function? //
	// Grab selected column
		// Array for holding each td with selected column



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

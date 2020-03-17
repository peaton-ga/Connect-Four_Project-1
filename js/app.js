console.log("Connect-Four")

// Declare global variables
const td = document.querySelectorAll('td');
const chip = document.querySelector('.chip');
const inner = document.querySelector('.inner');
const introMsg = document.querySelector('.intro');
// add  Event Listeners to every cell
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
			td[i].style.backgroundColor = 'darkblue';
		} 
		// Else if the cell isn't in the column make sure to switch it back to blue
		else {
			td[i].style.backgroundColor = 'blue';
		}
	}
}



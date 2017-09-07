/*Function that checks whether bool is true or not and depending 
*On the value either adds or changes the corresponding classes for background
*animation and picture rotation
*/

var boolflip = true

function rotate() {
	if (boolflip) {
		document.getElementById("left-pic").className = "rotateleft";
		document.getElementById("right-pic").className = "rotateright";
		document.getElementById("site").classList.add("site-rainbow");
		boolflip = false;
	}
	else {
		document.getElementById("left-pic").className = "rotate335";
		document.getElementById("right-pic").className = "rotate30";
		document.getElementById("site").classList.remove("site-rainbow");
		boolflip = true;
	}
}
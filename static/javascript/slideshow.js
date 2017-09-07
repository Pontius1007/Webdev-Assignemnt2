var Slideindex = 0;
carousel();
setContent100();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlideshow");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    Slideindex++;
    if (Slideindex > x.length) {Slideindex = 1}    
    x[Slideindex-1].style.display = "block";  
    setTimeout(carousel, 9000); 
}

function setContent100() {
	document.getElementById("slideshow-content").style.height = "100%";
}
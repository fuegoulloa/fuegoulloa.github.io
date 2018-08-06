//Variable declarations plus corresponding JQuery selectors
var button01 = document.querySelector("#button01");
var button02 = document.querySelector("#button02");
var button03 = document.querySelector("#button03");
var button04 = document.querySelector("#button04");
var about = document.querySelector("#about");
var samples = document.querySelector("#samples");
var contact = document.querySelector("#contact");
var tagLine = document.querySelector("#tagline");
var tagline02 = document.querySelector("#tagline h1");
var homeContent = document.querySelector("#homeContent");
var viewSamples = document.querySelectorAll(".view-samples");
var viewMore = document.querySelector("#view-more");
var hideRow = document.querySelector("#hide-row");

//These two actions are to show an additional row of samples on Samples Page
viewMore.addEventListener("mouseover", function() {
	this.style.cursor = "pointer";
});

viewMore.addEventListener("click", function() {
	document.querySelector("#row-2").classList.remove("no_show");
	this.style.display = "none";
});
//**************************************************************************

//These two actions hide the 2nd row of samples on Samples Page
hideRow.addEventListener("mouseover", function() {
	this.style.cursor = "pointer";
});

hideRow.addEventListener("click", function() {
	document.querySelector("#row-2").classList.add("no_show");
	viewMore.style.display = "block";
});
//**************************************************************************

//Actions for menu items on nav bar **************
button01.addEventListener("click", showAbout);
button02.addEventListener("click", showSamples);
button03.addEventListener("click", showContact);
button04.addEventListener("click", showContact);
//************************************************


//This code is for the three sample buttons on the homepage ****************
viewSamples.forEach(function(item, idx) {
	viewSamples[idx].addEventListener("click", showSamples);
});

//Pop up windows for each individual sample
// Get the sampleWindow
var sampleWindow = document.querySelectorAll(".sample-window");
// Get the button that opens the sampleWindow
var btn = document.querySelectorAll(".open-the-sample");
// Get the <span> element that closes the sampleWindow
var closeWindow = document.querySelectorAll(".close");
// When the user clicks on the button, open the sampleWindow 
btn.forEach(function(item, idx) {
	btn[idx].addEventListener("click", function() {
		sampleWindow[idx].style.display = "block";
	});
});
// When the user clicks on <span> (x), close the sampleWindow
closeWindow.forEach(function(item, idx) {
	closeWindow[idx].addEventListener("click", function() {
		sampleWindow[idx].style.display = "none";
	});
	// When the user clicks anywhere outside of the sampleWindow, close it
	window.addEventListener("click", function(event) {
    if (event.target == sampleWindow[idx]) {
        sampleWindow[idx].style.display = "none";
    	}
	});
});
//This is the end of code for samples popup windows ***************************


//Function Declarations from this point on down *******************************

function showAbout() {
	button01.classList.remove("inactive");
	button01.classList.add("active");
	about.classList.remove("no_show");
	about.classList.add("show");
	tagline.classList.add("no_show");
	homeContent.classList.add("no_show");

	document.querySelector("#alert").classList.remove("blue-highlight");
	document.querySelector("#alert").classList.add("no_show");

		if(button02.classList[0]="active") {
			button02.classList.remove("active");
			button02.classList.add("inactive");
			samples.classList.remove("show");		
			samples.classList.add("no_show");
		} 
		if(button03.classList[0]="active") {
			button03.classList.remove("active");
			button03.classList.add("inactive");
			contact.classList.remove("show");		
			contact.classList.add("no_show");
		}
}

function showSamples() {
	button02.classList.remove("inactive");
	button02.classList.add("active");
	samples.classList.remove("no_show");
	samples.classList.add("show");
	tagline.classList.remove("no_show");
	homeContent.classList.add("no_show");
	tagline02.textContent = "Code Samples";

	document.querySelector("#alert").classList.remove("blue-highlight");
	document.querySelector("#alert").classList.add("no_show");

		if(button01.classList[0]="active") {
			button01.classList.remove("active");
			button01.classList.add("inactive");
			about.classList.remove("show");		
			about.classList.add("no_show");
		} 
		if(button03.classList[0]="active") {
			button03.classList.remove("active");
			button03.classList.add("inactive");
			contact.classList.remove("show");		
			contact.classList.add("no_show");
		}
}

function showContact() {
	button03.classList.remove("inactive");
	button03.classList.add("active");
	contact.classList.remove("no_show");
	homeContent.classList.add("no_show");
	tagline.classList.remove("no_show");
	tagline02.textContent = "Holler at me!";

	document.querySelector("#alert").classList.remove("blue-highlight");
	document.querySelector("#alert").classList.add("no_show");

		if(button01.classList[0]="active") {
			button01.classList.remove("active");
			button01.classList.add("inactive");
			about.classList.remove("show");		
			about.classList.add("no_show");
		} 
		if(button02.classList[0]="active") {
			button02.classList.remove("active");
			button02.classList.add("inactive");
			samples.classList.remove("show");		
			samples.classList.add("no_show");
		}
}
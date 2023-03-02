
// TABLE OF CONTENTS


var toc = document.getElementById("whole-document");
var headings = toc.querySelectorAll("h2, h3, h4, h5, h6");
var ul = document.createElement("ul");

for (var i = 0; i < headings.length; i++) {
	var text = headings[i].textContent;
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.textContent = text;
	a.href = "#" + headings[i].id;
	li.appendChild(a);
	ul.appendChild(li);
	}

document.getElementById("toc-placeholder").appendChild(ul);



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("the-table-of-content");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





// BACK TO TOP HOVER BUTTON

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.querySelector('.back-to-top').classList.add('show');
		} 
	else {
		document.querySelector('.back-to-top').classList.remove('show');
		}
}

document.querySelector('.back-to-top').addEventListener('click', function(e) {
	e.preventDefault();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	});



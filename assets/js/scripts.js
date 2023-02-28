
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

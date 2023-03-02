
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


// MAKE TOC LARGE AFTER CLICKING HEADING

function toggleHeight() {
    const content = document.getElementById('toc-container');
    if (content.style.height === '500px') {
        content.style.height = '40px';
    } else {
        content.style.height = '500px';
    }
}



// CLOSE THE TOC AFTER CLICKING A LINK AND MAKE IT SMALL AGAIN

const tocLinks = document.querySelectorAll('#the-table-of-content ul li a');
tocLinks.forEach(link => {
    link.addEventListener('click', () => {
        const detailsElement = document.getElementById('the-table-of-content');
        detailsElement.removeAttribute('open');
        const content = document.getElementById('toc-container');
   		 if (content.style.height === '40px') {
        content.style.height = '500px';
    	} else {
        content.style.height = '40px';
    }
    });
});


// MAKE TOC STICKY ON TOP // SEE CSS CLASS .STICKY

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("the-table-of-content");
var sticky = navbar.offsetTop;

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



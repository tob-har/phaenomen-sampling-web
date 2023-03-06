
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
    const contentTocContainer = document.getElementById('toc-container');
    if (contentTocContainer.style.height === '400px') {
        contentTocContainer.style.height = '40px';
    } else {
        contentTocContainer.style.height = '400px';
    }
}



// CLOSE THE TOC AFTER CLICKING A LINK AND MAKE IT SMALL AGAIN

const tocLinks = document.querySelectorAll('#the-table-of-content ul li a');
tocLinks.forEach(link => {
    link.addEventListener('click', () => {
        const detailsElement = document.getElementById('the-table-of-content');
        detailsElement.removeAttribute('open');
        
        const contentTocContainer = document.getElementById('toc-container');
   		if (contentTocContainer.style.height === '40px') {
        contentTocContainer.style.height = '400px';
    	} else {
        contentTocContainer.style.height = '40px';
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


// SCROLL OFFSET TO ALL SCROLLINGS TO AN A ELEMENT

// Get all anchor tags with a hash (#) in the href attribute
const anchors = document.querySelectorAll('a[href^="#"]');

// Loop through each anchor tag
anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Prevent the default behavior of the anchor tag
    e.preventDefault();
    // Get the target element of the anchor tag
    const target = document.querySelector(this.getAttribute('href'));
    // Get the top position of the target element
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
    // Scroll to the target element with an offset of 80 pixels
    window.scrollTo({
      top: targetTop - 80,
      behavior: 'smooth'
    });
  });
});




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


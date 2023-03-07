// GENERATE HEADINGS NUMBERING

const article = document.querySelector('#whole-content');
let currentLevel = 2;
let h2Counter = 0;
let h3Counter = 0;

function addNumbersToHeadings(element) {
  const docHeadings = element.querySelectorAll('h2, h3');
  for (let i = 0; i < docHeadings.length; i++) {
    const currentProcessedHeading = docHeadings[i];
    const level = parseInt(currentProcessedHeading.tagName.substring(1)); // Extract the heading level from the tag name (e.g., "h2" -> 2)
    // Check if the current heading level is greater than or equal to 2, for Error Logging
    if (level < 2) {
      console.error(`Error: Invalid heading level: ${level}. Only levels 2 and 3 are supported.`);
      continue;
    }

    //Increment and reset the counters
    if (level === 2) {
      h2Counter++;
      h3Counter = 0;
    } else if (level === 3) {
      h3Counter++;
    }

    // Generate new headings text with the Format: Numbers from counters + text
    const putHeadingNumber = (level === 2) ? `${h2Counter}.` : `${h2Counter}.${h3Counter}.`;
    const getHeadingText = currentProcessedHeading.textContent.trim();
    const newHeadingText = `${putHeadingNumber} ${getHeadingText}`;

    // Replace the heading's text content with the new numbered text
    currentProcessedHeading.textContent = newHeadingText;

    // Recursively call this function on the current heading's children
    addNumbersToHeadings(currentProcessedHeading);
  }
}

// Call the recursive function on the article element to add numbers to all headings
addNumbersToHeadings(article);




// GENERATE TABLE OF CONTENTS


const tocHeadings = document.querySelectorAll('h2, h3');
var tocUl = document.createElement("ul");
tocUl.classList.add("toc-styling");

for (var i = 0; i < tocHeadings.length; i++) {
    var tocItemtext = tocHeadings[i].textContent;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = tocItemtext;
    a.href = "#" + tocHeadings[i].id;
    li.appendChild(a);
    // add class "toc-indent" to li element for h3 headings indentation
    if (tocHeadings[i].tagName.toLowerCase() === 'h3') {
        li.classList.add('toc-indent');
    }
    tocUl.appendChild(li);
}

document.getElementById("toc-placeholder").appendChild(tocUl);




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

anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
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
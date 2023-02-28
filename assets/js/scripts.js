
// TABLE OF CONTENTS

// get the container element
var toc = document.getElementById("whole-document");
// get all the heading elements in the container
var headings = toc.querySelectorAll("h2, h3, h4, h5, h6");
// create an ordered list element
var ul = document.createElement("ul");
// iterate over the headings
for (var i = 0; i < headings.length; i++) {
// get the text content of the heading
var text = headings[i].textContent;
// create a list item element with a link to the heading
var li = document.createElement("li");
var a = document.createElement("a");
a.textContent = text;
a.href = "#" + headings[i].id;
li.appendChild(a);
// add the list item to the ordered list
ul.appendChild(li);
}
// add the ordered list to the document
document.getElementById("toc-placeholder").appendChild(ul);


// BACK TO TOP HOVER BUTTON

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.querySelector('.back-to-top').classList.add('show');
} else {
document.querySelector('.back-to-top').classList.remove('show');
}
}
document.querySelector('.back-to-top').addEventListener('click', function(e) {
e.preventDefault();
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});


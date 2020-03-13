var bacon = document.createElement('div');
bacon.className = 'sidebar';
document.querySelector('body').appendChild(bacon);

var egg = document.createElement('div');
egg.className = 'content';
document.querySelector('body').appendChild(egg);

var pages = ['home', "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];

for ( i = 0; i < pages.length; i++ ){	
var toast = document.createElement('a');
toast.innerHTML = pages[i];
toast.setAttribute("href", pages[i] + ".html");
document.querySelector(".sidebar").appendChild(toast);
	}



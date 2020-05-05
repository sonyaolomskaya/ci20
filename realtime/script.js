
// read the JSON file (or, get the live data from NYT)
var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=WMMt7pEXnGGOBzdexaCMpzSy2KAMLVA0"; //your file name (or, the structured URL for API call)
var data = [];

	xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    printTitle(data);
  }
};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function printTitle(data){
		var books = data.results.books;
		for (i = 0; i < books.length; i++) {
 		var item = document.createElement("a");
	item.classList.add('description');

		var anchor = document.createElement("a");
		anchor.innerText = books[i].description;
		anchor.href = books[i].amazon_product_url;
		anchor.target = "_blank";

	var title = document.createElement("p");
	title.classList.add('title');
	title.innerText = books[i].title;


// document.getElementsByClassName(".description").onmouseover = function() {
//     style.display = "block";
// }

// 			$('.description').mouseenter(function() {
// document.querySelector('hover').style.display = "block";
// })

// 		$(anchor).mouseleave(function() {

// })


item.appendChild(anchor);
document.querySelector('.result').appendChild(item);

document.querySelector('.hover').appendChild(title);

}

// $(function() {
//     $(".description").on("mouseenter", function() {
//       $(this).find(".title").first().show();
//     });

//     $(".description").on("mouseleave", function() {
//       $(this).find(".title").first().hide();
//     });
//   });

reorder();
}





function reorder() {
var random = $(".result>a");
for(var i = 0; i < random.length; i++){
    var target = Math.floor(Math.random() * random.length -1) + 1;
    var target2 = Math.floor(Math.random() * random.length -1) +1;
    random.eq(target).before(random.eq(target2));
	}
}


// read the JSON file (or, get the live data from NYT)
var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=WMMt7pEXnGGOBzdexaCMpzSy2KAMLVA0"; //your file name (or, the structured URL for API call)
var data = [];

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    printTitle(data);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printTitle(data) {

  var rawBooks = data.results.books;
  var books = rawBooks.sort(() => Math.random() - 0.5);

  for (i = 0; i < books.length; i++) {

    var anchor = document.createElement("a");
    anchor.innerText = books[i].description;
    anchor.href = books[i].amazon_product_url;
    anchor.classList.add(`link`);
    anchor.classList.add(`test${i+1}`);
    anchor.target = "_blank";

    var title = document.createElement("p");
    title.classList.add(`title`);
    title.classList.add(`test${i+1}`);
    title.innerText = books[i].title;

    anchor.addEventListener("mouseenter", function( event ) {   
      var titleClass = event.srcElement.classList[1];
      var findElements = document.getElementsByClassName(titleClass)
      var title = findElements[1];
      title.style.display = "block";
    }, false);

    anchor.addEventListener("mouseout", function( event ) {   
      var titleClass = event.srcElement.classList[1];
      var findElements = document.getElementsByClassName(titleClass)
      var title = findElements[1];
      title.style.display = "none";
    }, false);

    document.querySelector('.result').appendChild(anchor);
    document.querySelector('.hover').appendChild(title);

  }
}

//sonya

//for fetch to work we need a server
fetch("data.json")
  .then(function(blob){ return blob.json(); })
  .then(function(json){ buildPage(json); });

  function buildPage(data) {
    console.log(data)
    // for (var i = 0; i < data.length; i = i +1) {
    //  console.log(data[i]);
    // }

    //filter is asking for a true or false 
    //for each item we generate a true or false
    //entry is an object
    //entry is each object inside the data
    var Location = data.filter(function(entry){ return entry.Location == "Singapore"; });
    //entry.Location entry.Folder Name
    console.log(Location);
    //data is unaffected
    // var blues = data.filter(function(entry){ return entry.Colors.includes.("blue")});
  }

// for (var i = 0; i = i + 1) {
//  img = document.createElement("img")
//  img.src = data[i].link;
//  vat span = document.createElement("span");
//  span.innerHTML = data[i].caption
// }


function show(target){
document.querySelectorAll("body").forEach(element => { element.style.margin = "0"; });

//for the boxes:
  //hide everything first...
  var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('shown');
  }
  //then show target divs
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++) {
    selected[i].classList.add('shown');
  }

//for the menu:
  //remove highlights from nav first...
  var filter = document.querySelectorAll('.filter');
  for (i = 0; i < filter.length; i++) {
    filter[i].classList.remove('selected');
  }
  //then  highlight the current
    if (target !== ".items"){
    event.target.classList.add('selected'); 
  }

$(document).ready(function(){
  $(".one").mouseenter(function(){
$(".one").addClass(".hover")
  });
  $(".one").mouseleave(function(){
    $(".one").removeClass(".hover");
  });
});
}

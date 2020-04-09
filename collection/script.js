
function show(target){
document.querySelectorAll(".b").forEach(element => { element.style.display = "none"; });
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

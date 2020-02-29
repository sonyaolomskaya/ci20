var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  if (key.toLowerCase() == "a"){
    span.innerHTML = '<iframe  src="https://www.youtube.com/embed/aQXh_AaJXaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "b"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/T2TDSEG57hI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "c"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/pYcGFLgJ8Uo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "d"){
    span.innerHTML = '<iframe  src="https://www.youtube.com/embed/PPOaxHqoYxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "e"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/07-QBnEkgXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "f"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/9oQ628Seb9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "g"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/4WmCBRkWJ54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "h"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/VyHV0BRtdxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "i"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/8ugaeA-nMTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "j"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/iJkspWwwZLM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "k"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/7kSuas6mRpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "l"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/W6iVPCRflQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "m"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/oDU84nmSDZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "n"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/yDJIcYE32NU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "o"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/2ywOPNNii9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "p"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/AcHasH-nLhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "q"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/BBqYaFEWBxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "r"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/NgsQ8mVkN8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "s"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/ByXuk9QqQkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "t"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/RHtluksWi44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }    
  else if (key.toLowerCase() == "u"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/ORFWdXl_zJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "v"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/3fdRKme00uI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "w"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/qGBZWbg_26A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "x"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/VNxwlx6etXI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "y"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/M3ar1tBj_Zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "z"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/yNncHPl1UXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else {
    span.innerHTML = key;
  }
  document.querySelectorAll(".span")[0].appendChild(span);
    // cursor.childNode.insertBefore(span, cursor);
}

function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.keyCode == 13) {
    createLetter("<br>");
  }
  if (e.key == " ") {
    createLetter("&nbsp;");
  }
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  if (displayCount == 1) {
    // document.querySelectorAll("iframe")[0].style.height = "100%";
    //   document.querySelectorAll("iframe")[0].style.width = "100%";
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
  }if (displayCount == 2) {
    // document.querySelectorAll("iframe")[0].style.height = "50%";
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
  } else if (displayCount == 3) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
    // document.querySelectorAll("iframe")[0].style.height = "33%";
   
  } else if (displayCount == 4) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 5 && displayCount <= 8 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 9 && displayCount <= 12 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 13 && displayCount <= 16 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 17 && displayCount <= 20 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1frs";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 21 && displayCount <= 25 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 26 && displayCount <= 30 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  } else if (displayCount >= 31 && displayCount <= 36 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "10%";

  } else if (displayCount >= 37 && displayCount <= 42 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "10%";

  } else if (displayCount >= 43 && displayCount <= 49 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 50 && displayCount <= 54 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "10%";

} else if (displayCount >= 55 && displayCount <= 66 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 67 && displayCount <= 72 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 73 && displayCount <= 78 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 79 && displayCount <= 84 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 85 && displayCount <= 89 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} 
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}




var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  document.querySelectorAll("#landing-page-text").forEach(element => { element.style.display = "none"; });
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  if (key.toLowerCase() == "a"){
    span.innerHTML = '<iframe  src="https://www.youtube.com/embed/aQXh_AaJXaM?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=0&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=aQXh_AaJXaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
    
  }
  else if (key.toLowerCase() == "b"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/T2TDSEG57hI?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=T2TDSEG57hI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  
  }
  else if (key.toLowerCase() == "c"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/pYcGFLgJ8Uo?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=pYcGFLgJ8Uo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
   
  }
  else if (key.toLowerCase() == "d"){
    span.innerHTML = '<iframe  src="https://www.youtube.com/embed/PPOaxHqoYxo?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=PPOaxHqoYxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
    // 
  }
  else if (key.toLowerCase() == "e"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/07-QBnEkgXU?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=07-QBnEkgXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  
  }
  else if (key.toLowerCase() == "f"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/9oQ628Seb9w?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=9oQ628Seb9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  
  } 
  else if (key.toLowerCase() == "g"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/4WmCBRkWJ54?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=4WmCBRkWJ54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "h"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/VyHV0BRtdxo?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=VyHV0BRtdxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "i"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/8ugaeA-nMTc?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=8ugaeA-nMTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "j"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/iJkspWwwZLM?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=iJkspWwwZLM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "k"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/7kSuas6mRpk?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=7kSuas6mRpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "l"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/W6iVPCRflQM?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=W6iVPCRflQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "m"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/oDU84nmSDZY?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=oDU84nmSDZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "n"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/pYcGFLgJ8Uo?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=pYcGFLgJ8Uo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "o"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/2ywOPNNii9w?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=2ywOPNNii9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "p"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/AcHasH-nLhU?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=AcHasH-nLhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }
  else if (key.toLowerCase() == "q"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/BBqYaFEWBxI?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=BBqYaFEWBxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "r"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/NgsQ8mVkN8w?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=NgsQ8mVkN8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "s"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=ByXuk9QqQkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "t"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/RHtluksWi44?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=RHtluksWi44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }    
  else if (key.toLowerCase() == "u"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/ORFWdXl_zJ4?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=ORFWdXl_zJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "v"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/7pBmXkyycWE?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=7pBmXkyycWE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "w"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/qGBZWbg_26A?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=qGBZWbg_26A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "x"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/VNxwlx6etXI?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=VNxwlx6etXI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "y"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/M3ar1tBj_Zk?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=M3ar1tBj_Zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else if (key.toLowerCase() == "z"){
    span.innerHTML = '<iframe src="https://www.youtube.com/embed/yNncHPl1UXg?autoplay=1&showinfo=0&modestbranding=1&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1&playlist=yNncHPl1UXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';  
  }  
  else {
    span.innerHTML = key;
  }
  document.querySelectorAll(".span")[0].appendChild(span);
    // cursor.childNode.insertBefore(span, cursor);
}

function deleteElement() {
  entryCount += 1;
  console.log('letter');
  var letter = Array.from(document.querySelectorAll('span')).pop();
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
  if (displayCount <= 0) {
      document.querySelectorAll("#landing-page-text").forEach(element => { element.style.display = "flex"; });
  }
}

document.onkeydown = function(e) {
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if (e.keyCode == 8) {
    deleteElement();
  } 
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  if (displayCount == 1) {
    // document.querySelectorAll("iframe")[0].style.height = "100%";
    //   document.querySelectorAll("iframe")[0].style.width = "100%";
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "1fr";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
    document.querySelectorAll("iframe").forEach(element => { element.style.height = "100%"; });

  }if (displayCount == 2) {
document.querySelectorAll("iframe").forEach(element => { element.style.height = "50%"; });
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(50%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "1fr";
  } else if (displayCount == 3) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(2, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(2, 1fr)";
   document.querySelectorAll("iframe").forEach(element => { element.style.height = "100%"; });
   
  } else if (displayCount == 4) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(2, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(2, 1fr)";
   document.querySelectorAll("iframe").forEach(element => { element.style.height = "100%"; });

  }  else if (displayCount >= 5 && displayCount <= 6 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(2, 1fr)";
    // document.querySelectorAll("iframe").forEach(element => { element.style.height = "100%"; });
    // document.querySelectorAll("iframe").forEach(element => { element.style.width = "100%"; });

  }  else if (displayCount >= 7 && displayCount <= 8 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(3, 1fr)";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 9 && displayCount <= 12) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(3, 1fr)";
    // document.querySelectorAll("iframe")[0].style.height = "100%";

  }  else if (displayCount >= 13 && displayCount <= 15 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(20%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(33.3%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 16 && displayCount <= 20 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(5, 1fr)";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(4, 1fr)";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  }  else if (displayCount >= 20 && displayCount <= 25 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(20%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(20%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "25%";

  } else if (displayCount >= 26 && displayCount <= 30 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(16.6%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(20%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";

  } else if (displayCount >= 31 && displayCount <= 36 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(16.6%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(16.6%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";

  } else if (displayCount >= 37 && displayCount <= 42 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(14.2%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(16.6%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "5%";

} else if (displayCount >= 43 && displayCount <= 49 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(14.2%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(14.2%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 50 && displayCount <= 56 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(12.5%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(14%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 57 && displayCount <= 64 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(12.5%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(12.5%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 65 && displayCount <= 72 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(11.1%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(12.5%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 73 && displayCount <= 81 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(11.1%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(11.1%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 82 && displayCount <= 90 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(10%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(11.1%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
}  else if (displayCount >= 91 && displayCount <= 100 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(10%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(10%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
} else if (displayCount >= 101 && displayCount <= 110 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(10%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(9%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
}  else if (displayCount >= 111 && displayCount <= 121 ) {
    document.querySelectorAll(".span")[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(9%, 1fr))";
    document.querySelectorAll(".span")[0].style.gridTemplateRows = "repeat(auto-fit, minmax(9%, 1fr))";
    // document.querySelectorAll("iframe")[0].style.height = "10%";
}
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);

}



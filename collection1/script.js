/* -----------------------------------------------
  Make sure you run a local server:
  1. Open Terminal
  2. "cd" into project directory
  3. Type "php -S localhost:8000"
  4. Go to "localhost:8000" from your browser
----------------------------------------------- */

fetch("data.json")
.then(function(blob){ return blob.json(); })
.then(function(json){ buildItem(json); });

  var id;
  var urlParams;
  var queryString;



function buildItem(data){
  //get URL parameter "id"
  queryString = window.location.search;  
   urlParams = new URLSearchParams(queryString);
   id = (urlParams.get('id'));
  console.log('currently seeing item ' + id);
  buildPage(data);

    var nextId, prevId;
  if (id == data.length - 1) {
    nextId = 0;
  }
  else {
    nextId = id + 1;
  }

  if (id == 0) {
    prevId = data.length - 1;
  }
  else {
    prevId = id - 1;
  }

};

  
function buildPage(data) {
      // for (i = 0; i < data.length; i++){
if (id == 'bwdphoto' ) {
  var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Black and White Digital Photography"; });
    // entry.Location entry.FolderName
      console.log(Folder);
      console.log(data);
        Folder.forEach((item) => {
          FolderName = item.Folder;
      console.log(item.File);
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Files';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
else if (id == 'colordphoto') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Color Digital Photography"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
  else if (id == 'colorfphoto') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Color Film Photography"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
    else if (id == 'bwfphoto') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Black and White Film Photography"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
      else if (id == 'posters') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Graphic Design Posters"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
        else if (id == 'books') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Graphic Design Books"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
          else if (id == 'typography') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Graphic Design Typography"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
            else if (id == 'web') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Web Design"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
              else if (id == 'textiles') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Textiles"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
            else if (id == 'drawings') { 
    var FolderName = null;
    var Folder = data.filter(function(entry){ return entry.Folder == "Drawings"; });
    // entry.Location entry.FolderName
        console.log(Folder);
        Folder.forEach((item) => {
              FolderName = item.Folder;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Folder.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
              else if (id == 'singapore') { 
    var FolderName = null;
    var Location = data.filter(function(entry){ return entry.Location == "Singapore"; });
    // entry.Location entry.FolderName
        console.log(Location);
        Location.forEach((item) => {
              FolderName = item.Location;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Location.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
              else if (id == 'maldives') { 
    var FolderName = null;
    var Location = data.filter(function(entry){ return entry.Location == "Maldives"; });
    // entry.Location entry.FolderName
        console.log(Location);
        Location.forEach((item) => {
              FolderName = item.Location;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Location.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                else if (id == 'newyork') { 
    var FolderName = null;
    var Location = data.filter(function(entry){ return entry.Location == "New York"; });
    // entry.Location entry.FolderName
        console.log(Location);
        Location.forEach((item) => {
              FolderName = item.Location;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Location.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                  else if (id == 'la') { 
    var FolderName = null;
    var Location = data.filter(function(entry){ return entry.Location == "Los Angeles"; });
    // entry.Location entry.FolderName
        console.log(Location);
        Location.forEach((item) => {
              FolderName = item.Location;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Location.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                    else if (id == 'london') { 
    var FolderName = null;
    var Location = data.filter(function(entry){ return entry.Location == "London"; });
    // entry.Location entry.FolderName
        console.log(Location);
        Location.forEach((item) => {
              FolderName = item.Location;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Location.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                      else if (id == '2020') { 
    var FolderName = null;
    var Year = data.filter(function(entry){ return entry.Year == "2020"; });
    // entry.Location entry.FolderName
        console.log(Year);
        Year.forEach((item) => {
              FolderName = item.Year;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Year.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                        else if (id == '2019') { 
    var FolderName = null;
    var Year = data.filter(function(entry){ return entry.Year == "2019"; });
    // entry.Location entry.FolderName
        console.log(Year);
        Year.forEach((item) => {
              FolderName = item.Year;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Year.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                          else if (id == '2018') { 
    var FolderName = null;
    var Year = data.filter(function(entry){ return entry.Year == "2018"; });
    // entry.Location entry.FolderName
        console.log(Year);
        Year.forEach((item) => {
              FolderName = item.Year;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Year.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
  }
                            else if (id == '2016') { 
    var FolderName = null;
    var Year = data.filter(function(entry){ return entry.Year == "2016"; });
    // entry.Location entry.FolderName
        console.log(Year);
        Year.forEach((item) => {
              FolderName = item.Year;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Year.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
}
                            else if (id == '2015') { 
    var FolderName = null;
    var Year = data.filter(function(entry){ return entry.Year == "2015"; });
    // entry.Location entry.FolderName
        console.log(Year);
        Year.forEach((item) => {
              FolderName = item.Year;
      console.log(item.File)
      document.getElementById('container')
      // container.innerHTML = '';
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
        //check if hovering is currently a class 
        //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
          imageElem.classList.remove('hovering');
        }
        else {
          imageElem.classList.add('hovering');
        }

        // imageElem.classList.add('hovering');
      }
      document.getElementById('count').innerHTML=Year.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
}
                            else if (id == 'showall') { 
    var FolderName = 'Hardrive';
    var File = data.filter(function(entry){ return entry.File; });
    // entry.Location entry.FolderName
      File.forEach((item) => {
      console.log(item.File)
      document.getElementById('container')
      var imageElem = document.createElement('img');
      var caption = document.createElement('FIGCAPTION');
      var figure = document.createElement('FIGURE');
      var captiontext = document.createTextNode(item.File);
      imageElem.onclick = function(){ 
      //  //check if hovering is currently a class 
      //  //if yes remove hovering and if no add hovering 
        if (imageElem.classList.contains('hovering')) {
        imageElem.classList.remove('hovering');
        }
        else {
        imageElem.classList.add('hovering');
        }
      }
      document.getElementById('count').innerHTML=File.length + ' Objects';
      document.getElementById('name').innerHTML=FolderName;
      imageElem.src = "assets/"+item.File;
      container.append(figure)
      figure.append(imageElem)
      figure.append(caption)
      caption.appendChild(captiontext)
      })
}
}




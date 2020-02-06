$(document).ready(function(){


$('html,body').animate({scrollTop: document.body.scrollHeight},"0s");

  $("a").on('click', function(event) {

  console.log('hash',this.hash)

    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});


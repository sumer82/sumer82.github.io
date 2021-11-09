window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   nav = document.querySelector(".nav");
   nav.style.top = "0";
   //nav.style.backgroundColor = "" ;
  } else {
    document.querySelector(".nav").style.top = "-50px";
  }
}
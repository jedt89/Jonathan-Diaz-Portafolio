$(document).ready(function () {
  $(document).on('mouseup', function (e) {
    const container = $("#navbar-toggler");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('#navbarNav').hide('');
    }
  });

  $('#navbar-toggler').on('click', function () {
    $('#navbarNav').show('');
  });
});


//script proyectos gráficos

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Graficas");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "inline-block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}


// script smoothscroll

ScrollReveal().reveal('.nav');
window.sr = ScrollReveal();
sr.reveal('.nav', {
  duration: 4000,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// script galería

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

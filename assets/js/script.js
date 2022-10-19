// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        // $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

// navbar on scroll
$(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()


Number.prototype.format = function(n) {
  var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
  return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

$('.counter').each(function() {
  $(this).prop('counter', 0).animate({
    counter: $(this).text()
  }, {
    duration: 10000,
    easing: 'easeOutExpo',
    step: function(step) {
      $(this).text('' + step.format());
    }
  });
});


// ------------------ Start ----------------------

document.getElementById("cp-year").innerHTML = new Date().getFullYear();
// conter Boxs
let boxOne = document.getElementsByClassName("boxOne"); // 380+
let boxTwo = document.getElementsByClassName("boxTwo"); // 85+
let boxThree = document.getElementsByClassName("boxThree"); // 100,000+

// Counter function
const counter = () => {
  // First Counter
  let count = setInterval(() => {
    let i = parseInt(boxOne[0].innerText);
    boxOne[0].innerText = (i += 5).toString();
    if (i == 380) {
      clearInterval(count);
    }
  }, 21);

  // Second Counter
  let countTow = setInterval(() => {
    let j = parseInt(boxTwo[0].innerText);
    boxTwo[0].innerText = (j += 5).toString();
    if (j == 85) {
      clearInterval(countTow);
    }
  }, 59);

  // Thired Counter
  let countThree = setInterval(() => {
    let k = parseInt(boxThree[0].innerText);
    boxThree[0].innerText = (k += 500).toString();
    if (k === 100000) {
      clearInterval(countThree);
    }
  }, 5);
};
counter()

//-------------------- End ---------------------
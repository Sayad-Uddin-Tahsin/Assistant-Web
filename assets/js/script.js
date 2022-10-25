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

document.getElementById("cp-year").innerHTML = new Date().getFullYear();

// ------------------ Start ----------------------

// conter Boxs
let boxOne = document.getElementsByClassName("boxOne"); // x
let boxTwo = document.getElementsByClassName("boxTwo"); // y
let boxThree = document.getElementsByClassName("boxThree"); // z

// conter function
const counter = () => {
  // First conter
  const x = 380;
  const y = 85;
  const z = 100000;

  const count = setInterval(() => {
    let i = parseInt(boxOne[0].innerText);
    boxOne[0].innerText = i += 5;
    if (i === x) {
      clearInterval(count);
    }
  }, 10);

  // Second Counter
  const countTow = setInterval(() => {
    let j = parseInt(boxTwo[0].innerText);
    boxTwo[0].innerText = j += 5;
    if (j === y) {
      clearInterval(countTow);
    }
  }, 10);

  // Thired Counter
  const countThree = setInterval(() => {
    let k = parseInt(boxThree[0].innerText);
    boxThree[0].innerText = k += 500;
    if (k === z) {
      clearInterval(countThree);
    }
  }, 5);
  console.log("now it works");
};

// counter();
//-------------------- End ---------------------

const elem = document.querySelector("#statsx");

const observer = new IntersectionObserver(intersectionObserverHandler, {
  root: null,
  rootMargin: "170px",
  threshold: 1.0,
});

observer.observe(elem);

function intersectionObserverHandler(intersectionObserverEntries) {
  const entry0 = intersectionObserverEntries[0];

  if (entry0.target === elem && entry0.isIntersecting) {
    counter();
    observer.unobserve(elem);
  }
}
const fetch = require('node-fetch')
const token = 'MTAzNDAwNjIyODk0NDMxMDMwMg.G-YEfC.fmV6R6Ml4UvFbMdmfk34qhn0gv1Qnu1NMFWrEg'

const fetchUser = async id => {
  const response = await fetch(`https://discord.com/api/v9/users/${id}`, {
    headers: {
      Authorization: `Bot ${token}`
    }
  })
  if (!response.ok) throw new Error(`Error status code: ${response.status}`)
  console.log(response.status)
  return JSON.parse(await response.json())
}
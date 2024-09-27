// JavaScript Document
const menuButton = document.querySelector('.menuButton')
const headerButton = document.querySelector('.buttonHeader')
const footer = document.querySelector('footer') 
const menuBody = document.querySelector('nav')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const section2 = document.querySelector('#sectionTwo')

let lastScrollTop = 0;
let scrollFromTop;


function openMenu(){
  if (menuBody.style.display === "grid") {
    nav.classList.remove("opened");
    nav.classList.add('closing');
    setTimeout(function() {
      menuBody.style.display = "none";
      nav.classList.remove('closing');
      body.classList.remove('disableScrollBody');
      nav.classList.add('closed');
    }, 500);
  } else {
    menuBody.style.display = "grid";
    nav.classList.remove('closed');
    nav.classList.add('opened');
    body.classList.add('disableScrollBody');
  }
}

function scrollHide() {
  scrollFromTop = document.documentElement.scrollTop;
  if (scrollFromTop > lastScrollTop) {
    header.classList.remove("header-down");
    header.classList.add('header-up');
  } else if(scrollFromTop < 100){
    header.classList.remove("header-down");
    header.classList.add('header-up');
  }
  else {
    header.classList.remove('header-up');
    header.classList.add("header-down");
  }
  lastScrollTop = scrollFromTop <= 0 ? 0 : scrollFromTop;
}
window.onscroll = function() {scrollHide()};

function revealText() {
  var wrapper = document.querySelectorAll("section");
  wrapper.forEach(function (parent, index) {
    var windowHeight = window.innerHeight;
    var elementTop = parent.getBoundingClientRect().top;
    var elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      var textElements = parent.querySelectorAll("h2, p");
      var imgElements = parent.querySelectorAll("img");

        textElements.forEach(function (element) {
          setTimeout(function () {
            element.classList.add("animate");
          }, index * 200);
        });

        imgElements.forEach(function (element) {
          setTimeout(function () {
            element.classList.add("animateImages");
          }, index * 200);
        });
      }
  });
}

// Close all the details elements
const details = document.querySelectorAll("details");

details.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) setTargetDetail(detail);
  });
});

function setTargetDetail(targetDetail) {
  details.forEach((detail) => {
    if (detail !== targetDetail) {
      detail.open = false;
    }
  });
}

window.addEventListener("scroll", revealText);
revealText();

menuButton.addEventListener('click', openMenu);
headerButton.addEventListener('click', openMenu);
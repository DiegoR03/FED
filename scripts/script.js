// JavaScript Document
const menuButton = document.querySelector('.menuButton')
const menuBody = document.querySelector('nav')
const header = document.querySelector('header')

let headerHeight = header.offsetHeight;
let lastScrollTop = 0;
let scrollFromTop;

function openMenu(){
  if (menuBody.style.display === "grid") {
    menuBody.style.display = "none";
  } else {
    menuBody.style.display = "grid";
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

menuButton.addEventListener('click', openMenu);
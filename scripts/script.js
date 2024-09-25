// JavaScript Document
const menuButton = document.querySelector('.menuButton')
const headerButton = document.querySelector('.buttonHeader')
const menuBody = document.querySelector('nav')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const section2 = document.querySelector('#sectionTwo')
const gemeraButton = document.querySelector('.GemeraButton')
const attackButton = document.querySelector('.AttackButton')
const jeskoButton = document.querySelector('.AbsolutButton')
const firstH2 = document.getElementById('firstHeader')
const secondH2 = document.getElementById("secondHeader")

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

function changeClasses(removeFirst, removeSecond, AddClass, firstContent, secondContent){
  section2.classList.remove(removeFirst);
  section2.classList.remove(removeSecond);
  section2.classList.add(AddClass);
  firstH2.textContent = firstContent;
  secondH2.textContent = secondContent;
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
headerButton.addEventListener('click', openMenu);

gemeraButton.addEventListener('click', function(){
  changeClasses('Absolut', 'Attack', 'Gemera', "WORLDS FIRST", "MEGA GT FOR FOUR");
}); 
attackButton.addEventListener('click', function(){
  changeClasses('Absolut', 'Gemera', 'Attack', "ROAD LEGAL", "TRACK LEGEND")
});  
jeskoButton.addEventListener('click', function(){
  changeClasses('Gemera', 'Attack', 'Absolut', "FASTEST", "EVER MADE")
});
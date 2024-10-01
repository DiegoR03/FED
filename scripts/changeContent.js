// JavaScript Document
const gemeraButton = document.querySelector('.GemeraButton')
const attackButton = document.querySelector('.AttackButton')
const jeskoButton = document.querySelector('.AbsolutButton')
const firstH2 = document.querySelector('#sectionTwo h2')
const secondH2 = document.querySelector('#sectionTwo p')

function changeClasses(removeFirst, removeSecond, AddClass, firstContent, secondContent){
  section2.classList.remove(removeFirst);
  section2.classList.remove(removeSecond);
  section2.classList.add(AddClass);
  firstH2.textContent = firstContent;
  secondH2.textContent = secondContent;
}

gemeraButton.addEventListener('click', function(){
  changeClasses('Absolut', 'Attack', 'Gemera', "WORLDS FIRST", "MEGA GT FOR FOUR");
}); 
attackButton.addEventListener('click', function(){
  changeClasses('Absolut', 'Gemera', 'Attack', "ROAD LEGAL", "TRACK LEGEND");
});  
jeskoButton.addEventListener('click', function(){
  changeClasses('Gemera', 'Attack', 'Absolut', "FASTEST", "EVER MADE");
});
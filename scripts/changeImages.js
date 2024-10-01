// JavaScript Document
const jeskoImgOne = document.getElementById('JeskoImageOne')
const jeskoImgTwo = document.getElementById('JeskoImageTwo')
const jeskoImgThree = document.getElementById('JeskoImageThree')

const crankshaftBtn = document.getElementById('crankShaftButton')
const cfdBtn = document.getElementById('cfdButton')
const pressureBtn = document.getElementById('pressureButton')

const firstArticle = document.getElementById('backgroundArticle')

const mainImg = document.querySelector('#mainPhoto');
const preImg = document.querySelector('#previewPhoto');

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const currentImage = document.getElementById('currentPage')

let carouselImages = ['images/SecondPage/Carousel/Image1.png',
                      'images/SecondPage/Carousel/Image2.png',
                      'images/SecondPage/Carousel/Image3.png',
                      'images/SecondPage/Carousel/Image4.png',
                      'images/SecondPage/Carousel/Image5.png',
                      'images/SecondPage/Carousel/Image6.png',
                      'images/SecondPage/Carousel/Image7.png',
                      'images/SecondPage/Carousel/Image8.png',
                      'images/SecondPage/Carousel/Image9.png',
                      'images/SecondPage/Carousel/Image10.png',
                      'images/SecondPage/Carousel/Image11.png',
                      'images/SecondPage/Carousel/Image12.png',
                      'images/SecondPage/Carousel/Image13.png'
                    ];
let index = 0;

function changeImages() {
  mainImg.src = carouselImages[index];
  preImg.src = carouselImages[index + 1];
  currentImage.textContent = index + 1;
  index++;
  if(index > 12){
    preImg.src = carouselImages[0];
    index = 0;
  } else if(index == 12){
    mainImg.src = carouselImages[12];
    preImg.src = carouselImages[0];
  }
}

function changeClasses(firstImage, secondImage, thirdImage){
  jeskoImgOne.src = firstImage;
  jeskoImgTwo.src = secondImage;
  jeskoImgThree.src = thirdImage;
}

window.onload = function () {
  setInterval(changeImages, 10000);
};

crankshaftBtn.addEventListener('click', function(){
  changeClasses('images/SecondPage/JeskoAbsolutFront.png', 'images/SecondPage/JeskoAbsolutBack.png', 'images/SecondPage/JeskoAbsolutSide.png');
}); 
cfdBtn.addEventListener('click', function(){
  changeClasses('images/SecondPage/JeskoAirodynamics.png', 'images/SecondPage/JeskoSmallBack.jpg', 'images/SecondPage/jeskoEmpty.png');
});  
pressureBtn.addEventListener('click', function(){
  changeClasses('images/SecondPage/JeskoTempOne.png', 'images/SecondPage/JeskoTempTwo.png', 'images/SecondPage/JeskoTempThree.png');
});
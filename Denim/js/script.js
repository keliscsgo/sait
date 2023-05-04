let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');
let obj = document.querySelectorAll('.slider__photos_item');
let slider = document.querySelector('.slider__photos');
let slides=slider.children;

const direction=(condition, startFrom)=>{
    slides[condition]?
    slides[condition].classList.add('big'):
    startFrom.classList.add('big')
}
const swipe=(e)=>{
    let big = document.querySelector('.big');
    let numberOfBig = big.dataset.number;
    big.classList.remove('big');
    if(e.target.classList.contains('goRight')){
        direction((+numberOfBig+1), slides[0])
    }else if(e.target.classList.contains('goLeft')){
        direction((+numberOfBig-1), slides[slides.length-1])
    }
}
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.addEventListener('click',
    function(){
        let big = document.querySelector('.big');
        let clickedSRC = slide.innerHTML;
        let bigSRC = big.innerHTML;
        slide.innerHTML=bigSRC;
        big.innerHTML=clickedSRC;
    })
}
arrow_right.addEventListener('click', swipe);
arrow_left.addEventListener('click', swipe);


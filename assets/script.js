const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"divDots":'<div class="dot dot_selected"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>'
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"divDots":'<div class="dot"></div><div class="dot dot_selected"></div><div class="dot"></div><div class="dot"></div>'
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"divDots":'<div class="dot"></div><div class="dot"></div><div class="dot dot_selected"></div><div class="dot"></div>'
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"divDots":'<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot dot_selected"></div>'
	}
]

arrowLeft.addEventListener('click', imgChange);
arrowRight.addEventListener('click', imgChange);

function imgChange(e) {
	console.log(e);
	e.target.className;
	const isArrowRight = e.target.className.includes('arrow_right');
	console.log(isArrowRight);
	
	if (isArrowRight) {
		index++;	
	}
	else {
		index--;
	}

	loop();
	
	document.querySelector('.banner-img').src='assets/images/slideshow/' + slides[index].image;
	document.querySelector('#banner p').innerHTML=slides[index].tagLine;
	document.querySelector('.dots').innerHTML=slides[index].divDots;
	// alert('OK'); 
}

function loop() {
	if (index > slides.length - 1) {
		index = 0;
	}
	if (index < 0) {
		index = slides.length - 1;
	}
}

/* function loop() {
	if (index > 3) {
		index = 0;
	}
	if (index < 0) {
		index = 3;
	}
} */


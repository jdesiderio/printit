const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
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
	
	document.querySelector('.banner-img').src='assets/images/slideshow/' + slides[index].image;
	document.querySelector('#banner p').innerHTML=slides[index].tagLine;
	// alert('OK'); 
}

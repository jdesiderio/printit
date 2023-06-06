const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");

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

let index = 0;

arrowLeft.addEventListener('click', imgChange);
arrowRight.addEventListener('click', imgChange);

slides.forEach ((element, index) => { 
	const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
	if (index === 0) {
		dot.classList.add("dot_selected");
	}
}) ;

function imgChange(e) {
	const isArrowRight = e.target.className.includes('arrow_right');
	
	if (isArrowRight) {
		index++;	
	}
	else {
		index--;
	}

	// gérer la circulaire 
	if (index > slides.length - 1) {
		index = 0;
	}
	if (index < 0) {
		index = slides.length - 1;
	}

	// dots
	document.querySelector('.dot_selected').className='dot';
	const dot = document.querySelectorAll('.dot');
	dot[index].className='dot dot_selected';

	document.querySelector('.banner-img').src='assets/images/slideshow/' + slides[index].image;
	document.querySelector('#banner p').innerHTML=slides[index].tagLine;

}

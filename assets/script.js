/*Déclarations des constantes et variables necessaires*/ 
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
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const dots = document.querySelector(".dots");
const items = document.querySelector('.banner-img');
const baseUrlImage = "assets/images/slideshow/";
const text = document.getElementById("banner").querySelector("p");


let currentSlide = 0;


/*Génération bulletPoints du slider */

function generateBulletPoints(){
/*forEach prend en paramètre une fonction callback, et l'execute en lui passant chaque élément de la collection.
Une fonction callback est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action*/
slides.forEach(i=>{
/*createElement sert a creer un élement HTML*/
let bulletPoint = document.createElement("div");
/* classList est une propriété en lecture seule qui est utilisée pour renvoyer des classes CSS*/
bulletPoint.classList.add("dot");
/*appendChild() est utilisée pour ajouter des éléments à la fin d'un élément parent spécifié*/
dots.appendChild(bulletPoint);
})
}
generateBulletPoints();

function bulletPointSelected(){
	let allDots = document.querySelectorAll(".dot");
	for (let i = 0; i < allDots.length; i++){
	allDots[i].classList.remove("dot_selected");
if(currentSlide===i){
	allDots[i].classList.add("dot_selected");
}
}
}
bulletPointSelected();


/*addEventListener() agit en ajoutant une fonction ou un objet pour qu'ici l'effet de click fonctionne */
arrowLeft.addEventListener("click", () => {
console.log("click fleche gauche");
if (currentSlide === 0) {
	currentSlide = slides.length - 1;
		// Si currentSlide = Slides.lenght -1  la position prendra le dernier element du tableau 
	} else {
		currentSlide = currentSlide - 1;
		// Sinon la variable currentSlide est decrementée de 1 
	}
	items.src = baseUrlImage + slides[currentSlide].image;
	// on indique la source à afficher selon le numéro du compteur.
	text.innerHTML = slides[currentSlide].tagLine;
	bulletPointSelected();
}
);


arrowRight.addEventListener("click",() => {
console.log("click fleche droite");
if (currentSlide === slides.length - 1) {
	currentSlide = 0;
	// Si currentSlide = slides.length-1(Dernier element du tableau) currentSlide est reset a 0
} else {
	currentSlide = currentSlide + 1;
	// Sinon  la variable currentSlide est  incrementée de 1
}
//quand le compteur est au dernier index du tableau (longueur du tableau -1), on remet à zéro sinon on lui ajoute +1
items.src = baseUrlImage + slides[currentSlide].image;
text.innerHTML = slides[currentSlide].tagLine;
// La fonction sert a nous indiquer ou nous somme (grace a une boule qui a la classe dot_selected)
bulletPointSelected();
} )
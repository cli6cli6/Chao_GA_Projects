var catPics = ["img/cat0.png", "img/cat1.png", "img/cat2.png", "img/cat3.png", "img/cat4.png"];
var currentImage = -4;

function changePicture(whichCat) {
	currentImage = whichCat;
	
	var x = document.getElementById('mainImage');
	x.setAttribute('src', catPics[currentImage]);

}

function nextImage() {
	currentImage++;
	
	if(currentImage >= catPics.length) {
		currentImage = 0;
	}
	
	changePicture(currentImage);
}

function prevImage () {
	currentImage = currentImage - 1;
	if(currentImage < 0) {
		currentImage = catPics.length - 1;
	}
	changePicture(currentImage);
}


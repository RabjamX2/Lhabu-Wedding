let carouselImages = document.querySelector(".carousel-images");
let images = Array.from(carouselImages.children);

carouselImages.addEventListener("scroll", () => {
	let viewportCenter = carouselImages.scrollLeft + carouselImages.clientWidth / 2;
	images.forEach((img, index) => {
		let imgCenter = img.offsetLeft - carouselImages.offsetLeft + img.clientWidth / 2;
		let distanceFromCenter = Math.abs(viewportCenter - imgCenter);
		let scale = 1 - Math.min(distanceFromCenter / carouselImages.clientWidth, 0.5); // Change as needed
		img.style.transform = `scale(${scale})`;
	});
});

images.forEach((img, index) => {
	img.addEventListener("click", () => {
		let scrollPosition = img.offsetLeft - (carouselImages.clientWidth - img.clientWidth) / 2;
		carouselImages.scrollLeft = scrollPosition;
	});
});

function adjustFontSize() {
	const container = document.getElementById("landing-header");
	let fontSize = 20; // Start with a default font size
	container.style.fontSize = fontSize + "px";

	// Reduce the font size until the text fits in one line
	while (container.scrollWidth > container.offsetWidth) {
		fontSize--;
		container.style.fontSize = fontSize + "px";
	}
}

// Call this function whenever the text changes and on window resize
window.onresize = adjustFontSize;
adjustFontSize();

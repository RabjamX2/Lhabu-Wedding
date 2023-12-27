let carouselImages = document.querySelector(".carousel-images");
let images = Array.from(carouselImages.children);

carouselImages.addEventListener("scroll", () => {
	let viewportCenter = carouselImages.scrollLeft + carouselImages.clientWidth / 2;
	images.forEach((img) => {
		let imgCenter = img.offsetLeft - carouselImages.offsetLeft + img.clientWidth / 2;
		let distanceFromCenter = Math.abs(viewportCenter - imgCenter);

		let scale = 1 - Math.min(distanceFromCenter / carouselImages.clientWidth, 0.2); // Change as needed
		img.style.transform = `scale(${scale})`;
	});
});

images.forEach((img) => {
	img.addEventListener("click", () => {
		let scrollPosition = img.offsetLeft - (carouselImages.clientWidth - img.clientWidth) / 2;
		carouselImages.scrollLeft = scrollPosition;
	});
});

function adjustFontSize() {
	const container = document.getElementById("landing-header");
	let fontSize = 100; // Start with a default font size
	container.style.fontSize = fontSize + "px";

	// Reduce the font size until the text fits within the width and height of the container
	while (container.scrollWidth > container.offsetWidth || container.offsetHeight > screen.availHeight / 3) {
		fontSize--;
		if (fontSize <= 0) break; // Prevents font size from becoming negative
		container.style.fontSize = fontSize + "px";
	}
}

window.onresize = adjustFontSize;
adjustFontSize();

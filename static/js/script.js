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

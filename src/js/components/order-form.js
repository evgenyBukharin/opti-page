const orderSection = document.querySelector(".order");
const orderForm = document.querySelector(".order__form");
const feedbackForm = document.querySelector(".feedback__form");
const orderContainer = document.querySelector(".order__container");
const orderOverlay = document.querySelector(".order__overlay");
const feedbackButton = document.querySelector(".feedback__button-send");
const backBtn = document.getElementById("backOrderForm");
const openBtn = document.getElementById("openOrderForm");
const closeBtn = document.getElementById("closeOrderForm");
const coolButton = document.getElementById("coolButton");

if (coolButton !== null) {
	coolButton.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
	});
}

if (openBtn !== null) {
	openBtn.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
	});
}

if (closeBtn !== null) {
	closeBtn.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
		orderOverlay.classList.remove("order__overlay-active");
	});
}

if (orderSection !== null) {
	orderSection.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
		orderOverlay.classList.remove("order__overlay-active");
	});
}

if (orderContainer !== null) {
	orderContainer.addEventListener("click", (event) => {
		event.stopPropagation();
	});
}

if (orderForm !== null) {
	orderForm.addEventListener("submit", (event) => {
		event.preventDefault();
	});
}

if (feedbackForm !== null) {
	feedbackForm.addEventListener("submit", (event) => {
		event.preventDefault();
	});
}

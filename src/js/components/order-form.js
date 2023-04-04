const orderSection = document.querySelector(".order");
const orderForm = document.querySelector(".order__form");
const orderContainer = document.querySelector(".order__container");
const orderOverlay = document.querySelector(".order__overlay");
const backBtn = document.getElementById("backOrderForm");
const openBtn = document.getElementById("openOrderForm");
const closeBtn = document.getElementById("closeOrderForm");
const header = document.querySelector(".header");

import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

function headerScrollEnable() {
	header.style.width = "100%";
	header.style.position = "fixed";
	header.nextElementSibling.style.marginTop = header.offsetHeight + "px";
}

function headerScrollDisable() {
	header.style.width = "unset";
	header.style.position = "relative";
	header.nextElementSibling.style.marginTop = 0;
}

if (openBtn !== null) {
	openBtn.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
		disableScroll();
		headerScrollEnable();
	});
}

if (closeBtn !== null) {
	closeBtn.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
		enableScroll();
		headerScrollDisable();
	});
}

if (orderSection !== null) {
	orderSection.addEventListener("click", () => {
		orderSection.classList.toggle("order-active");
		orderOverlay.classList.remove("order__overlay-active");
		enableScroll();
		headerScrollDisable();
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
		orderOverlay.classList.toggle("order__overlay-active");
	});
}

if (backBtn !== null) {
	backBtn.addEventListener("click", () => {
		orderOverlay.classList.toggle("order__overlay-active");
	});
}

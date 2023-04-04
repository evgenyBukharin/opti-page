const nameInput = document.getElementById("name");
const telInput = document.getElementById("tel");
const linkInput = document.getElementById("link");

const mediaQuery768 = window.matchMedia("(max-width: 768px)");

if (mediaQuery768.matches) {
	nameInput.setAttribute("placeholder", "Имя*");
	telInput.setAttribute("placeholder", "Номер телефона*");
	linkInput.setAttribute("placeholder", "Ссылка на ТЗ в figma ");
}

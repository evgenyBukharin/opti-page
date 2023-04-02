const dt = new DataTransfer();
const fileInput = document.querySelector(".feedback__input-file");
let filesList = document.querySelector(".feedback__list-file");

fileInput.addEventListener("change", () => {
	// очистка списка файлов нужна/нет?
	// filesList.innerHTML = "";

	for (let i = 0; i < fileInput.files.length; i++) {
		let newFileBlock = `<div class="feedback__item-file">
								<div class="feedback__container-doc">
									<img
										loading="lazy"
										src="./img/doc.svg"
										class="image feedback__icon-doc"
										width="44"
										height="44"
										alt="Иконка документ"
									/>
									<div class="feedback__container-text">
										<span class="title__h6">${fileInput.files.item(i).name}</span>
										<span class="title__h6 title__h6-grey">${bytesToSize(fileInput.files.item(i).size)}</span>
									</div>
								</div>
								<span class="feedback__button-remove">
									<img
										loading="lazy"
										src="./img/close.svg"
										class="image feedback__icon-close"
										width="12"
										height="12"
										alt="Иконка закрыть"
									/>
								</span>
							</div>`;
		filesList.insertAdjacentHTML("beforeend", newFileBlock);
		dt.items.add(fileInput.files.item(i));
	}
	let removeButtons = document.querySelectorAll(".feedback__button-remove");
	removeButtons.forEach((button) => {
		button.addEventListener("click", () => {
			removeFilesItem(button);
		});
	});
	fileInput.files = dt.files;
});

function removeFilesItem(target) {
	let name = target.previousElementSibling.innerHTML;
	target.parentNode.remove();
	for (let i = 0; i < dt.items.length; i++) {
		if (name === dt.items[i].getAsFile().name) {
			dt.items.remove(i);
		}
	}
	fileInput.files = dt.files;
}

function bytesToSize(bytes) {
	const sizes = ["Байт", "Кбайт", "Мбайт", "Гбайт", "Тбайт"];
	if (bytes === 0) return "n/a";
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
	if (i === 0) return `${bytes} ${sizes[i]}`;
	return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

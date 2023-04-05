import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// создаем главный таймлайн
const mainTl = new gsap.timeline({});

// таймлайн первой секции
const heroContainer = document.querySelector(".hero__container");
const heroTitle = document.querySelector(".hero__title");
heroTitle.style.opacity = "1";
heroContainer.style.opacity = "1";
let heroCounter = 0;
const heroTl = new gsap.timeline({});
const heroSplitArray = Array.from(splitText(heroTitle).querySelectorAll(".letter"));
heroSplitArray.forEach((el) => {
	console.log(el.innerHTML);
	if (el.innerHTML == "1" && heroCounter == 0) {
		el.closest(".word").insertAdjacentHTML("beforeBegin", "<br>");
		heroCounter++;
	}
	heroTl.fromTo(
		el,
		1 / heroSplitArray.length,
		{
			opacity: 0,
			y: 300,
		},
		{
			opacity: 1,
			y: 0,
		}
	);
});
heroTl.fromTo(".hero__text", { opacity: 0 }, { opacity: 1 }).fromTo(".hero__button", { opacity: 0 }, { opacity: 1 });

// таймлайн второй секции
const whyTl = new gsap.timeline();
let whySplitArray = Array.from(splitText(document.querySelector(".why__title")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		1 / whySplitArray.length,
		{
			y: 100,
		},
		{
			y: 0,
		}
	);
});
whyTl.fromTo(".why__item-1 .line-horizontal-top", { width: 0 }, { width: "100%", duration: 0.5 });
whyTl.fromTo(".why__item-1 .line-vertical-right", { height: 0 }, { height: "100%", duration: 0.5 }, "-=0.5");
whySplitArray = Array.from(
	splitText(document.querySelector(".why__item-1 .why__subtitle")).querySelectorAll(".letter")
);
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		1 / whySplitArray.length,
		{
			y: 100,
		},
		{
			y: 0,
		}
	);
});
whySplitArray = Array.from(splitText(document.querySelector(".why__item-1 .why__text")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		1 / whySplitArray.length,
		{
			y: 100,
		},
		{
			y: 0,
		}
	);
});
whyTl.fromTo(".why__item-2 .line-horizontal-top", { width: 0 }, { width: "100%", duration: 0.5 });
whyTl.fromTo(".why__item-2 .line-vertical-right", { height: 0 }, { height: "100%", duration: 0.5 }, "-=0.5");
whySplitArray = Array.from(
	splitText(document.querySelector(".why__item-2 .why__subtitle")).querySelectorAll(".letter")
);
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		1 / whySplitArray.length,
		{
			y: 100,
		},
		{
			y: 0,
		}
	);
});
whySplitArray = Array.from(splitText(document.querySelector(".why__item-2 .why__text")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		1 / whySplitArray.length,
		{
			y: 100,
		},
		{
			y: 0,
		}
	);
});

// добавляем таймлайны секций в главный таймлайн
mainTl.add(heroTl).add(whyTl);

// функция разделения текста на буквы
function splitText(el) {
	el.innerHTML = el.innerText.replace(/(\S*)/g, (m) => {
		return (
			`<div style="display: inline-block" class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div style='display: inline-block' class='letter'>$&</div>") +
			`</div>`
		);
	});
	return el;
}

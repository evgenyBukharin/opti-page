import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// функция разделения текста на буквы и слова
function splitText(el) {
	el.innerHTML = el.innerHTML.replace(/(\S*)/g, (m) => {
		return (
			`<div style="display: inline-block" class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div style='display: inline-block' class='letter'>$&</div>") +
			`</div>`
		);
	});
	const words = el.querySelectorAll(".word");
	words.forEach((word) => {
		if (word.innerHTML == "") {
			word.remove();
		}
	});
	return el;
}

const heroTl = gsap.timeline({});

const heroContainer = document.querySelector(".hero__container");
const heroTitle = document.querySelector(".hero__title");
heroTitle.style.opacity = "1";
heroContainer.style.opacity = "1";
let heroCounter = 0;
const heroSplitArray = Array.from(splitText(heroTitle).querySelectorAll(".letter"));
heroSplitArray.forEach((el) => {
	if (el.innerHTML == "1" && heroCounter == 0) {
		el.closest(".word").insertAdjacentHTML("beforeBegin", "<br>");
		heroCounter++;
	}
	heroTl.fromTo(
		el,
		{
			y: 200,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 2 / heroSplitArray.length,
		}
	);
});
heroTl.fromTo(".hero__text", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "+=0.2");
heroTl.fromTo(".hero__button", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "+=0.2");

// таймлайн второй секции
const whyTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".why",
		start: "-40% center",
		toggleActions: "play pause resume play",
	},
});
let whySplitArray = Array.from(splitText(document.querySelector(".why__title")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / whySplitArray.length,
		}
	);
});

// первый блок текста
whyTl.fromTo(
	".why__item-1 .line-horizontal-top",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.3 }
);
whyTl.fromTo(
	".why__item-1 .line-vertical-right",
	{
		height: 0,
	},
	{ height: "100%", duration: 0.3 },
	"-=0.5"
);
whySplitArray = Array.from(
	splitText(document.querySelector(".why__item-1 .why__subtitle")).querySelectorAll(".letter")
);
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5 / whySplitArray.length,
		}
	);
});
whySplitArray = Array.from(splitText(document.querySelector(".why__item-1 .why__text")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / whySplitArray.length,
		}
	);
});

// второй блок текста
whyTl.fromTo(
	".why__item-2 .line-horizontal-top",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 }
);
whyTl.fromTo(
	".why__item-2 .line-vertical-right",
	{
		height: 0,
	},
	{ height: "100%", duration: 0.5 },
	"-=0.5"
);
whySplitArray = Array.from(
	splitText(document.querySelector(".why__item-2 .why__subtitle")).querySelectorAll(".letter")
);
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5 / whySplitArray.length,
		}
	);
});
whySplitArray = Array.from(splitText(document.querySelector(".why__item-2 .why__text")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / whySplitArray.length,
		}
	);
});

// третий блок текста
whyTl.fromTo(
	".why__item-3 .line-horizontal-top",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 }
);
whySplitArray = Array.from(
	splitText(document.querySelector(".why__item-3 .why__subtitle")).querySelectorAll(".letter")
);
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5 / whySplitArray.length,
		}
	);
});
whySplitArray = Array.from(splitText(document.querySelector(".why__item-3 .why__text")).querySelectorAll(".letter"));
whySplitArray.forEach((el) => {
	whyTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / whySplitArray.length,
		}
	);
});

// секция cool
const coolTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".cool",
		start: "30% center",
		toggleActions: "play pause resume play",
	},
});
coolTl.fromTo(
	".cool__container-left .line-horizontal-top",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 }
);
coolTl.fromTo(
	".cool__container-image",
	{
		y: 50,
		opacity: 0,
	},
	{ y: 0, opacity: 1, duration: 1 }
);
coolTl.fromTo(
	".cool__container-left .line-horizontal-bottom",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 }
);
coolTl.fromTo(
	".cool__container-left .line-vertical-right",
	{
		height: 0,
	},
	{ height: "100%", duration: 0.5 }
);
coolTl.fromTo(
	".cool__container-right .line-horizontal-top",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 },
	"-=0.5"
);
coolTl.fromTo(
	".cool__container-right .line-horizontal-bottom",
	{
		width: 0,
	},
	{ width: "100%", duration: 0.5 },
	"-=0.5"
);
let coolSplitArray = Array.from(splitText(document.querySelector(".cool__title")).querySelectorAll(".letter"));
coolSplitArray.forEach((el) => {
	coolTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / coolSplitArray.length,
		}
	);
});
coolTl.fromTo(
	".cool__list",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1,
	}
);
const coolItems = document.querySelectorAll(".cool__item");
coolItems.forEach((item, idx) => {
	let tempTl = gsap.timeline({
		delay: -1,
	});
	coolSplitArray = Array.from(splitText(item).querySelectorAll(".letter"));
	coolSplitArray.forEach((el) => {
		tempTl.fromTo(
			el,
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1 / coolSplitArray.length,
			}
		);
	});
	coolTl.add(tempTl);
});
coolTl.fromTo(".cool__button", { opacity: 0 }, { opacity: 1, duration: 0.5 });

// секция cases
const casesTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".cases",
		start: "top 80%",
		toggleActions: "play pause resume play",
	},
});

let casesSplitArray = Array.from(splitText(document.querySelector(".cases__title")).querySelectorAll(".letter"));
casesSplitArray.forEach((el) => {
	casesTl.fromTo(
		el,
		{
			opacity: 0,
			y: 200,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1 / casesSplitArray.length,
		}
	);
});

const casesItems = Array.from(document.querySelectorAll(".cases__item"));
const casesImages = Array.from(document.querySelectorAll(".cases__image"));
const casesLinesHorizontalTop = Array.from(document.querySelectorAll(".cases__item .line-horizontal-top"));
const casesLinesHorizontalBottom = Array.from(document.querySelectorAll(".cases__item .line-horizontal-bottom"));
const casesTime = Array.from(document.querySelectorAll(".cases__time"));
const casesTitleArticle = Array.from(document.querySelectorAll(".cases__item .cases__title-article"));
const casesTitleArticleArray = [];
const casesTags = Array.from(document.querySelectorAll(".cases__item .cases__tags"));
const casesLinesVerticalRight = Array.from(document.querySelectorAll(".cases__item .line-vertical-right"));
casesTitleArticle.forEach((elem) => {
	casesTitleArticleArray.push(Array.from(splitText(elem).querySelectorAll(".letter")));
});

casesItems.forEach((elem, idx) => {
	let caseTl = gsap.timeline();
	ScrollTrigger.create({
		trigger: elem,
		start: "-10% 50%",
		markers: true,
		toggleActions: "play pause resume none",
		animation: caseTl
			.from(casesImages[idx], {
				y: 50,
				duration: 1,
				ease: "power2.in",
				opacity: 0,
			})
			.fromTo(
				casesLinesHorizontalTop[idx],
				{
					width: 0,
				},
				{
					width: "100%",
					duration: 0.5,
				}
			)
			.fromTo(
				casesLinesVerticalRight[idx],
				{
					height: 0,
				},
				{
					height: "100%",
					duration: 0.5,
				}
			)
			.fromTo(
				casesLinesHorizontalBottom[idx],
				{
					width: 0,
					duration: 0.5,
					onComplete: function () {
						let casesSplitArray = casesTitleArticleArray[idx];
						casesSplitArray.forEach((el) => {
							caseTl.to(el, {
								opacity: 1,
								y: 0,
								duration: 1 / casesSplitArray.length,
							});
						});
					},
				},
				{
					width: "100%",
				}
			)
			.fromTo(
				casesTime[idx],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
				}
			)
			.fromTo(
				casesTags[idx],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
				}
			),
	});
});

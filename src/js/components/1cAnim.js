import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const header1c = document.querySelector(".header-1c");
if (header1c !== null) {
	const tl = gsap.timeline();
	tl.fromTo(".hero-1c", { x: "0", y: "0" }, { y: 0 });
	tl.fromTo(".client1c", { x: "0", y: "0" }, { x: 0 });

	const main = document.querySelector(".main");
	ScrollTrigger.create({
		animation: tl,
		trigger: ".site-container",
		start: "top top",
		end: () => main.offsetHeight / 2,
		scrub: true,
		pin: true,
		markers: true,
	});
}

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Mobile nav
const buttonNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

buttonNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Sticky navigaiton
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the wievport
		root: null,
		threshold: 0,
		rootMargin: "-72px",
	}
);

obs.observe(sectionHeroEl);

// const myName = "Danyil Serafin";
// const h1 = document.querySelector(".heading-primary");

// console.log(myName);

// h1.addEventListener("click", function () {
// 	h1.textContent = myName;
// 	h1.style.backgroundColor = "red";
// 	h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

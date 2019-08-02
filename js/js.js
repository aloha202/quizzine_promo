// main page animation

const mainInfo = document.querySelector('.main-info');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');



const tl = new TimelineMax();


tl.fromTo(mainInfo, 1, {height: '0%'}, {height: '90%', ease:Power2.easeInOut})
  .fromTo(mainInfo, 1.2, {width:'100%'}, {width: '80%', ease:Power2.easeInOut})
  .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease:Power2.easeInOut}, "-=1.2")


//nav animation

  const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	// toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});

	// animate links
		navLinks.forEach((link, index) => {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
		});
}

navSlide();




TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var dur = 0.35;
var tlPanel = new TimelineMax();
tlPanel.fromTo("section.panel.turqoise", 1, {x: "100%"}, {x: "0%"});     
tlPanel.fromTo("section.panel.bordeaux", 1, {x: "100%"}, {x: "0%"});


new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin("#pinMaster")
  .setTween(tlPanel)
//   .addIndicators({
//   colorTrigger: "white",
//   colorStart: "white",
//   colorEnd: "white",
//   indent: 40
// })
  .addTo(controller);



// custom cursor


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})


        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })










































































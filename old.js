// instruction section animation

// var controller = new ScrollMagic.Controller();
// var animateFromRight = new TimelineMax();

// var headlineInstruction = document.querySelector('.headline-instruction');
// var triggerBlock = document.querySelector('.trigger-block');
// var instructionSecond = document.querySelector('.headline-instruction-second');
// var myContainer = document.querySelector('.my-container');
// var instructionThird = document.querySelector('.headline-instruction-third')
// var instruction = document.querySelector('.instruction')

// animateFromRight
// 				.fromTo(headlineInstruction, 1.5, {x: 0}, {x:-1400, ease: Power2.easeOut})
// 				.fromTo(instructionSecond, 1.5, {x: 0}, {x:-1400, ease: Power2.easeOut}, '-=1.5')
// 				.fromTo(instructionThird, 1.5, {x: 0}, {x:-2800, ease: Power2.easeOut}, '-=0.5')

// var scene = new ScrollMagic.Scene({
// 	triggerElement: instruction,
// 	delay:5,
// 	triggerHook: 0.3	
// })	

// // .setPin(instruction)
// .setTween(animateFromRight).addTo(controller);



// var headlineInstruction = document.querySelector('.headline-instruction');
// var triggerBlock = document.querySelector('.trigger-block');
// var instruction = document.querySelector('.instruction')

// var toTheLeft = {
// 	values: [
// 		{x:-1000}
// 	]
// }

// var tween = new TimelineLite();

// tween.add(
// 	TweenLite.to(headlineInstruction, 1, {
// 		bezier: toTheLeft,
// 		ease: Power1.easeInOut
// 	})

// )


// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
// 	triggerElement: triggerBlock,
// 	duration: 2000,
// 	triggerHook: 1
 	
// })

// .setTween(tween)
// .addIndicators()
// .setPin(instruction)
// .addTo(controller)













	<div class="container">
		<div class="how-to-use d-flex justify-content-center">
			<h2>How to start using Quizzine?</h2>
		</div>
		<div class="scroll-container d-flex">
		<div class="headline-instruction d-flex align-items-center">
			<div class="written-instruction">
			<h5 class="mt-5">step 1</h5>
			<h3>Fill in the form below and get access to your personal account</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odit inventore id repellendus ipsum tenetur quia maxime. Necessitatibus nesciunt quidem ut, natus delectus minima incidunt cumque libero, ratione eos! Aut!</p>
			</div>
			<div class="instruction-image d-flex justify-content-center">
				<img src="img/sitting-1.png" alt="">
			</div>
		</div>
		<div class="headline-instruction headline-instruction-second d-flex align-items-center">
			<div class="written-instruction">
			<h5 class="mt-5">step 1</h5>
			<h3>Fill in the form below and get access to your personal account</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odit inventore id repellendus ipsum tenetur quia maxime. Necessitatibus nesciunt quidem ut, natus delectus minima incidunt cumque libero, ratione eos! Aut!</p>
			</div>
			<div class="instruction-image d-flex justify-content-center">
				<img src="img/sitting-1.png" alt="">
			</div>
		</div>
		<div class="headline-instruction headline-instruction-third d-flex align-items-center">
			<div class="written-instruction">
			<h5 class="mt-5">step 1</h5>
			<h3>Fill in the form below and get access to your personal account</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odit inventore id repellendus ipsum tenetur quia maxime. Necessitatibus nesciunt quidem ut, natus delectus minima incidunt cumque libero, ratione eos! Aut!</p>
			</div>
			<div class="instruction-image d-flex justify-content-center">
				<img src="img/sitting-1.png" alt="">
			</div>
		</div>
		<div class="trigger-block"></div>
		</div>  
	</div>

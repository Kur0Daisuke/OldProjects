let i = 1;

var tl = anime.timeline({
	autoplay: false,
});
var s2 = anime.timeline({
	autoplay: false,
});
var go = document.querySelector("#world");

anime({
	targets: '.wrapper',
	translateY: 45,
	easing: 'easeInOutQuad',
	direction: 'alternate'
})

tl
.add({
	targets: '.wrapper',
	translateX: 550,
	translateY: 10,
	duration: 500,
	easing: 'easeInOutSine',
	scale: 1.5,
	left: 0
})

.add({
	targets: '.text',
	top: 200,
	left: 40,
	duration: 600
})

s2
.add({
	targets: '.wrapper',
	left: 1000,
	duration: 500
})

.add({
	targets: '.text',
	top: -200,
	left: -400,
	duration: 600
})
document.querySelector('.wrapper').onclick = function(){
	i = i+1;
	if (i == 3) {
		document.querySelector('.wrapper').onclick = tl.play;
		setTimeout(function(){
		 	document.querySelector('.wrapper').onclick = function(){
				console.log("NANI");
			}
			document.querySelector('#world').onclick = function(){
				var camera = document.createElement("div");
				var map = document.createElement("div");
				var ch = document.createElement("p");
				ch.setAttribute("id", "test");
				camera.setAttribute("class", "camera");
				map.setAttribute("class", "map");
				document.querySelector('.sc2').appendChild(camera);
				document.querySelector('.camera').appendChild(map);
  				document.querySelector('.map').appendChild(ch);
  				document.querySelector('.wrapper').onmouseover = s2.play;
			}
		}, 500);
	}
	console.log(i);
};

let cube = document.querySelector('.box');
window.onmousemove = function(e){
	let x = e.clientX/5;
	let y = e.clientY/5;
	cube.style.transform = "rotateY(" + x + "deg) rotateX(" + y +"deg)";
}


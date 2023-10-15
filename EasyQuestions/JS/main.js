let fq = [];
let sq = [];
let ans = [];
let mark = 0;
let sort = [], answ;
let answer = [];
var buttons = [];
let last = "";
let mistakes = [], remistake;

//check is where we check the answers and say its correct or not :P
function check() {
	document.getElementById("container").style.opacity = "0%";
	document.getElementById("container").style.zIndex = "-1";
	setTimeout(function(){
		document.getElementById("answer").style.opacity = "100%";
		document.getElementById("answer").style.zIndex = "1";
	}, 900);
	for (var i = 1; i <= 5; i++) {
		fq.push(document.getElementById('q'+i).innerHTML);
		sq.push(document.getElementById('s'+i).innerHTML);
	}
	for (var i = 0; i <= 4; i++) {
		if (parseInt(fq[i]) > parseInt(sq[i])) {
			ans.push(">");
		}else if (parseInt(fq[i]) < parseInt(sq[i])) {
			ans.push("<");
		}else if (parseInt(fq[i]) == parseInt(sq[i])) {
			ans.push("=");
		}
	}
	var mistak = 1;
	for (var j = 1; j <= 5; j++) {
		if (document.getElementById('ans'+j).value == ans[j-1]) {
			document.getElementById("answ"+j).innerHTML = "CORRECT";
			document.getElementById("answ"+j).style.color = "limegreen";
			mark = mark + 10;
		}else {
			document.getElementById("answ"+j).innerHTML = "WRONG";
			document.getElementById("answ"+j).style.color = "red";
			mistakes.push(document.getElementById("ans"+j).value);
			mistak += 1;
			document.getElementById("mistakes").innerHTML = mistak + " mistakes";
		}	
	}
	

	//rearrange questions

	if (answer == answ) {
		document.getElementById('answ6').innerHTML = "CORRECT";
		document.getElementById("answ6").style.color = "limegreen";
		mark = mark + 50;
	}else {
		document.getElementById("answ6").innerHTML = "WRONG";
		document.getElementById("answ6").style.color = "red";
	}
	
	document.getElementById("a1").innerHTML = ans;
	document.getElementById("mistakes").innerHTML = mistakes;
	
	document.getElementById("a2").innerHTML = sort;
	
	document.getElementById("title").innerHTML = "You've Scored " + mark + " marks!";
	//extra : reactions xD

	if (mark == 0 ||
		mark < 50) {
		document.getElementById("reactions").innerHTML = "why u so dumb";
}else if (mark == 50 ||
	mark < 100) {
	document.getElementById("reactions").innerHTML = "hmm not bad but try again";
}else if (mark == 100) {
	document.getElementById("reactions").innerHTML = "You've did it";
	toggleConfetti();
	setTimeout(() => {
		toggleConfetti()
	}, 200)
}
mark = 0;
reset();
document.getElementById("s").disabled = false;
mistakes = [];
remistake = [];
}

function generate() {

	
	document.getElementById("container").style.opacity = "100%";
	document.getElementById("container").style.transform = "translateX(0%)";
	document.getElementById("container").style.zIndex = "1";
	setTimeout(function(){
		document.getElementById("answer").style.opacity = "0%";
		document.getElementById("answer").style.zIndex = "-1";
		document.getElementById("answer").style.top = "500px";
	}, 60);

	answer = [];
	buttons = [];
	last = "";
	// big generator
	document.getElementById("s").disabled = true;
	for (var i = 1; i <= 5; i++) {
		document.getElementById('q'+i).innerHTML = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
		document.getElementById('s'+i).innerHTML = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
		document.getElementById("answ"+i).innerHTML = "";
		document.getElementById("ans"+i).value = "";
		document.getElementById("answ6").innerHTML = "";
		document.getElementById("arans").value = "";
	}

	for (var i = 1; i < 11; i++) {
		document.getElementById("btn"+i).disabled = false;
	}

	//arrange sentences

	var arrange = [], random = [], num = Math.floor(Math.random() * 20) + 5;

	for (var i = 0; i < 10; i++) {
		random.push(Math.ceil(Math.random() * 13) * (Math.round(Math.random()) ? 1 : -1) + " ");
			// for (var j = i+1; j < num; j++) {
			// 	if (random[i] == random[i+j]) {
			// 		let st = random[i];
			// 		random[i] = random[i+j];
			// 		random[i+j] = st;
			// 	}
			// }

			if (arrange.length == 0) {
				arrange.push(random);
			}else {
				for (var j = 0; j <= arrange.length; j++) {
					if (arrange[i] == random) {
						random = Math.ceil(Math.random() * 20) * (Math.round(Math.random()) ? 1 : -1) + " ";
						j = 0;
					}else {
						if (j == arrange.length-1) {
							arrange.push(random);
							j = arrange.length;
						}
					}
				}
			}
		}
		console.log("questions = ", random);
		document.getElementById("qu").innerHTML = random;

	//answers calculator
	for (var i = 1; i < 11; i++) {
		document.getElementById("btn"+i).innerHTML = random[i-1];
	}

	sort = random;
	console.log(sort);

	// for (var i = 0; i < sort.length; i++) {
	// 	for (var j = 0; j <= sort.length; j++) {
	// 		if (sort[j] > sort[j+1]) {
	// 			let trash = sort[j];
	// 			sort[j] = sort[j+1];
	// 			sort[j+1] = trash;
	// 		}
	// 	}
	// }
	sort.sort(function(a, b){return a - b});
	answ = sort.toString();

	console.log("answers = ", sort);
	console.log(answ);
}

function add(btn) {
	answer.push(document.getElementById(btn.id).innerHTML);
	buttons.push(btn.id);
	document.getElementById("arans").value = answer;
	document.getElementById(btn.id).disabled = true;
	console.log(answer, buttons);
}

function resetans() {
	last = (buttons.pop()).toString();
	answer.pop();
	document.getElementById("arans").value = answer;
	console.log(last);
	document.getElementById(last).disabled = false;
	
}

function reset() {
	fq = [];
	sq = [];
	ans = [];
}

function answers() {
	for (var i = 1; i <= 5; i++) {
		document.getElementById("a1").innerHTML = ans;
	}
}

var starte = false;
function start() {

	// anime({
	// 	targets: '.path',
	// 	strokeDashoffset: [anime.setDashoffset, 0],
	// 	easing: 'easeInOutSine',
	// 	duration: 1500,
	// 	delay: function(el, i) { return i * 250 },
	// 	direction: 'alternate',
	// 	loop: true
	// });
	document.getElementById("answer").style.display = "none";
	document.getElementById("container").style.display = "none";
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Start Your Questions";
	document.body.appendChild(btn);
	btn.setAttribute("id", "myBtn");
	document.getElementById("myBtn").addEventListener("click", function() {
		document.getElementById("answer").style.display = "block";
		document.getElementById("container").style.display = "block";
		document.getElementById("myBtn").style.display = "none";
	});
	generate();
	
}

console.log(Date.now);





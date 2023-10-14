var player1 = "X"; player2 = "O"; current = "";

function st() {
	if (document.getElementById('p1data').value == document.getElementById('p2data').value || 
		document.getElementById('p1data').value == "" ||
		document.getElementById('p2data').value == "") {
		alert("You're Not Supposed To Do That!");
	document.getElementById('p1data').value = "";
	document.getElementById('p2data').value = "";
}else{
	player1 = document.getElementById('p1data').value;
	player2 = document.getElementById('p2data').value;
	current = player1;
	document.getElementById('p1data').disabled = true;
	document.getElementById('p2data').disabled = true;
	document.getElementById('curr').innerHTML = current + " Turn!";
	document.getElementById('bl').classList.toggle("active");
	document.getElementById('start').disabled = true;
	document.getElementById('r').disabled = true;
	document.getElementById("p1").style.padding = "1px 30px";
	document.getElementById("p2").style.padding = "1px 30px";
	document.getElementById("start").style.marginTop = "13%";
	document.getElementById("ai").style.marginTop = "13%";
}
for (var i = 1; i <= 9; i++) {
	document.getElementById(i).disabled = false;
}
}

function ticatoe(btn) {
	document.getElementById(btn.id).innerHTML = current;
	if (document.getElementById(btn.id).innerHTML = current) {
		document.getElementById(btn.id).disabled = true;
	}
	wincheck();
	if (current == player1) {
		current = player2;
	}else {
		current = player1;
	}

	document.getElementById('curr').innerHTML = current + " Turn!";

	console.log(current,document.getElementById('curr').value = current + " Turn!");
}

function wincheck(){
	if (document.getElementById('1').innerHTML == document.getElementById('2').innerHTML && 
		document.getElementById('2').innerHTML == document.getElementById('3').innerHTML &&
		document.getElementById('1').innerHTML == document.getElementById('3').innerHTML &&
		document.getElementById('1').innerHTML != "") {
		document.getElementById('win').innerHTML = current + " Won";
	document.getElementById('curr').innerHTML = "";
	document.getElementById('r').disabled = false;
	disable();
	document.getElementById('1').style.backgroundColor = "#FFDB50";
	document.getElementById('2').style.backgroundColor = "#FFDB50";
	document.getElementById('3').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('4').innerHTML == document.getElementById('5').innerHTML && 
	document.getElementById('5').innerHTML == document.getElementById('6').innerHTML &&
	document.getElementById('4').innerHTML == document.getElementById('6').innerHTML &&
	document.getElementById('4').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('4').style.backgroundColor = "#FFDB50";
document.getElementById('5').style.backgroundColor = "#FFDB50";
document.getElementById('6').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('7').innerHTML == document.getElementById('8').innerHTML && 
	document.getElementById('8').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('7').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('7').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('7').style.backgroundColor = "#FFDB50";
document.getElementById('8').style.backgroundColor = "#FFDB50";
document.getElementById('9').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('1').innerHTML == document.getElementById('4').innerHTML && 
	document.getElementById('4').innerHTML == document.getElementById('7').innerHTML &&
	document.getElementById('1').innerHTML == document.getElementById('7').innerHTML &&
	document.getElementById('1').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('1').style.backgroundColor = "#FFDB50";
document.getElementById('4').style.backgroundColor = "#FFDB50";
document.getElementById('7').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('3').innerHTML == document.getElementById('6').innerHTML && 
	document.getElementById('6').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('3').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('3').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('3').style.backgroundColor = "#FFDB50";
document.getElementById('6').style.backgroundColor = "#FFDB50";
document.getElementById('9').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('2').innerHTML == document.getElementById('5').innerHTML && 
	document.getElementById('5').innerHTML == document.getElementById('8').innerHTML &&
	document.getElementById('2').innerHTML == document.getElementById('8').innerHTML &&
	document.getElementById('2').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('2').style.backgroundColor = "#FFDB50";
document.getElementById('5').style.backgroundColor = "#FFDB50";
document.getElementById('8').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('1').innerHTML == document.getElementById('5').innerHTML && 
	document.getElementById('5').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('1').innerHTML == document.getElementById('9').innerHTML &&
	document.getElementById('1').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('1').style.backgroundColor = "#FFDB50";
document.getElementById('5').style.backgroundColor = "#FFDB50";
document.getElementById('9').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('3').innerHTML == document.getElementById('5').innerHTML && 
	document.getElementById('5').innerHTML == document.getElementById('7').innerHTML &&
	document.getElementById('3').innerHTML == document.getElementById('7').innerHTML &&
	document.getElementById('3').innerHTML != "") {
	document.getElementById('win').innerHTML = current + " Won";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
disable();
document.getElementById('3').style.backgroundColor = "#FFDB50";
document.getElementById('5').style.backgroundColor = "#FFDB50";
document.getElementById('7').style.backgroundColor = "#FFDB50";
}
else if (document.getElementById('1').innerHTML != "" && 
	document.getElementById('2').innerHTML != "" &&
	document.getElementById('3').innerHTML != "" &&
	document.getElementById('4').innerHTML != "" &&
	document.getElementById('5').innerHTML != "" &&
	document.getElementById('6').innerHTML != "" &&
	document.getElementById('7').innerHTML != "" &&
	document.getElementById('8').innerHTML != "" &&
	document.getElementById('9').innerHTML != "") {
	document.getElementById('win').innerHTML = "Draw!";
document.getElementById('r').disabled = false;
document.getElementById('curr').innerHTML = "";
for (var i = 1; i <= 9; i++) {
	document.getElementById(i).style.backgroundColor = "#FFDB50";
}
}
}

function disable() {
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).disabled = true;
	}
}

function reset() {
	document.getElementById('r').disabled = true;
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).disabled = false;
		document.getElementById(i).innerHTML = "";
		document.getElementById(i).style.backgroundColor = "#E2E2E2";
	}
	current = "";
	document.getElementById('win').innerHTML = "";
	document.getElementById('curr').innerHTML = "";
	document.getElementById('p1data').disabled = false;
	document.getElementById('p2data').disabled = false;
	document.getElementById('p1data').value = "";
	document.getElementById('p2data').value = "";
	document.getElementById('start').disabled = false;
	if (document.getElementById('bl').classList.toggle("active")) {
		document.getElementById('bl').classList.toggle("");
	}
	document.getElementById("p1").style.padding = "150px 30px";
	document.getElementById("p2").style.padding = "150px 30px";
	document.getElementById("start").style.marginTop = "40%";
	document.getElementById("ai").style.marginTop = "40%";
}

for (var i = 1; i <= 10; i++) {
	console.warn("Warning : Why You Here?");
}
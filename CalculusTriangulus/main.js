function calculate() {
	var num1 = parseInt(document.getElementById('select1').value);
	var num2 = parseInt(document.getElementById('select2').value);

	var op = document.getElementById('operator').value;
	if (op == "+") {
		document.getElementById('answer').value = num1 + num2;
	}else if(op == "-") {
		document.getElementById('answer').value = num1 - num2;
	}else if(op == "*") {
		document.getElementById('answer').value = num1 * num2;
	}else if(op == "/") {
		document.getElementById('answer').value = num1 / num2;
	}else{
		alert("STFU IT WONT WORK!");
	}
}

function stars() {
	var amnt = document.getElementById('answer').value;
	var final = "";
	var element = document.getElementById("change");

	for (var i = 1; i <= amnt; i++) {
		for (var j = 1; j<= amnt; j++){
			final = final + "* ";
		}
		final = final + "<br>";
	}
	document.getElementById('transla').innerHTML = final;
	if (amnt == "number") {
		alert("select some numbers and calculate");
	}else if (amnt == document.getElementById('answer').value) {
		element.classList.toggle("active");
		document.getElementById("change").disabled = false;
	}
}

function change() {
	var amnt = document.getElementById('answer').value;
	var final = "";
	var chan = document.getElementById('change').value;
	if (chan == "triangle") {
		for (var i = 1; i <= amnt; i++){
			for (var j = 1; j <= i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "mtraingle") {
		for (var i = 1; i <= amnt; i++){
			for (var k = 0; k < amnt - i; k++) {
				final = final + "&nbsp;&nbsp;&nbsp;";
			}
			for (var j = 1; j <= i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "rtraingle") {
		for (var i = 1; i <= amnt; i++){
			for (var j = 0; j <= amnt - i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "rmtraingle") {
		for (var i = 1; i <= amnt; i++){
			for (var k = 2; k <= i; k++){
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 0; j <= amnt - i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "pyramid") {
		for (var i = 1; i <= amnt; i++){
			for (var k = 0; k < amnt - i; k++) {
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 1; j <= i*2 - 1; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "rpyramid") {
		for (var i = 1; i <= amnt; i++){
			for (var k = 1; k < i; k++) {
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 1; j <= amnt*2 - (i*2 - 1); j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "diamond") {
		for (var i = 1; i <= amnt; i++){
			for (var k = 0; k < amnt - i; k++) {
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 1; j <= i*2 - 1; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		for (var i = 2; i <= amnt; i++){
			for (var k = 1; k < i; k++) {
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 1; j <= amnt*2 - (i*2 - 1); j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "hdiamond") {
		for (var i = 1; i <= amnt; i++){
			for (var j = 1; j <= amnt - i; j++){
				final = final + "* ";
			}
			for (var j = 0; j <= i*2 - 1; j++){
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 1; j <= amnt - i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		for (var i = 1; i <= amnt; i++){
			for (var j = 2; j <= i; j++){
				final = final + "* ";
			}
			for (var j = 0; j <= amnt*2 - (i*2 - 1); j++){
				final = final + "&nbsp;&nbsp;";
			}
			for (var j = 2; j <= i; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}else if (chan == "square") {
		for (var i = 1; i <= amnt; i++) {
			for (var j = 1; j<= amnt; j++){
				final = final + "* ";
			}
			final = final + "<br>";
		}
		document.getElementById("transla").innerHTML = final;
	}
}
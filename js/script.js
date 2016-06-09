function changer() {
	var element = document.getElementById("appear");
	var text = "HOW YA LIKE ME NOW?!";
	if (element.innerHTML == "") {
		element.innerHTML = text;
	}
	else {
		element.innerHTML = "";
	}
}
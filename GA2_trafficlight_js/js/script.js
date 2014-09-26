function changeLight(newColor) { 
	var goLight = document.getElementById("green");
	var caution = document.getElementById("yellow");
	var stop = document.getElementById("red");
	
	goLight.style.backgroundColor= newColor;
	caution.style.backgroundColor= newColor;
	stop.style.backgroundColor= newColor;
	}
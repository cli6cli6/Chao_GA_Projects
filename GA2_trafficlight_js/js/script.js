function changeLight(newColor) { 
	var goLight = document.getElementById("green");
	var caution = document.getElementById("yellow");
	var stop = document.getElementById("red");
	
	goLight.style.backgroundColor = "grey";
	caution.style.backgroundColor = "grey";
	stop.style.backgroundColor = "grey";

	var whichLight = document.getElementById(newColor);
	whichLight.style.backgroundColor = newColor;
}


// Hey Chao, good work! Code looks good and lights are functional. Even if they're not actign exactly the way you wanted, writing good code and getting the HTML and JS files to talk to each other is 90% of the battle.

// Here's why you were turning on every light with each click: When a user clicked on any button, you were telling your code to grab all of the traffic lights and to change all of their background colors to the color specified in the function call ( changeLight('red'), changeLight('green'), etc... ).
// To turn on an individual light, the first batch of style chagnes should turn all of the lights off. THEN, the following call should grab just the light that corresponds to the button that was clicked, and change just that light to the color specified in our function call. 

// I created this example in your code above.

// To explain: lines 2 - 8 turn all of the lights to grey. Line 10 then takes our function call (in this case)
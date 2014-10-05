var choice = ["rock", "paper", "scissors"];

function evaluateChoices (playerChoice, cpuChoice) {
console.log("Computer Choice: "+cpuChoice+", "+"Player Choice: "+ playerChoice);
if (playerChoice === "rock"){
	if(cpuChoice === "paper"){return 2;}
		//0=draw, 1=player wins, 2= player loses
	if(cpuChoice === "scissors"){ return 1;}
	if(cpuChoice === "rock"){return 0;}
	}
	
if (playerChoice === "paper"){
	if(cpuChoice === "paper"){return 0;}
	if(cpuChoice === "scissors"){ return 2;}
	if(cpuChoice === "rock"){return 1;}
}
if (playerChoice === "scissors"){
	if(cpuChoice === "paper"){return 1;}
	if(cpuChoice === "scissors"){ return 0;}
	if(cpuChoice === "rock"){return 2;}
}
}


$( document ).ready(function() {
    console.log( "ready!" );
    
  $("#submit").on("click",function(){
  var variable = $("#choice").val();
  
  var cpuVariable = choice[Math.floor(Math.random()*choice.length)];
  
  if (variable === "random") {
  	variable = choice[Math.floor(Math.random()*choice.length)];
  }
  
  $("#results").text("Computer Choice: "+cpuVariable+", "+"Player Choice: "+ variable);
  
  evaluateChoices(variable, cpuVariable);
  console.log(evaluateChoices(variable, cpuVariable));
  switch (evaluateChoices(variable, cpuVariable)) {
  	case 0: 
  	$("#reveal").text("Tie")
  	break;
  	
  	case 1: 
  	$("#reveal").text("Player Wins!")
  	break;
  	
  	case 2:
  	$("#reveal").text("Player Loses")
  	break;
  }

  });
  
  
  
});


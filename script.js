var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var dir= document.getElementById('direction');
var body= document.getElementsByTagName("body")[0];

var output=document.getElementsByTagName("h2")[0];



function changeBackgroundColor(){

	// output.innerHTML= "linear-gradient(to right,"+color1.value+","+color2.value+")";
	output.innerHTML= "linear-gradient("+direction.value+","+color1.value+","+color2.value+")";
	body.style.background = "linear-gradient("+direction.value+","+color1.value+","+color2.value+")";

}

function changeDirection() {

	output.innerHTML= "linear-gradient("+direction.value+","+color1.value+","+color2.value+")";
	body.style.background = "linear-gradient("+direction.value+","+color1.value+","+color2.value+")";
}



color1.addEventListener("input",changeBackgroundColor);
color2.addEventListener("input",changeBackgroundColor);
direction.addEventListener("input",changeDirection);

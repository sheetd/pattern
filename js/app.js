$(document).ready(function() {
    drawCanvas();
});

// Update sliders with # values
function outputUpdate(int) {
	document.querySelector("#cellCountDisplay").value = int;
}

function drawCanvas() {
	// Draw grid lines
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");

	for (var x = 0.5; x < 501; x += 10) {
	  context.moveTo(x, 0);
	  context.lineTo(x, 381);
	}

	for (var y = 0.5; y < 381; y += 10) {
	  context.moveTo(0, y);
	  context.lineTo(500, y);
	}

	context.strokeStyle = "#ddd";
	context.stroke();
}

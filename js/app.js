$(document).ready(function() {
  drawCanvas();
});

// Update sliders with # values
function outputUpdate(iStep) {
  document.querySelector('#cellCountDisplay').value = iStep;
}

//var iStep = 100;
var xCount = 801;
var yCount = 101;

function drawCanvas() {
  // Set Canvas size
  $('#myCanvas').attr('width' , xCount);
  $('#myCanvas').attr('height' , yCount);

  // Draw grid lines
  var c = document.getElementById('myCanvas');
  var context = c.getContext('2d');

  // Verticals
  for (var x = 0.5; x < xCount; x += iStep) {
    context.moveTo(x , 0);
    context.lineTo(x , yCount);
  }

  // Horizontals
  for (var y = 0.5; y < yCount; y += iStep) {
    context.moveTo(0 , y);
    context.lineTo(xCount - 1 , y);
  }

  context.strokeStyle = '#ddd';
  context.stroke();
}

window.onload = function(){

  let canvas = document.querySelector('#canvas');
  let ctx = canvas.getContext('2d');

  canvas.style.height = '300px';
  canvas.style.width = '700px';
  let widthOfCanvas = 700;
  let heightOfCanvas = 300;
  let yPoints = 14;
  let xPoints = 29;

  // draws horizontal ruler
  document.querySelectorAll('.horizontal-ruler').forEach(function(ruler){
    let shiftOne = xPoints - 1;
    let smallerRuler = widthOfCanvas - 20;
    for (let i = 1; i <= shiftOne; i++){
      var newDiv = document.createElement('span');
      newDiv.style.display = 'inline-block';
      newDiv.textContent = i * 10;
      newDiv.style.width = (smallerRuler / shiftOne).toString() + 'px';
      console.log(newDiv.style.width);
      ruler.appendChild(newDiv);
    }
  });

  document.querySelectorAll('.vertical-ruler').forEach(function(ruler){
    let shiftOne = yPoints;
    let smallerRuler = heightOfCanvas - 10;
    for (let i = 1; i <= shiftOne; i++){
      var containerDiv = document.createElement('div');
      containerDiv.style.position = 'relative';
      containerDiv.style.height = (smallerRuler / shiftOne).toString() + 'px';
      var newDiv = document.createElement('span');
      newDiv.style.display = 'inline-block';
      newDiv.style.position = 'absolute';
      newDiv.style.bottom = 0;
      newDiv.textContent = i * 10;
      containerDiv.appendChild(newDiv);
      ruler.appendChild(containerDiv);
    }
  });

  // draws the grid
  for (let i = 1; i <= xPoints; i++){
    var xCoord = i * 10;
    ctx.fillStyle='black';
    for (let j = 1; j <= yPoints; j++){
      var yCoord = j * 10;
      ctx.fillRect(xCoord, yCoord, 1, 1);
    }
  }

  // draw below


  // RECTANGLE
  // draws a filled rectangle
  // ctx.fillRect(xPos, yPos, widthInPx, heightInPx)

  // draws a rectangular outline
  // ctx.strokeRect(xPos, yPos, widthInPx, heightInPx)

  // clears the rectangular area
  // ctx.clearRect(x, y, width, height)

  // DRAW LINE
  // ctx.beginPath();
  // ctx.moveTo(75, 50);
  // ctx.lineTo(100, 75);
  // ctx.lineTo(100, 25);

  // ctx.stroke()
  // draw shape by stroking outline

  // ctx.fill();
  // draws a solid shape by filling content area

  // ARC
  //Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).
  // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  // ctx.stroke() || ctx.fill()

  //Draws an arc with the given control points and radius, connected to the previous point by a straight line.
  // ctx.arcTo(x1, y1, x2, y2, radius)

  // ctx.beginPath();
  // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  // ctx.moveTo(110, 75);
  // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  // ctx.moveTo(65, 65);
  // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  // ctx.moveTo(95, 65);
  // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  // ctx.stroke();

}



// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGameLibrary(800, 600);

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  console.log(keyIsPressed);

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  ctx.fillRect(mouseX, mouseY, 50, 50);

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

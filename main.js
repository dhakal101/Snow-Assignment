// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGameLibrary(800, 600);


// Global Variables
let snowflakes = [];
for (let n = 0; n < 2; n++) {
    snowflakes.push({
    x: Math.randomDec(0, cnv.width),
    y: Math.randomDec(0, cnv.height),
    r: Math.randomDec(1, 5),
    s: Math.randomDec(1, 5)
  })
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Start Drawing tiny Snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    
    // Move snowflakes
    snowflakes[i].y += snowflakes[i].s;

    // Make snowflakes reappear at the top   
    if (snowflakes[i].y > 600) {
      snowflakes[i].y = i * 0;
    }

    // Draw snowflakes
    ctx.fillStyle = "White";
    ctx.fillCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].r);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Event 
document.addEventListener("keydown", keydownhandler);

function keydownhandler(eventcode) {
  
  if (event.code == "ArrowRight") {
    // Add a Snowflake at a random spot
    snowflakes.push({
      x: Math.randomDec(0, cnv.width),
      y: Math.randomDec(0, cnv.height),
      r: Math.randomDec(1, 5),
      s: Math.randomDec(1,5)
    })
  } else if (event.code == "ArrowLeft") {
    // Remove the first Snowflake added
    snowflakes.shift();
  }
}
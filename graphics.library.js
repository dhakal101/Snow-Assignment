// Game Library to Extend html canvas drawing capabilities and game logic
// Library requires a global cnv and ctx
// Must call initGameLibrary after defining global cnv and ctx

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let keyIsPressed = {};

// INIT GRAPHICS - INITIALIZE CANVAS & DRAW FUNCTIONS
function initGameLibrary(initWidth, initHeight) {
  cnv.width = initWidth;
  cnv.height = initHeight;

  // Draw a line from (x1, y1) to (x2, y2)
  ctx.line = function (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // Draw an outlined triangle with vertices (x1, y1), (x2, y2), (x3, y3)
  ctx.strokeTriangle = function (x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath(); // Go back to start of path
    ctx.stroke(); // Draw outline
  }

  // Draw a filled triangle with vertices (x1, y1), (x2, y2), (x3, y3)
  ctx.fillTriangle = function (x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill(); // Fill Triangle
  }

  // Draw an outlined quadrilateral with vertices (x1, y1), (x2, y2), (x3, y3), (x4, y4)
  ctx.strokeQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.closePath();
    ctx.stroke(); // Draw outline
  }

  // Draw a filled quadrilateral with vertices (x1, y1), (x2, y2), (x3, y3), (x4, y4)
  ctx.fillQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.fill(); // Draw outline
  }

  // Draw an outlined circle with center (x, y) and radius of r
  ctx.strokeCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // Draw a filled circle with center (x, y) and radius of r
  ctx.fillCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Draw an ellipse at center (x,y) with a horizontal radius of hr and a vertical radius of vr
  ctx.strokeEllipse = function (x, y, hr, vr) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(hr, vr);
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
  }

  // Draw an ellipse at center (x,y) with a horizontal radius of hr and a vertical radius of vr
  ctx.fillEllipse = function (x, y, hr, vr) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(hr, vr);
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }

  // Return distance between (x1, y1, x2, y3)
  ctx.dist = function (x1, y1, x2, y2) {
    return Math.hypot(y2 - y1, x2 - x1);
  }

  // Check if point (x,y) is in circle object with properties x, y and r.
  ctx.pointInCircle = function (x, y, circle) {

  }

  // Check if point (x,y) is in rectangle object with properties x, y, w and h.
  ctx.pointInRect = function (x, y, rect) {

  }

  // Check if two circle objects collide
  ctx.circleCollide = function (circle1, circle2) {

  }

  // Check if two rectangle objects collide
  ctx.rectCollide = function (rect1, rect2) {

  }
} // end initGameLibrary()

// MOUSE STUFF
document.addEventListener("mousedown", () => mouseIsPressed = true);
document.addEventListener("mouseup", () => mouseIsPressed = false);
document.addEventListener("mousemove", mousemoveHandlerLib);

function mousemoveHandlerLib(event) {
  // Save previous mouse location
  pmouseX = mouseX;
  pmouseY = mouseY;

  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}

// KEY STUFF
document.addEventListener("keydown", (e) => keyIsPressed[e.keyCode] = true);
document.addEventListener("keyup", (e) => keyIsPressed[e.keyCode] = false);
//Screen Variables
let screenWidth = 500;
let screenHeight = 500;

//Apple Variables
let apples = [];
let appleWidth = 20;
let appleHeight = 20;
let appleVelocity = 0.5;
let numDown = 12;
let numAcross = 7;
let hGap = 30;
let vGap = 30;
let vArea = (screenWidth - (numDown - 1) * hGap) / 2;
let wArea = 20;
let shiftDown = 40;
let appleImg;

//Arrow Variables
let arrowWidth = 100;
let arrowHeight = 20;
let arrow;

//Ball Variables
let balls = [];
let ballWidth = 10;
let ballHeight = 10;
let ballVelocity = 5;

//Preloading Images
function preload() {
  appleImg = loadImage("assets/apples.png");
}

//Function setup for arrow and calling creatApples function
function setup() {
  createApples();
  arrow = new Arrow(screenWidth / 2, screenHeight - arrowHeight / 2);
  createCanvas(screenWidth, screenHeight);
  background(255);
}

//Function draw for arrow and background
function draw() {
  noStroke();
  background(135, 206, 235);
  arrow.render();
  arrow.move();
  let shift = false;

  //For each apple it will render and move
  apples.forEach((apple) => {
    apple.move();
    apple.render();
    apple.pos.x >= screenWidth ? (shift = true) : null;
    apple.pos.x <= 0 ? (shift = true) : null;
  });

  //Shift Condition
  if (shift) {
    apples.forEach((apple) => {
      apple.shift();
    });
  }

  //for loop in Reverse iteration for balls and apples
  for (let s = balls.length - 1; s >= 0; s--) {
    balls[s].move();
    balls[s].render();
    for (let t = apples.length - 1; t >= 0; t--) {
      if (balls[s].hits(apples[t])) {
        apples.splice(t, 1);
        balls.splice(s, 1);
        break;
      }
    }
  }
}

//Listener Functions
//When Space is KeyPressed The balls enters and hits the apple
function keyPressed() {
  if (keyCode === 32) {
    balls.push(new Ball(arrow.pos.x, screenHeight - arrowHeight));
  }

  //When Left and Right Arrow is KeyPressed arrow moves in both directions
  if (keyCode === RIGHT_ARROW) {
    arrow.setDirection(1);
  } else if (keyCode === LEFT_ARROW) {
    arrow.setDirection(-1);
  }
}

//Calling createApples()
function createApples() {
  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
      apples.push(new Apple(down * hGap + vArea, across * vGap + wArea));
    }
  }
}

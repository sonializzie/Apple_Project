//Class for Apple and constructor
class Apple {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.velocity = appleVelocity;
  }

  //Rendering apples when released
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    image(appleImg, 0, 0, appleWidth, appleHeight);
    pop();
  }

  //Moving apples
  move() {
    this.pos.x += this.velocity;
  }

  //Calling the shift method
  shift() {
    this.pos.y += shiftDown;
    this.velocity *= -1;
  }
}

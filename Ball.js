//Class for Ball and constructor
class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.velocity = ballVelocity;
  }

  //Rendering balls
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(128, 128, 128);
    ellipse(0, 0, ballWidth, ballHeight);
    pop();
  }

  //Moving balls
  move() {
    this.pos.y -= this.velocity;
  }

  //When apple gets hits it disappears
  hits(apple) {
    let distance = p5.Vector.sub(this.pos, apple.pos).mag();

    if (distance < 30) {
      return true;
    } else {
      return false;
    }
  }
}

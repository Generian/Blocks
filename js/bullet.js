function Ball() {
  this.angle = 0;
  this.x = width / 2;
  this.y = height / 2;
  this.DirX = sin(this.angle);
  this.DirY = cos(this.angle);
  this.speed = 15;
  this.dim = 20;
  this.xe = this.x + this.dim;
  this.ye = this.y + this.dim;

  this.show = function() {
    fill(255);
    strokeWeight(0);
    ellipse(this.x, this.y, this.dim, this.dim);
  }

  this.update = function() {
    this.x += this.DirX * this.speed;
    this.y += this.DirY * this.speed;
  }

  this.changeDir = function(paddle) {
    if ((paddle.y - this.y) < this.speed && this.x >= paddle.x && this.x <= paddle.x + paddle.length) {
      this.changeAngle(paddle);
      this.DirY = -this.DirY;
    }
  }

  this.changeAngle = function(paddle) {
    var dev = (this.x - ( paddle.x + paddle.length / 2 )) / (paddle.length / 2)
    this.DirX = sin(dev);
    this.DirY = cos(dev);
  }

  this.wall = function(paddle) {
    if (this.x <= 0) {
      this.DirX = -this.DirX;
    }
    else if (this.x >= width - this.dim) {
      this.DirX = -this.DirX;
    }
    else if (this.y <= 0) {
      this.DirY = -this.DirY;
    }
    else if (this.y >= paddle.y + paddle.height) {
      ball = new Ball();
    }
  }

  return false;

}

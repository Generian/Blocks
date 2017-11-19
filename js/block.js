var dim = 20;

function addBlocks(blockslist) {
  var rows = 3;
  var yTop = 50;
  for (i = 0 ; i < rows ; i++) {
    for (j = 0; j < width/dim; j++) {
      blockslist.push(new Block(j * dim, yTop + i * dim ));
    }
  }
}

function ballHitsBlock(bl, ba) {
  if (ba.x > bl.x && ba.x < bl.xe && ba.y > bl.y && ba.y < bl.ye) {
    return true;
  } else {
    return false;
  }
}

function Block(x, y) {
  this.x = x;
  this.y = y;
  this.ye = y + dim;
  this.xe = x + dim;
  this.whereIsBall = "";

  this.show = function() {
    fill(200);
    strokeWeight(0);
    rect(this.x, this.y, dim, dim);
    fill(255);
    rect(this.x, this.y, dim - 1, dim - 1);
  }

  this.checkBall = function(ball) {
    if (this.x <= ball.x) {
      var notRight = true;
    }
    if (this.xe >= ball.x) {
      var notLeft = true;
    }
    if (this.y <= ball.y) {
      var notUp = true;
    }
    if (this.ye >= ball.y) {
      var notDown = true;
    }

    if ( ballHitsBlock(this, ball) ) {
      if (this.whereIsBall == "hor") {
        ball.DirX = -ball.DirX;
      } else {
        ball.DirY = -ball.DirY;
      }

    }

    if (notRight && notLeft && notUp) {
      this.whereIsBall = "ver"
    }
    if (notLeft && notUp && notDown) {
      this.whereIsBall = "hor"
    }
    if (notUp && notDown && notRight) {
      this.whereIsBall = "hor"
    }
    if (notDown && notRight && notLeft) {
      this.whereIsBall = "ver"
    }

  }

}

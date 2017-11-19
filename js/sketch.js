document.body.addEventListener('touchmove', function (ev) {
  ev.preventDefault();
});

var gun;
var blocks = [];
function setup() {
  createCanvas(windowWidth-10, windowHeight-300);
  gun = new Gun();
  ball = new Ball();
  addBlocks(blocks);

  return false;

}

function draw() {
  background(255, 0, 127);
  fill(255);
  rect(0, windowHeight-500, windowWidth - 10, 200);
  gun.update();
  ball.update();
  ball.changeDir(gun);
  ball.wall(gun);

  if (blocks.length > 0) {
    for (i = blocks.length -1 ; i >= 0; i--) {
      blocks[i].show();
      blocks[i].checkBall(ball);
      if (ballHitsBlock(blocks[i], ball)) {
        blocks.splice(i ,1);
      }
    }
  }

  gun.show();
  ball.show();

  return false;

}

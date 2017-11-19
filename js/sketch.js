var gun;
var blocks = [];
function setup() {
  createCanvas(600, 400);
  gun = new Gun();
  ball = new Ball();
  addBlocks(blocks);
}

function draw() {
  background(0);
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

}
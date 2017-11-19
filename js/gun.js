function Gun() {
  this.y = height - 20;
  this.x = (width - this.length) / 2.0;
  this.length = 50;
  this.height = 5;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.length, this.height);
  }

  this.update = function() {
    //var pos = mouseX;
    //console.log(touches[0]);
    var pos = mouseX;
    pos = pos - (this.length / 2.0);
    this.x = constrain(pos, 0 , width - this.length);
  }

  return false;

}

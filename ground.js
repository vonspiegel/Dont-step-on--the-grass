"use strict";

function Ground(canvas, speed, y) {
  this.x = 0;
  this.y = canvas.height - 70;
  this.size = canvas.width;
  this.ctx = canvas.getContext("2d");
};

Ground.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, 70);
}
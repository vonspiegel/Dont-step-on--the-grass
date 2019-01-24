"use strict";

function Obstacle(canvas, speed, y) {
  this.x = canvas.width;
  this.y = canvas.height - 90;
  this.size = 35;
  this.speed = speed;
  this.ctx = canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "./images/piece of grass.png"
};

Obstacle.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};

Obstacle.prototype.update = function() {
  this.x -= this.speed;
};

Obstacle.prototype.isInScreen = function() {
  return this.x + this.size >= 0;
};

Obstacle.prototype.die = function() {
  this.x = -1500;
}
"use strict";

function Player(canvas, lives) {
  this.size = 50;
  this.x = 100;
  this.y = canvas.height - 120;
  this.lives = lives || 3;
  this.direction = 1;
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.speed = 0;
};

Player.prototype.jump = function() {
  this.speed = -20;
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Player.prototype.update = function() {
  this.y += this.direction * this.speed;

  if(this.y < 150) {
    this.speed += 2;
  }
  if (this.y >= 380) {
    this.speed = 0;
  }
  console.log(this.y)
};

Player.prototype.checkCollideWithObstacle = function(obstacle) {
  // var collidesRight = this.x + this.size / 2 > obstacle.x - obstacle.size / 2; 
  // var collidesLeft = this.x - this.size / 2 < obstacle.x + obstacle.size / 2; 
  // var collidesBottom = this.y + this.size / 2 > obstacle.y - obstacle.y / 2;

  var collidesRight = this.x + this.size > obstacle.x
  var collidesLeft = this.x < obstacle.x + obstacle.size
  var collidesBottom = this.y + this.size > obstacle.y

  return collidesRight && collidesLeft && collidesBottom;
};

Player.prototype.loseLife = function() {
  this.lives--;
  console.log(`Lifes remaining: ${this.lives}`);
};

Player.prototype.isDead = function() {
  return this.lives <= 0;
}
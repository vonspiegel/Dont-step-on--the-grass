"use strict";

function Player(canvas, lives) {
  this.size = 50;
  this.x = 100;
  this.y = canvas.height - 120;
  this.lives = lives || 3;
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
};

Player.prototype.jump = function(direction) {
  if (direction === "up") {
    this.direction = -1;
  } 
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Player.prototype.update = function() {
  this.y += this.direction * this.speed;
  
  if (this.y = 175) {
    this.direction *= -1;
  } else if (this.y >= 150 - this.size) {
    this.direction = 0;
  }
};
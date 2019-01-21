"use strict";

function Player(canvas, lives) {
  this.size = 50;
  this.x = 100;
  this.y = canvas.height - 120;
  this.lives = lives || 3;
  this.direction = 1;
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.speed = 1.01;
};

Player.prototype.jump = function(direction) {
  this.speed = -20;
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Player.prototype.update = function() {
  this.y += this.direction * this.speed;
  if(this.y < 100) {
    this.speed = 20;
  }
  if (this.y >= 380) {
    this.speed = 0;
  }
  console.log(this.y)
};
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
  this.img = new Image();
  this.img.src = "./images/Old hero.png"
  this.jumpImg = new Image();
  this.jumpImg.src = "./images/Old hero jumping.png";
  this.isJumping = false;
  this.jumping = new Audio("./sounds/Jump-SoundBible.com-1007297584.mp3");
};

Player.prototype.jump = function() {
  if(this.y === 380) {
    this.speed = -20;
    this.isJumping = true;
    this.jumping.play();
  };

  this.jumping.stop();
};

Player.prototype.draw = function() {
  
  if (this.isJumping) {
    this.ctx.drawImage(this.jumpImg, this.x, this.y, this.size, this.size);
  } else {
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
};



Player.prototype.update = function() {
  this.y += this.direction * this.speed;

  if(this.y < 150) {
    this.speed += 2;
  }
  if (this.y >= 380) {
    this.speed = 0;
    this.isJumping = false;
  }
  console.log(this.y)
};

Player.prototype.checkCollideWithObstacle = function(obstacle) {
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
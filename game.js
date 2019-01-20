'use strict';

function Game(canvas, gameEndedHandler) { //why gameEndedHandler
  this.ctx = canvas.getContext("2d");
  this.player = new Player();
  this.obstacles = [];
  this.animation;
  this.gameEndedHandler = gameEndedHandler;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }:

  this._drawCanvas = function() {
    this.player.draw() //from where draw
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    }); 
  };

  

  this._createEnemy = function() {
    var speed = 5;
    var y = 750;

    this.obstacles.push(new Obstacle(canvas, speed, y));
  }
};
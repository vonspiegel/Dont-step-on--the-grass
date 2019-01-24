'use strict';

function Game(canvas, gameEndedHandler) { 
  this.ctx = canvas.getContext("2d");
  this.obstacles = [];
  this.animation;
  this.gameEndedHandler = gameEndedHandler;
  this.player = new Player(canvas);
  this.ground = new Ground(canvas);
  this.speedCounter = 3.0;
  this.intervalId;
  this.level = 1;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  this._drawCanvas = function() {
    this.ground.draw();
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
    this.player.draw();
    this._drawLives(this.player.lives);
    this._drawLevel();
  };

  this._updateGame = function() {
    if (Math.random() > 0.985) {
      this._createObstacle();
    };

    this.obstacles.filter(function(obstacle) {
      obstacle.update();

      
    });

    this.player.update();
    
    this.obstacles = this.obstacles.filter(function(obstacle) {
      return obstacle.isInScreen();
    });

    this.obstacles.forEach(function(obstacle) {
      obstacle.update();

      if (this.player.checkCollideWithObstacle(obstacle)) {
        this.player.loseLife();
        
        obstacle.die();
      }
    }.bind(this));

  };

  this._createObstacle = function() {
    
    var y = 750;

    this.obstacles.push(new Obstacle(canvas, this.speedCounter, y));
  };

  this._drawLives = function(numberOfLives) {
    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Lives " + numberOfLives, 750, 100);
  }

  this._drawLevel = function() {
    this.ctx.fillText("Level " + this.level, 500, 100);
  }
};

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.speedCounter++;
    this.level++;
  }.bind(this), 7000);
  
  function loop() {
    this._updateGame();
    this._clearCanvas();
    this._drawCanvas();

    this.animation = window.requestAnimationFrame(loop.bind(this));

    if (this.player.isDead()) {
      this.gameEndedHandler();
    }
  
  };

  window.requestAnimationFrame(loop.bind(this));
};

Game.prototype.end = function() {
  window.cancelAnimationFrame(this.animation);
  clearInterval(this.intervalId)
}

Game.prototype.pressKey = function() {
  this.player.jump();
};

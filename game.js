'use strict';

function Game(canvas, gameEndedHandler) { //why gameEndedHandler
  this.ctx = canvas.getContext("2d");
  this.obstacles = [];
  this.animation;
  this.gameEndedHandler = gameEndedHandler;
  this.player = new Player(canvas);
  this.ground = new Ground(canvas);

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  this._drawCanvas = function() {
    this.player.draw();
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
    this.ground.draw();
  };

  this._updateGame = function() {
    if (Math.random() > 0.95) {
      this._createObstacle();
    };

    this.obstacles.filter(function(obstacle) {
      obstacle.update();

      // if (this.player.checkCollideWithObstacle(obstacle)) {
      //   this.player.loseLife();
      //   obstacle.die;
      // };
    });
    
  };

  this._createObstacle = function() {
    var speed = 5;
    var y = 750;

    this.obstacles.push(new Obstacle(canvas, speed, y));
  };

};

Game.prototype.start = function() {
  function loop() {
    this._updateGame();
    this._clearCanvas();
    this._drawCanvas();

    this.animation = window.requestAnimationFrame(loop.bind(this));

  //   if (this.player.isDead()) {}
  // }
  };

  window.requestAnimationFrame(loop.bind(this));
};

Game.prototype.end = function() {
  window.cancelAnimationFrame(this.aniation);
}

Game.prototype.pressKey = function() {
  this.player.setDirection('up');
};

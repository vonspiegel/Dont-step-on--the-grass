'use strict';

var splashScreen;
var gameScreen;
var endScreen;

function startGameClick() {
  destroySplashScreen();
  buildGameScreen();
};

function reloadEndScreen() {
  destroyGameScreen();
  buildEndScreen();
};

function reloadSplashScreen() {
  destroyEndScreen();
  buildSplashScreen();
};

function buildDom(html) {
  var target = document.querySelector(".container");
  target.innerHTML = html;
  
  return target;
};

function destroyDom(target) {
  target.innerHTML = "";
};

function buildSplashScreen() {
  splashScreen = buildDom(`
  <div class="splash-container">
    <div class="splash-h1">
      <h1>Don't step on the grass</h1>
    </div>
    <div class="splash-button">
      <a href="#" class="button">Start the Game</a>
    </div>
  </div>
  `);

  splashScreen.querySelector(".button");
  splashScreen.addEventListener("click", startGameClick);
};

function destroySplashScreen() {
  destroyDom(splashScreen);
};

function buildGameScreen() {
  gameScreen = buildDom(`<div class="game-screen">
  <canvas id="canvas" width="1000" height="500"></canvas>
  </div>`);
  
  var canvas = document.querySelector("canvas");
  var gameEnded = function() {
    game.end();
    destroyGameScreen();
    buildEndScreen();
  }
  var game = new Game(canvas, gameEnded); //why gameEnded
 
  var onKey = function(event) {
    switch (event.keyCode) {
      case 32: game.pressKey();
      break;
    };
  };
  document.addEventListener("keypress", onKey);
  
  game.start();
};

function destroyGameScreen() {
  destroyDom(gameScreen);
};

function buildEndScreen() {
  endScreen = buildDom(`
  <img src="./images/grass.png" alt="">
  <h1>Game Over</h1>
  <a href="#" class="button">Try again</a>
  `);

  endScreen.querySelector(".button");
  endScreen.addEventListener("click", buildGameScreen);
};

function destroyEndScreen() {
  destroyDom(endScreen);
};

window.addEventListener("load", buildSplashScreen);

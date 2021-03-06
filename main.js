'use strict';

var splashScreen;
var gameScreen;
var endScreen;
var startButton;
var restartButton;

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
      <a href="#" class="button">PLAY</a>
    </div>
    <div class="rules">
      <p>Controls</p>
      <span class="empty">&nbsp;</span>
      <span class="dropdown">Press the space bar for jumping</span>
    </div>
  </div>
  `);

  startButton = splashScreen.querySelector(".button");
  startButton.addEventListener("click", startGameClick);
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
    reloadEndScreen();
  }
  var game = new Game(canvas, gameEnded);
 
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
  <div class="end-screen">
    <div class="end-h1">
      <h1>Game Over</h1>
    </div>
    <div class="end-button">
      <a href="#" class="button">Try again</a>
    </div>
  </div>
  `);

  restartButton = endScreen.querySelector(".button");
  restartButton.addEventListener("click", buildGameScreen);
};

function destroyEndScreen() {
  destroyDom(endScreen);
};

window.addEventListener("load", buildSplashScreen);

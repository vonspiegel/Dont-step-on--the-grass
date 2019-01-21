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
  <img src="./images/logo.png" alt="logo">
  <h1>Don't step on the grass</h1>
  <a href="#" class="button">Start the Game</a>
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
  // function back() {
  //   game.stop();
  // }
  var canvas = document.querySelector("canvas");
  var game = new Game(canvas); //why gameEnded
 
  // var onKey = function(event) {
  //   switch (event.keyCode) {
  //     case 32: game.pressKey();
  //     break;
  //   };
  // };
  // document.addEventListener("keypress", onKey);
  
  game.start();

};

function destroyGameScreen() {
  gameScreen = destroyDom();
};

function buildEndScreen() {
  endScreen = buildDom(`
  <img src="./images/grass.png" alt="">
  <h1>Game Over</h1>
  <a href="#" class="button">Try again</a>
  `);

  endScreen.querySelector(".button");
  endScreen.addEventListener("click", reloadSplashScreen);
};

function destroyEndScreen() {
  endScreen = destroyDom();
};

window.addEventListener("load", buildSplashScreen);

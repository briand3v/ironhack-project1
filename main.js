'use strict';

function init() {
  var gameContainer = document.getElementById('game');
  var game = new Game(gameContainer);
  game.buildSpash();
}

document.addEventListener("DOMContentLoaded", init);

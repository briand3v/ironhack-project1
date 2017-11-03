'use strict';

window.addEventListener("DOMContentLoaded", function() {

  var gameContainer = document.getElementById('game');
  var game = new Game(gameContainer);
  game.buildSpash();




  // @todo remove this before finishing the project
  // just for debugging
  window.game = game;

});

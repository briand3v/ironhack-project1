function ContainerGame(containerElement) {
  var self = this;

  self.containerElement = containerElement;

};

ContainerGame.prototype.splash = function() {
  console.log('asdasd');
  var splashDiv = document.createElement("div");

  self.containerElement.appendChild(splashDiv);
};


ContainerGame.prototype.mapsSecttion = function() {

};

ContainerGame.prototype.buildGame = function() {




};

ContainerGame.prototype.mapsSecttion = function() {

};

ContainerGame.prototype.mapsSecttion = function() {

};

ContainerGame.prototype.destroySplash = function() {

};
ContainerGame.prototype.destroyMaps = function() {

};
ContainerGame.prototype.destroyGame = function() {

};
ContainerGame.prototype.destroyResults = function() {

};


var gameContainer = document.getElementById('container-game');
var game = new ContainerGame(gameContainer);

function ContainerGame(containerElement) {
  var self = this;

  self.containerElement = containerElement;

};

ContainerGame.prototype.splash = function() {
  console.log('asdasd');

  var self = this;

  var splash = document.createElement('div');
  var play = document.createElement('div');
  var playImg = document.createElement('div');
  var nameGame = document.createElement('h1');


  splash.setAttribute('id', 'splash');
  play.setAttribute('id', 'container');
  playImg.setAttribute('id', 'image');
  nameGame.setAttribute('id', 'name');


  self.containerElement.appendChild(splash);
  var splashId = document.getElementById('splash');
  splashId.appendChild(play);
  var playId = document.getElementById('container');
  playId.appendChild(playImg);
  var playImgId = document.getElementById('image');
  splashId.appendChild(nameGame);

  var text = document.getElementById('name');
  text.innerText = 'The' + 'shooter'


  playImgId.addEventListener('click', function() {
    game.mapsSection();
  });

};



ContainerGame.prototype.mapsSection = function() {
  game.destroySplash();
  var self = this;

  var maps = document.createElement('div');
  self.containerElement.appendChild(maps);

  maps.setAttribute('id', 'maps');
  var mapsId = document.getElementById('maps');

  var nameMaps = [
    ['zombie', 'map'],
    ['terrorist', 'map'],
    ['alliens', 'map'],
    ['nintendo', 'world']
  ];
  var texts;


  for (var i = 0; i < 4; i++) {
    var map = document.createElement('div');
    var newmap = mapsId.appendChild(map);
    map.setAttribute('id', 'map');
    map.setAttribute('class', 'map map' + i);

    var mapId = document.getElementById('map');
    var text = document.createElement('p');
    mapId.appendChild(text);

    texts = document.getElementsByTagName('p');


  }
  console.log(maps);


};

ContainerGame.prototype.buildGame = function() {

  var self = this;
  var targetDiv = document.createElement('div');
  self.containerElement.appendChild(targetDiv);
  targetDiv.setAttribute('id', 'targets');



  function randomCoordinates(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function getRandomCoordinates() {
    return {
      x: randomCoordinates(0, 600),
      y: randomCoordinates(0, 600)
    }
  };



  function createTargets() {
    var coordinates = getRandomCoordinates();
    console.log(coordinates);

    var newTarget = document.createElement('img');
    newTarget.src = "img/target.png";
    newTarget.id = 'newTarget';
    newTarget.style.top = coordinates.y + 'px';
    newTarget.style.left = coordinates.x + 'px';


    var targetDivId = document.getElementById('targets');
    targetDivId.appendChild(newTarget);
  }

  document.addEventListener("DOMContentLoaded", function(event) {

    setInterval(function() {
      createTargets();
    }, 700);
  });




};

ContainerGame.prototype.mapsSecttion = function() {

};

ContainerGame.prototype.mapsSecttion = function() {

};

ContainerGame.prototype.destroySplash = function() {
  var self = this;
  self.containerElement.removeChild(splash);

  console.log('next mapps');

};
ContainerGame.prototype.destroyMaps = function() {

};
ContainerGame.prototype.destroyGame = function() {

};
ContainerGame.prototype.destroyResults = function() {

};


var gameContainer = document.getElementById('container-game');
var game = new ContainerGame(gameContainer);

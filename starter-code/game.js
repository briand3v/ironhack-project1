'use strict';

function Game(containerElement) {
  var self = this;

  self.maps = [{
      name: 'Zombie',
      className: 'zombie',
      img: "../starter-code/img/wallpaper-zombies.jpg",
      targets: [{
          target: 'img/zombie-fat.jpg',
          dataTarget: 0
        },
        {
          target: 'img/Zombie-raven.jpg',
          dataTarget: 1
        },
        {
          target: 'img/zombie-teen.jpg',
          dataTarget: 2
        }
      ]

    },
    {
      name: 'Terrorist',
      className: 'terrorist',
      img: '../starter-code/img/wallpaper-terrorist.png',
      targets: [{
          target: 'img/terrorist1.png',
          dataTarget: 0
        },
        {
          target: 'img/terrorist2.png',
          dataTarget: 1
        },
        {
          target: 'img/bin-laden.png',
          dataTarget: 2
        }
      ]
    },
    {
      name: 'Aliens',
      className: 'aliens',
      img: "../starter-code/img/wallpaper-alliens.jpg",
      targets: [{
          target: 'afuck',
          dataTarget: 0
        },
        {
          target: 'ashit',
          dataTarget: 0
        },
        {
          target: 'apoop',
          dataTarget: 0
        }
      ]
    },
    {
      name: 'Nintendo',
      className: 'nintendo',
      img: "../starter-code/img/wallpaper-retro-games.jpg",
      targets: [{
          num: 'nfuck'
        },
        {
          num: 'nshit'
        },
        {
          num: 'npoop'
        }
      ]
    },
  ];

  self.state = null;

  self.containerElement = containerElement;

};


// ---- SPLASH ----

Game.prototype.buildSpash = function() {
  var self = this;

  if (self.state) {
    return;
  }

  self.state = 'splash';

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

  self.handlePlayClick = function() {
    self.destroySplash();
    self.buildMaps();
  };

  playImgId.addEventListener('click', self.handlePlayClick);
};

Game.prototype.destroySplash = function() {
  var self = this;

  self.containerElement.removeChild(splash);

  console.log('next maps');

};


// ---- MAPS ----

Game.prototype.buildMaps = function() {
  var self = this;

  if (self.state !== 'splash') {
    return;
  }

  self.state = 'maps';

  var maps = document.createElement('div');
  maps.setAttribute('id', 'maps');
  self.containerElement.appendChild(maps);

  for (var index = 0; index < self.maps.length; index++) {
    var map = document.createElement('div');
    maps.appendChild(map);
    map.setAttribute('id', 'map');
    map.setAttribute('class', 'map map-' + self.maps[index].className);
    map.setAttribute('data-map', index);

    var text = document.createElement('p');
    text.innerText = self.maps[index].name;
    map.appendChild(text);

    self.handleMapClick = function(event) {
      var mapSelected = event.target.getAttribute('data-map');

      self.destroyMaps();
      self.buildGame();


      // self.currentMapIndex = event.target.getAttribute('data-map');
      // destroy maps
      // build game
    };

    map.addEventListener('click', self.handleMapClick);

  }


};
Game.prototype.destroyMaps = function() {
  var self = this;
  self.containerElement.removeChild(maps);
};



// ---- GAME ----

Game.prototype.buildGame = function() {
  var self = this;

  if (self.state !== 'maps') {
    return
  }

  self.state = 'game';



  self.currentMapIndex = event.target.getAttribute('data-map');
  var map = self.maps[self.currentMapIndex].img;
  var target = self.maps[self.currentMapIndex].targets;



  console.log('map is ', map);

  var targetDiv = document.createElement('div');
  targetDiv.setAttribute('id', 'targets');
  targetDiv.setAttribute('style', 'background-image:' + 'url(' + map + ')');
  self.containerElement.appendChild(targetDiv);

  var footer = document.getElementById('footer');
  var points = document.createElement('h1');
  points.setAttribute('id', 'points');
  points.setAttribute('style', 'color: black ; font-size:50px;');
  footer.appendChild(points);

  var getPoints = document.getElementById('points');
  points.innerText = '1';

  console.log(footer);

  function getRandomTargets() {
    return target[Math.floor(Math.random() * 4)];

  }


  function randomCoordinates(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function getRandomCoordinates() {
    return {
      x: randomCoordinates(0, 600),
      y: randomCoordinates(0, 500)
    }
  };

  var index;

  function createTargets() {
    var coordinates = getRandomCoordinates();
    var createTargets = getRandomTargets();
    var takeTarget = createTargets.target;
    index = createTargets.dataTarget;
    // console.log(coordinates);
    // console.log(index);

    var newTarget = document.createElement('img');
    newTarget.src = takeTarget;
    newTarget.id = 'newTarget';
    var dataIndex = newTarget.setAttribute('data-target', index);
    newTarget.style.position = "absolute";
    newTarget.style.top = coordinates.y + 'px';
    newTarget.style.left = coordinates.x + 'px';


    var targetDivId = document.getElementById('targets');
    targetDivId.appendChild(newTarget);



    newTarget.addEventListener('click', killTarget);


  }




  var total = 0;

  function killTarget() {

    targetDiv.removeChild(this);
    if (index === 0) {

      var points = 2;
      total = total + points;
    } else if (index === 1) {

      var points = 5;
      total = total + points;
    } else if (index === 2) {

      var points = 10;
      total = total + points;
    }


    var n = total.toString();
    var score = document.getElementById('points').innerHTML = n;
    console.log(total);
  }

  function endTime() {
    targetDiv.removeChild(newTarget);
  }




  setInterval(function() {
    createTargets();
  }, 1000);

  setInterval(endTime, 2000);






};

Game.prototype.destroyGame = function() {
  var self = this;
};

// ---- RESULTS ----

Game.prototype.destroyResults = function() {
  var self = this;
};

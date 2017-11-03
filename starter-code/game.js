'use strict';

function Game(containerElement) {
  var self = this;
  self.timeoutTargetID = null;
  self.currentMapIndex = null;
  self.totalScore = 100;
  self.targetDiv = null;
  self.targetIndex = null;
  self.target = null;
  self.targetDivId = null;
  self.imgIsClicked = false;
  self.childLife = null;
  self.newTargetInterval = null;
  self.game = null;
  self.container = null;
  self.game2 = null;
  self.scoreHide = null;
  self.totalScore = null;
  self.containerGame = null;
  self.getImgInterval = null;
  self.moreInterval = null;

  self.maps = [{
      name: 'Zombie',
      className: 'zombie',
      img: "img/wallpaperZombies.jpg",
      img2: "img/wallpaper-zombies2.png",
      id: 'zombies',
      targets: [{
          target: 'img/zombie-fat.png',
          dataTarget: 0
        },
        {
          target: 'img/Zombie-raven.png',
          dataTarget: 1
        },
        {
          target: 'img/zombie-teen.png',
          dataTarget: 2
        }
      ]

    },
    {
      name: 'Terrorist',
      className: 'terrorist',
      img: 'img/wallpaper-terrorist.png',
      id: 'terrorist',
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
      img: "img/wallpaper-alliens.jpg",
      id: 'aliens',
      targets: [{
          target: 'img/alien-ship.png',
          dataTarget: 0
        },
        {
          target: 'img/ship-alien.png',
          dataTarget: 0
        },
        {
          target: 'img/alien-ship2.png',
          dataTarget: 0
        }
      ]
    },
    {
      name: 'Nintendo',
      className: 'nintendo',
      img: "img/wallpaper-nintendo.gif",
      id: 'characters',
      targets: [{
          target: 'img/boo.mario.png',
          dataTarget: 0
        },
        {
          target: 'img/Meta-Knight.png',
          dataTarget: 1
        },
        {
          target: 'img/Bowser.png',
          dataTarget: 2
        }
      ]
    },
  ];

  self.state = null;

  self.containerElement = containerElement;

  // ---- SPLASH ----*****************************************************************************
  self.buildSpash = function() {

    if (self.state) {
      return;
    }

    self.state = 'splash';

    // self.containerElement.removeChild(self.allMaps);

    self.scoreHide = document.getElementById('score');
    self.scoreHide.removeAttribute('id');
    self.scoreHide.setAttribute('id', 'socore-life');


    self.containerGame = document.createElement('div');
    self.containerElement.appendChild(self.containerGame);

    var play = document.createElement('div');
    var playImg = document.createElement('img');
    var nameGame = document.createElement('h1');
    var shooter = document.createElement('img');

    self.containerGame.setAttribute('id', 'container-game');
    play.setAttribute('id', 'container');
    playImg.setAttribute('id', 'splash-image');
    playImg.setAttribute("src", "img/btn-play-copia2.png")
    nameGame.setAttribute('id', 'name');
    shooter.setAttribute('id', 'shooter');

    self.containerGame.appendChild(play);
    var playId = document.getElementById('container');
    playId.appendChild(playImg);
    var playImgId = document.getElementById('image');
    // self.containerElement.appendChild(nameGame);

    self.containerGame.appendChild(shooter);



    // var text = document.getElementById('name');
    // text.innerText = 'The' + 'shooter'

    self.handlePlayClick = function() {
      self.destroySplash();
      self.buildMaps();


    };

    play.addEventListener('click', self.handlePlayClick);
  };
  self.destroySplash = function() {

    // self.containerElement.innerText = "";
    self.containerElement.removeChild(self.containerGame);


    console.log('next maps');

  };


  // ---- MAPS ----****************************************************************************************

  self.buildMaps = function() {

    if (self.state !== 'splash') {
      return;
    }

    self.state = 'maps';

    self.allMaps = document.createElement('div');
    self.allMaps.setAttribute('id', 'maps');
    self.containerElement.appendChild(self.allMaps);

    for (var index = 0; index < self.maps.length; index++) {
      var map = document.createElement('div');
      self.allMaps.appendChild(map);
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
        // self.containerGame.setAttribute('id', 'container2');
        // self.container2 = document.getElementById('container2')


        // self.targets = document.createElement('div');
        // self.targets.setAttribute('id', 'targets');
        //
        // self.containerElement.appendChild(self.targets);



        // self.currentMapIndex = event.target.getAttribute('data-map');
        // destroy maps
        // build game
      };

      map.addEventListener('click', self.handleMapClick);

    }


  };
  self.destroyMaps = function() {
    self.containerElement.removeChild(maps);
  };



  // ---- GAME ----******************************************************************************************
  self.createTargets = function() {
    var coordinates = self.getRandomCoordinates();
    var createTargets = self.getRandomTargets();
    var takeTarget = createTargets.target;
    self.targetIndex = createTargets.dataTarget;
    // console.log(coordinates);

    var newTarget = document.createElement('img');
    newTarget.src = takeTarget;
    newTarget.id = 'newTarget';
    var dataIndex = newTarget.setAttribute('data-target', self.targetIndex);
    newTarget.style.position = "absolute";
    newTarget.style.top = coordinates.y + 'px';
    newTarget.style.left = coordinates.x + 'px';
    self.containerElement.appendChild(newTarget);


    self.timeoutTargetID = setTimeout(function() {

      self.containerElement.removeChild(newTarget);


    }, 2000);

    newTarget.addEventListener('click', self.killTarget);

    newTarget.addEventListener('click', clickHandler);



    function clickHandler() {
      self.imgIsClicked = true;
    }
    // self.next = 0;

    setTimeout(function() {
      // clearInterval(self.timeoutTargetID);
      if (self.imgIsClicked) {
        console.log('cool');
        self.imgIsClicked = false;
      } else {
        if (self.childLife.getAttribute('id') === 'childLife') {
          self.childLife.setAttribute('id', 'full');
        } else if (self.childLife.getAttribute('id') === 'full') {
          self.childLife.setAttribute('id', 'less1');
        } else if (self.childLife.getAttribute('id') === 'less1') {
          self.childLife.setAttribute('id', 'less2');
        } else if (self.childLife.getAttribute('id') === 'less2') {
          self.childLife.setAttribute('id', 'less3');
        } else if (self.childLife.getAttribute('id') === 'less3') {
          self.childLife.setAttribute('id', 'less4');
        } else if (self.childLife.getAttribute('id') === 'less4') {
          self.childLife.setAttribute('id', 'less5');
          clearInterval(self.newTargetInterval);
          setTimeout(function() {
            self.destroyGame();
          }, 1000);





        }
      }
    }, 1000);

  };


  self.getRandomTargets = function() {
    return self.target[Math.floor(Math.random() * 3)];

  }


  self.randomCoordinates = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  self.getRandomCoordinates = function() {
    return {
      x: self.randomCoordinates(0, 600),
      y: self.randomCoordinates(66, 500)
    }
  };
  ////****************** SCREEN GAME *******************************////
  self.buildGame = function() {


    if (self.state !== 'maps') {
      return
    }

    self.state = 'game';
    // perfect contentgame



    self.currentMapIndex = event.target.getAttribute('data-map');
    var map = self.maps[self.currentMapIndex].img;
    self.target = self.maps[self.currentMapIndex].targets;
    var id = self.maps[self.currentMapIndex].id;
    console.log('map is ', map);



    self.targets = document.createElement('div');
    self.targets.setAttribute('id', 'targets');
    self.containerElement.appendChild(self.targets);
    self.targets.setAttribute('style', 'background-image:' + 'url(' + map + ')');
    var x = document.getElementById('myAudio');
    x.play();


    function imgInterval() {
      if (self.targets.getAttribute('style') === 'background-image:' + 'url(' + self.maps[0].img + ')') {
        // self.targets.removeAttribute('style');
        self.targets.setAttribute('style', 'background-image:' + 'url(' + self.maps[0].img2 + ')');

      } else if (self.targets.getAttribute('style') === 'background-image:' + 'url(' + self.maps[0].img2 + ')') {
        self.targets.setAttribute('style', 'background-image:' + 'url(' + self.maps[0].img + ')');
      }
    }



    self.moreInterval = setInterval(function() {
      self.getImgInterval = setInterval(imgInterval, 700);
    }, 300);









    var appear = document.getElementById('socore-life');
    appear.setAttribute('id', 'score');


    var contentLife = document.createElement('div');
    contentLife.setAttribute('id', 'contentLife');
    appear.appendChild(contentLife);

    self.childLife = document.createElement('div');
    self.childLife.setAttribute('id', 'childLife');
    contentLife.appendChild(self.childLife);


    var characters = document.createElement('div');
    characters.setAttribute('id', id);
    self.containerElement.appendChild(characters);
    //////************************************************************************////////////





    self.newTargetInterval = setInterval(function() {
      self.createTargets();
    }, 1000);

  };


  self.killTarget = function(event) {
    clearInterval(self.timeoutTargetID);
    console.log(event.target)
    self.containerElement.removeChild(event.target);
    if (self.targetIndex === 0) {

      var points = 2;
      self.totalScore += points;
    } else if (self.targetIndex === 1) {

      var points = 5;
      self.totalScore += points;
    } else if (self.targetIndex === 2) {

      var points = 10;
      self.totalScore += points;
    }

  }

  self.destroyGame = function() {

    self.containerElement.removeChild(self.targets); // container2
    self.containerElement.removeChild(self.scoreHide);


    self.buildResults();


  };

  // ---- RESULTS ----********************************************************************************************

  self.buildResults = function() {


    self.totalScore = document.createElement('div');
    self.totalScore.setAttribute('id', 'totalScore');
    self.containerElement.appendChild(self.totalScore);

    var reset = document.createElement('img');
    reset.setAttribute('id', 'reset-btn');
    self.totalScore.appendChild(reset);

    var getReset = document.getElementById('reset-btn');

    getReset.addEventListener('click', function() {
      var game = document.getElementById('game');
      game.removeChild(self.totalScore);
      self.buildSpash();


    });







  };
  self.destroyResults = function() {};

  // self.containerElement.removeChild(self.totalScore);

};

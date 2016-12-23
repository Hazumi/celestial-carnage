const $ = require('jquery');

$(document).ready(function() {

  const game = {
    init: function() {
      cacheDom();
      bindEvents();
      gameLoop();
    },
    cacheDom: function() {
      const $explore = $('#btn-explore');
    },
    bindEvents: function() {
      $explore.on('click', function() {
        // spawn phanton
      });
    },
    gameLoop: function() {
      console.log('test');
    },
  }

  window.setInterval(function() {
    // displayStats();
  }, 1000);

  let player = {
    rank: 1,
    hp: 10,
    maxHp: 10,
    sta: 20,
    maxSta: 20,
    exp: 0,
    maxExp: 100
  }

  let phantom = {
    rank: 1,
    hp: 10,
    sta: 20,
    exp: 2
  }

  game.init();

});

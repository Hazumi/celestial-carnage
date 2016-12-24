const $ = require('jquery');

$(document).ready(function() {

  const game = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.gameLoop();
    },
    cacheDom: function() {
      this.$explore = $('#btn-explore');
      this.$playerHp = $('#playerHp');
      this.$playerMaxHp = $('#playerMaxHp');
      this.$playerSta = $('#playerSta');
      this.$playerMaxSta = $('#playerMaxSta');
      this.$playerExp = $('#playerExp');
      this.$playerMaxExp = $('#playerMaxExp');
    },
    bindEvents: function() {
      this.$explore.on('click', function() {
        game.combat(phantom);
      });
    },
    gameLoop: function() {
      window.setInterval(function() {

        // if (combat) {
          if (game.$playerHp.val() !== player.hp) game.$playerHp.html(player.hp);
          if (game.$playerSta.val() !== player.sta) game.$playerSta.html(player.sta);
        // }

      }, 1000)
    },
    combat: function(enemy) {
      let currentEnemy = phantom;
      console.log(currentEnemy);
    }

  }

  let player = {
    name: "",
    rank: 1,
    hp: 10,
    maxHp: 10,
    sta: 10,
    maxSta: 10,
    exp: 0,
    maxExp: 100
  }

  let phantom = {
    rank: 1,
    hp: 10,
    sta: 10,
    exp: 2
  }



  game.init();

});

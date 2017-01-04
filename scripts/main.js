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
      this.$laser = $('#laser');
      this.$log = $('#log');
    },
    bindEvents: function() {
      this.$explore.on('click', function() {
        game.combat(phantom);
      });
    },
    gameLoop: function() {
      window.setInterval(function() {


        // if (combat) {
          function updateStats() {
            if (game.$playerHp.val() !== player.hp) game.$playerHp.html(player.hp);
            if (game.$playerSta.val() !== player.sta) game.$playerSta.html(player.sta);
          }
          console.log('check');

        // }

        // check for 0 hp

      }, 1000)
    },
    combat: function(enemy) {
      let currentEnemy = phantom;

      this.$laser.on('click', function() {
        currentEnemy.hp -= player.atk;
        var dmgGiven = currentEnemy.hp -= player.atk;
        game.$log.append( 'You hit ' +  currentEnemy.name + ' for ' + dmgGiven  + ' damage.' + '<br>');

        var dmgTaken = player.hp -= currentEnemy.atk;
        player.hp -= currentEnemy.atk;
      });


      // function checkFirst(currentEnemy) {
      //   if (player.rank > currentEnemy.rank) {
      //
      //   }
      // }

    }

  }

  let player = {
    name: "",
    rank: 1,
    hp: 10,
    maxHp: 10,
    sta: 10,
    maxSta: 10,
    atk: 1,
    exp: 0,
    maxExp: 100
  }

  let phantom = {
    name: 'Phantom',
    rank: 1,
    hp: 10,
    sta: 10,
    exp: 2
  }



  game.init();

});

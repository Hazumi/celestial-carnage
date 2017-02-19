const stationBtn = document.getElementById('stationBtn');
const station = document.getElementById('station');
const researchLabBtn = document.getElementById('researchLabBtn');
const researchLab = document.getElementById('research-lab');
const playerPwr = document.getElementById('playerPwr');
const playerMaxPwr = document.getElementById('playerMaxPwr');

let player = {
 pwr: 100,
 maxPwr: 100,
 location: 'station'
};

function allHidden() {
  station.classList.add('hidden');
  researchLab.classList.add('hidden');
}

function travel(destination) {
  if (player.location != destination && player.pwr >= 5) {
    player.location = destination;
    player.pwr -= 5;
    allHidden();
  if (playerPwr.innerHTML != player.pwr) playerPwr.innerHTML = player.pwr;
  }
}

stationBtn.addEventListener('click', function() {
  travel('station');
  station.classList.remove('hidden');
});

researchLabBtn.addEventListener('click', function() {
  travel('researchLab');
  researchLab.classList.remove('hidden');
});


window.setInterval(function() {
  if (playerPwr.innerHTML != player.pwr) playerPwr.innerHTML = player.pwr;
  if (player.location == 'station' && player.pwr < player.maxPwr) {
    player.pwr += 1;
  }
}, 1000);

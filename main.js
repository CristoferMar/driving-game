
var gameKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', ' '];
var $car = document.querySelector('.car');

var carStyle = $car.style;
var currentX = 1;
var currentY = 1;
var leftRight = 10;
var upDown = 0;
var way = 'x';

var ignition = false;
var gas = null;

window.addEventListener('keydown', keyHandler);

function keyHandler(event) {
  if (gameKeys.indexOf(event.key) < 0) {
    return;
  }

  if (event.key === ' ') {
    if (ignition === false) {
      gas = setInterval(direction, 16);
      ignition = true;
    } else {
      clearInterval(gas);
      ignition = false;
    }
  } else {
    $car.className = 'car ' + event.key;
    if (event.key === 'ArrowRight') {
      leftRight = 10;
      upDown = 0;
      way = 'x';
    }
    if (event.key === 'ArrowLeft') {
      leftRight = -10;
      upDown = 0;
      way = 'x';
    }
    if (event.key === 'ArrowDown') {
      leftRight = 0;
      upDown = 10;
      way = 'y';
    }
    if (event.key === 'ArrowUp') {
      leftRight = 0;
      upDown = -10;
      way = 'y';
    }
  }
}

function direction() {
  if (way === 'x') {
    currentX = parseInt(carStyle.left);
    carStyle.left = (currentX + leftRight) + 'px';
  } else {
    currentY = parseInt(carStyle.top);
    carStyle.top = (currentY + upDown) + 'px';
  }
}


var gameKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', ' '];
var $car = document.querySelector('.car');

var carStyle = $car.style;
var leftRight = 1;
var currentX = 1;

// var gas = setInterval(direction, 16);

window.addEventListener('keydown', keyHandler);

function keyHandler(event) {
  if (gameKeys.indexOf(event.key) < 0) {
    return;
  }

  $car.className = 'car ' + event.key;
}

function direction() {
  currentX = parseInt(carStyle.left);
  carStyle.left = (currentX + leftRight) + 'px';
}

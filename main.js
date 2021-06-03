
var gameKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', ' '];
var $car = document.querySelector('.car');

window.addEventListener('keydown', keyHandler);

function keyHandler(event) {
  if (gameKeys.indexOf(event.key) < 0) {
    return;
  }

  $car.className = 'car ' + event.key;
}

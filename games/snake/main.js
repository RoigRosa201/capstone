const grid = document.querySelector('#grid');

function renderBoard() {
  grid.innerHTML = '';
  for (let i = 10; i >= 0; i--) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.x = j;
      square.dataset.y = i;
      grid.append(square);
    }
  }
  const square = document.querySelector(`.square[data-x="${foodPosition[0]}"][data-y="${foodPosition[1]}"]`);
  square.classList.add('food')
}

const snake = {
  body: [[5,5], [5,4], [5,3]],
  direction: 'up'
}
let foodPosition = []

function renderSnake() {
  for (let bodyPiece of snake.body) {
    const [x, y] = bodyPiece;
    const square = document.querySelector(`.square[data-x="${x}"][data-y="${y}"]`);
    square.classList.add('snake')
  }
}
function startSnakeMovement() {
  setInterval(function() {
    renderBoard();
    snake.body.pop();
    const newHead = [...snake.body[0]];
    switch (snake.direction) {
      case 'up':
        newHead[1]++;
        snake.body.unshift(newHead);
        break;
      case 'left':
        newHead[0]--;
        snake.body.unshift(newHead);
        break;
      case 'right':
        newHead[0]++;
        snake.body.unshift(newHead);
        break;
      case 'down':
        newHead[1]--;
        snake.body.unshift(newHead);
        break;
      default:
        break;
    }
    renderSnake();
  }, 500)
}

function generateRandomFood() {
  foodPosition[0] = Math.floor(Math.random() * 10);
  foodPosition[1] = Math.floor(Math.random() * 10);
  const square = document.querySelector(`.square[data-x="${foodPosition[0]}"][data-y="${foodPosition[1]}"]`);
  square.classList.add('food')
}

function playGame() {
  renderBoard();
  renderSnake();
  startSnakeMovement();
  generateRandomFood();
}

playGame();

document.body.addEventListener('keyup', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      snake.direction = 'left'
      break;
    case 'ArrowRight':
      snake.direction = 'right'
      break;
    case 'ArrowDown':
      snake.direction = 'down'
      break;
    case 'ArrowUp':
      snake.direction = 'up'
      break;
  
    default:
      break;
  }
})
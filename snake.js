document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snake-game');
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const boardSize = canvas.width / gridSize;
    const snakeSpeed = 200; // Adjust snake speed as needed

    let snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let direction = { x: 0, y: 0 };
    let intervalId;

    function startGame() {
        intervalId = setInterval(moveSnake, snakeSpeed);
        document.addEventListener('keydown', changeDirection);
        canvas.addEventListener('touchstart', handleTouchStart);
        canvas.addEventListener('touchmove', handleTouchMove);
        generateFood();
    }

    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }

        if (isCollision()) {
            clearInterval(intervalId);
            alert('Game Over!');
            resetGame();
        }

        render();
    }

    function changeDirection(event) {
        const keyPressed = event.keyCode;

        // Arrow Up
        if (keyPressed === 38 && direction.y !== 1) {
            direction = { x: 0, y: -1 };
        }
        // Arrow Down
        else if (keyPressed === 40 && direction.y !== -1) {
            direction = { x: 0, y: 1 };
        }
        // Arrow Left
        else if (keyPressed === 37 && direction.x !== 1) {
            direction = { x: -1, y: 0 };
        }
        // Arrow Right
        else if (keyPressed === 39 && direction.x !== -1) {
            direction = { x: 1, y: 0 };
        }
    }

    function handleTouchStart(event) {
        const touch = event.touches[0];
        touch.startX = touch.clientX;
        touch.startY = touch.clientY;
    }

    function handleTouchMove(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const deltaX = touch.clientX - touch.startX;
        const deltaY = touch.clientY - touch.startY;

        // Horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0 && direction.x !== -1) {
                direction = { x: 1, y: 0 }; // Swipe right
            } else if (deltaX < 0 && direction.x !== 1) {
                direction = { x: -1, y: 0 }; // Swipe left
            }
        }
        // Vertical swipe
        else {
            if (deltaY > 0 && direction.y !== -1) {
                direction = { x: 0, y: 1 }; // Swipe down
            } else if (deltaY < 0 && direction.y !== 1) {
                direction = { x: 0, y: -1 }; // Swipe up
            }
        }
    }

    function generateFood() {
        food = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };

        if (isOccupied(food.x, food.y)) {
            generateFood();
        }
    }

    function isOccupied(x, y) {
        return snake.some(segment => segment.x === x && segment.y === y);
    }

    function isCollision() {
        const head = snake[0];

        return (
            isOccupied(head.x, head.y) ||
            head.x < 0 ||
            head.x >= boardSize ||
            head.y < 0 ||
            head.y >= boardSize
        );
    }

    function renderApologies for the cutoff in the previous response. Here's the remaining part of the JavaScript code:

```javascript
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Render snake
        snake.forEach(segment => {
            ctx.fillStyle = '#FFF';
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });

        // Render food
        ctx.fillStyle = '#F00';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function resetGame() {
        snake = [{ x: 10, y: 10 }];
        direction = { x: 0, y: 0 };
        clearInterval(intervalId);
        document.removeEventListener('keydown', changeDirection);
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
        startGame();
    }

    startGame();
});

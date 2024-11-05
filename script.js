//elementos html
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');
 //configuracion del juego
const boardSize = 10;
//velocidad
const gameSpeed = 100;

const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
/*cuando movamos las flechas*/
const directions = {
    ArrowUp : -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};
//variables del juego
//se modificaran a medida que avance el juego 
let snake;
let score;
let direction;
let boardSquare;
let emptySquare;
let moveInterval;

const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare'));
}

//square: posicion del cuadrado
//type: tipo de cuadrado (emptySquare, snakeSquare, foodSquare)

const drawSquare = (square, type) => {
    const [ row, column ] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class', `square ${type}`);

    if(type === 'emptySquare') {
        emptySquares.push(square);
    } else {
        if(emptySquares.indexOf(square) !== -1) {
            emptySquares.splice(emptySquares.indexOf(square), 1);
        }
    }
}
const setDirection = newDirection => {
    direction = newDirection;
}
const directionEvent = key => {
    //key.code el tipo de codigo o sea el tipo de tecla que toco si es arriba entonces seria arrowup
    switch(key.code){
        case 'ArrowUp':
            direction != 'ArrowDown' && setDirection (key.code)
            break;
        case 'ArrowDown':
            direction != 'ArrowUp' && setDirection (key.code)
            break;
        case 'ArrowLeft':
            direction != 'ArrowRight' && setDirection (key.code)
            break;
        case 'ArrowRight':
            direction != 'ArrowLeft' && setDirection (key.code)
            break;
    }
}

const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare (randomEmptySquare, 'foodSquare');
}

const updateScore = () => {
    scoreBoard.innerText = score;
}
const createBoard = () => {
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column,columnndex) => {
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
    })
}

//creamos la serpiente

const setGame = () =>{
    snake = ['00','01','02','03'];
    score = snake.length ;
    direction = 'ArrowRight';
    //lo que hacemos aqui es crear un array de 2 dimensiones ademas lo rellenamos con fill y se rellenan con 0;
    boardSquares = Array.from(Array(boardSize),() => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares);
    board.innerHTML = ' ';
    emptySquares = [];
    createBoard();
}
//les dara valor a todas las variables para que pueda comenzar
//lo estamos poniendo aqui porque cuando el juego termine tendremos que volver a hacer eso o sa setear las variables
const startGame = () => {
    setGame();
    gameOverSign.style.display= 'none';
    startButton.disabled = true;
    drawSnake();
    updateScore();
    createRandomFood();
    //esta es la funcion donde se controlan las flechas o sea que hace si apretamos flecha hacia arriba abajo y asi
    document.addEventListener('keydown', directionEvent);
}

startButton.addEventListener('click', startGame);
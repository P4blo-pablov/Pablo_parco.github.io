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
    Arrowleft: -1
};
//variables del juego
//se modificaran a medida que avance el juego 
let snake;
let score;
let direction;
let boardSquare;
let emptySquare;
let moveInterval;
const createBoard = () => {
    boardSquares.forEach( (row, rowIndex) =>{
        row.forEach((column,columndex) =>{
            const squareValue = '${rowIndex}${columndex}';
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class','square emptySquare');
            squareElement.setAttribute('id',squareValue);
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
    board.innerHTML = '';
    emptySquare =[];
    createBoard();
}
//les dara valor a todas las variables para que pueda comenzar
//lo estamos poniendo aqui porque cuando el juego termine tendremos que volver a hacer eso o sa setear las variables
const startGame = () => {
    setGame();
}

startButton.addEventListener('click', startGame);



let color = "black"; //color used for button changing

let click = false; //click default is false
document.body.onmousedown = ()=>(click = true); //when mousepressed down click is true
document.body.onmouseup = ()=>(click=false);

function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)=> div.remove()); //clears all squares 
    board.style.gridTemplateColumns = `repeat(${size},1fr)`; //Makes the square based on size
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;
    for (let i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);  //hovering colors
        square.addEventListener('mousedown', colorSquare);
        square.addEventListener('click', colorSquare);   //clicking colors
        square.style.backgroundColor = 'lightgray';
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input){ //changes boardsize according to input
    if (input >= 2 || input <= 100){ //prevents size change too small or big
        populateBoard(input);
    }
    else{
        console.log("invalid size");
    }
}

function colorSquare(){ //color square black called by listener when mouseover
    if (click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)=> div.style.backgroundColor = 'lightgray'); //clears all squares
}

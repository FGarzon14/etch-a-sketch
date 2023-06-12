//Con este codigo conseguimos que el documento JS se cargue antes de
//nuestro archivo HTML
document.addEventListener("DOMContentLoaded", function() {
    createBoard();
    createDiv();
    draw();
   
})

//Esta funcion ayuda a crear el tamano del container del grid
function createBoard(size){
    const board = document.querySelector(".board");    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

//Esta funcion crea el numero de divs del grid
function createDiv(size){
    const board = document.querySelector(".board");
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
    var boardDiv = document.createElement("div");
    board.appendChild(boardDiv);
    boardDiv.classList.add("boardDiv");
}}
    draw();
}

//creamos el efecto Draw al pasar el raton por encima
function draw(){ 
    //creamos una Nodelist a partir de los elementos BoardDiv
    const boardDivs = document.querySelectorAll(".boardDiv");
        //En la siguiente linea se itera sobre cada uno de los elementos
        //boardDiv
        boardDivs.forEach(function(boardDiv){ 
            //ahora agregamos un evento a cada uno de los boardDiv iterados
            boardDiv.addEventListener("mouseover", function(){
    boardDiv.setAttribute("style", "background-color: blue")
})
    })
}

function userSize(){
    var userSize = prompt("Choose a size");
    if (userSize > 100){
        alert("That's too many squares, dude");
        return false; 
    } else if (userSize < 100){
        const board = document.querySelector(".board");
        board.innerHTML = "";  
        createBoard(userSize); 
        createDiv(userSize);
        draw();
    }
}
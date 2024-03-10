const gridContainer = document.querySelector(".grid")

const test = 12;

function createRow() {
    let row = document.createElement('div');
    row.classList.add('row')
    const gridSquare = document.createElement("div")

    gridSquare.classList.add('gridSquare')
    gridSquare.style.width = "calc(100% / " + test + ")";
    gridSquare.style.height = "calc(100% / " + test + ")";
    gridContainer.appendChild(gridSquare);
}

function getPrimaryGrid() {
    for (let i = 1; i <= test; i++) {
        
        // createRow();

        for (let j = 1 ; j <= test ; j++ ) {
        
            createRow();
            
        }
    } 
}

function userGrid(input) {

}

function gridDraw() {

}

getPrimaryGrid();
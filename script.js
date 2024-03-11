let gridContainer = document.querySelector(".grid")
let pixels;

function getPrimaryGrid(pixels = 16) {
    for (let i = 1; i <= pixels; i++) {
        for (let j = 1 ; j <= pixels ; j++ ) {
        
            let row = document.createElement('div');
            let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")

            row.classList.add('row')
            const gridSquare = document.createElement("div")
        
            gridSquare.classList.add('gridSquare')
            gridSquare.style.width = "calc(100% / " + pixels + ")";
            gridSquare.style.height = "calc(100% / " + pixels + ")";
            gridSquare.addEventListener('mouseenter', function () {
                    // gridSquare.classList.add('gridDraw')
                    gridSquare.style.backgroundColor = randomColor;
                });
            gridContainer.appendChild(gridSquare);
            
        }
    } 
}


function userGrid() {
    pixels = prompt("Enter a number 100 or less for the etch-a-sketch canvas");
    gridContainer.innerHTML = '';

    while (pixels > 100 || pixels === null || pixels === '') {
        pixels = prompt("Please choose a number 100 or less");
    }
    return getPrimaryGrid(pixels);
}

function eraseGrid() {
    gridContainer.innerHTML = '';
    getPrimaryGrid(pixels);
}

getPrimaryGrid();
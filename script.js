const grid = document.querySelector('.grid');

function getGridSize() {
    const size = prompt("Grid Size x*x ? (x < 100)");
    if (size === null) return 64;
    if (size > 100 || size < 1) getGridSize();
    return +size;
}

function showGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }   
}

function paintGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mousemove', () => {
            square.style.backgroundColor = '#F5EAEA';
        });
    })
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.style.backgroundColor = '#F16767';
        })
}

const gridSizeButton = document.querySelector('.grid-size');
gridSizeButton.addEventListener('click', () => {
    showGrid(getGridSize());
    paintGrid();
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid); 

showGrid(64);
paintGrid();


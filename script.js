const grid = document.querySelector('.grid');

function getGridSize() {
    const size = prompt("Grid Size x*x ? (x < 100)");
    if (size === null) return 8;
    if (size > 100 || size < 1) getGridSize();
    return +size;
}

function showGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${500/size}px`;
        square.style.height = `${500/size}px`;
        square.style.backgroundColor = '#F16767';
        grid.appendChild(square);
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

showGrid(22);
paintGrid();


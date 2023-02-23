const grid = document.querySelector('.grid');
let black = true;
let rainbow = false;

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
        square.style.backgroundColor = '#F5EAEA';
        grid.appendChild(square);
    }   
}

function paintGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            // square.style.backgroundColor = '#F16767'; // The red-ish color
            if (black) square.style.backgroundColor = 'black';
            if (rainbow) square.style.backgroundColor = `${rainbowColors()}`;
            
        });
    })
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.style.backgroundColor = '#F5EAEA';
        })
}

const gridSizeButton = document.querySelector('.grid-size');
gridSizeButton.addEventListener('click', () => {
    showGrid(getGridSize());
    paintGrid();
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid); 

const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    black = true;
    rainbow = false;
});

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => {
    rainbow = true;
    black = false;
});

showGrid(25);
paintGrid();


function rainbowColors() {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'purple'];
    return rainbowColors[Math.floor(Math.random() * 7)];
}
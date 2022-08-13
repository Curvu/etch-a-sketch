const grid = document.querySelector('.grid');
let SIZE = 16;

// Shows the line of each square
const lines = document.getElementById('lines');
lines.addEventListener('click', () => {
    for (let i = 0; i < (SIZE*SIZE); i++) {
        grid.children[i].classList.toggle('show-line');
    };
});

// Reset the board
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    grid.innerHTML = '';
    createGrid(SIZE);
});

// Check if mouse is Up or Down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Paint the square
function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
};

// Create the board
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let gridElement;
    for (let i = 0; i < (size*size); i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', paint);
        gridElement.addEventListener('mousedown', paint);
        grid.appendChild(gridElement);
    };
};

// Slider
const slider = document.querySelector('.slider');
const value = document.getElementById('slider-val');
slider.addEventListener('input', (e) => {
    value.textContent = e.currentTarget.value;
    SIZE = e.currentTarget.value;
    grid.innerHTML = '';
    createGrid(SIZE);
});

// After load
window.onload = () => {
    createGrid(SIZE);
};

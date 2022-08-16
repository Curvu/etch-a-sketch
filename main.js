const grid = document.querySelector('.grid');
const lines = document.getElementById('lines');
const reset = document.getElementById('reset');
const slider = document.querySelector('.slider');
const value = document.getElementById('slider-val');
const rainbowBtn = document.getElementById('rainbow');
const colorInput = document.getElementById('color-input');

// Check if mouse is Up or Down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let rainbowToggler = false;

let SIZE = 16;
let color = 'black';

// Shows the line of each square
lines.addEventListener('click', () => {
    for (let i = 0; i < (SIZE*SIZE); i++) {
        grid.children[i].classList.toggle('show-line');
    };
    lines.classList.toggle('active');
});

// Reset the board
reset.addEventListener('click', () => {
    // Reset the size
    SIZE = 16;
    value.textContent = 16;
    slider.value = 16;

    // Clean grid and re-create
    grid.innerHTML = '';
    createGrid(SIZE);

    // Check if grid lines button is active or not
    if (lines.classList.contains('active')) return;
    else lines.classList.add('active');
});

// Paint the square
function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (rainbowToggler) rainbow();
    e.target.style.backgroundColor = color;
};

// Create the board
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let gridElement;
    for (let i = 0; i < (size*size); i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.classList.add('show-line');
        gridElement.addEventListener('mouseover', paint);
        gridElement.addEventListener('mousedown', paint);
        grid.appendChild(gridElement);
    };
};

// Slider
slider.addEventListener('input', (e) => {
    value.textContent = e.currentTarget.value;
    SIZE = e.currentTarget.value;
    grid.innerHTML = '';
    createGrid(SIZE);
});

// Paint rainbow
rainbowBtn.addEventListener('click', () => {
    rainbowToggler = !rainbowToggler;
    rainbowBtn.classList.toggle('active');
    console.log(rainbowBtn.classList)
});

function rainbow() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    color = `rgb(${r}, ${g}, ${b})`;
    colorInput.value = rgbToHex(r, g, b);
};

// Convert RGB to HEX
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// Color input
colorInput.addEventListener('input', (e) => {
    color = colorInput.value;
});

// After load
window.onload = () => {
    createGrid(SIZE);
};

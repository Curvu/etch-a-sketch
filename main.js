const grid = document.querySelector('.grid');
let SIZE = 16;

const lines = document.getElementById('lines');
lines.addEventListener('click', () => {
    for (let i = 0; i < (SIZE*SIZE); i++) {
        grid.children[i].classList.toggle('show-line')
    }
})

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black'
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    let gridElement;
    for (let i = 0; i < (size*size); i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', paint)
        gridElement.addEventListener('mousedown', paint)
        grid.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(SIZE)
}

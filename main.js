const container = document.querySelector('.container');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black'
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    let gridElement;
    for (let i = 0; i < (size*size); i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', paint)
        gridElement.addEventListener('mousedown', paint)
        container.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(16)
}

const container = document.querySelector('.container');

function createGrid(size) {
    let gridElement;
    for (let i = 0; i < (size*size); i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        // grid-template-columns: repeat(16, 1fr);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        container.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(16)
}

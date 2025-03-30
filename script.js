const container = document.querySelector('.container');


const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

createGrid(3);

function createGrid(number) {
    grid.innerHTML = '';
    for (let i = 0; i < number; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
        for (let j = 0; j < number; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
    }
    assignEventToGrid();
}

const button = document.querySelector('.reset');
button.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Number of square per side of the new grid?"));
    createGrid(gridSize);
});

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + color.join(', ') + ")";
}

function assignEventToGrid(){
    document.querySelectorAll(".square").forEach(item => {
        let bright = 1;
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = randomColor();
            bright -= 0.1;
            bright = Math.max(bright, 0);
            item.style.filter = `brightness(${bright})`;
        });
        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "white";
        });
    });
}



   
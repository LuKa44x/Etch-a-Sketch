const container = document.querySelector('.container');
const button = document.querySelector('.reset');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

createGrid(16);

function createGrid(number){
    for(let i = 0; i < number; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
        for(let j = 0; j < number; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
    }
}
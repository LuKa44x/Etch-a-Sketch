let divGrid = [];

const divContainer = document.querySelector(".gridContainer");
gridCreation(256);



function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return "rgb(" + color.join(', ') + ")";
}




function gridCreation(number) {
    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.classList.add('grid-item');
        divGrid.push(div);
        divGrid.forEach(div => {
            divContainer.appendChild(div);
        })
        
        document.querySelectorAll(".grid-item").forEach(item => {
            let bright =1;
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = randomColor();
                bright -= 0.1;
                bright = Math.max(bright, 0);
                item.style.filter = `brightness(${bright})`;
                
            });
            item.addEventListener("mouseleave", () => {
                item.style.backgroundColor = "white";
                
            })
        });
    }
}

function gridRemotion() {
    document.querySelectorAll(".grid-item").forEach(div => div.remove());
    divGrid = [];
}



const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Number of square per side of the new grid?"));
    gridRemotion();
    gridCreation(gridSize);
});
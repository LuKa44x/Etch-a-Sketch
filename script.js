let divGrid = [];

const divContainer = document.querySelector(".gridContainer");
gridCreation(256);

function gridCreation(number){
for( let i=0;i<number;i++){
    const div = document.createElement("div");
    div.classList.add('grid-item');
    divGrid.push(div);

    divGrid.forEach(div => {
        divContainer.appendChild(div);
    })
}
}



function gridRemotion(){
    document.querySelectorAll(".grid-item").forEach(div => div.remove());
    divGrid = [];
}


const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    let gridSize = parseInt(prompt("Number of square per side of the new grid?"));
    gridRemotion();
    gridCreation(gridSize);
});
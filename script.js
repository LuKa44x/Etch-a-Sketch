let divGrid = [];

const divContainer = document.querySelector(".container");


for( let i=0;i<256;i++){
    const div = document.createElement("div");
    div.classList.add('grid-item');
    divGrid.push(div);
}

divGrid.forEach(div => {
    divContainer.appendChild(div);
})
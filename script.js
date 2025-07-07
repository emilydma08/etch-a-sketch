const grid = document.querySelector(".grid");

const button = document.querySelector("#sizeChange");

for (let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.setAttribute('class', 'square');
    grid.appendChild(box);
}

button.addEventListener('click', () => {
    let userInput = prompt("Enter new grid size: ", "16");
    let newSize = parseInt(userInput, 10);
    let dimensions = (newSize * 50) + 4;

    grid.replaceChildren();
    grid.style.width = dimensions + 'px';
    grid.style.height = dimensions + 'px';
    

    for (let i = 0; i < (newSize * newSize); i++){
        let box = document.createElement('div');
        box.setAttribute('class', 'square');
        grid.appendChild(box);
    }

    const boxes = document.querySelectorAll(".square");
    boxes.forEach((square) => {
        square.addEventListener('mouseover', () =>{
            if (window.getComputedStyle(square).backgroundColor == 'rgb(255, 255, 255)'){
                square.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.random() + ")";
            }
        })
    });
});

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener('mouseover', () =>{
        if (window.getComputedStyle(square).backgroundColor == 'rgb(255, 255, 255)'){
            square.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.random() + ")";
        }
    })
});


function defaultGrid() {
    const rowNum = 16;
    const colNum = 16;

    let container = document.getElementById('container');

    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.height = (container.clientHeight / rowNum) + 'px';
        row.style.width = container.clientWidth + 'px';

        for (let i = 0; i < colNum; i++) {
            let col = document.createElement('div');
            col.className = 'square';
            col.style.height = row.style.height;
            col.style.width = (container.clientWidth / colNum) + 'px';

            row.appendChild(col);
        };

        container.appendChild(row);
    };

    let cells = document.getElementsByClassName('square');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseenter', () => {
            cells[i].style.backgroundColor = 'black';
        });
    };
};

document.addEventListener("DOMContentLoaded", function() {
    defaultGrid();
})

let size;

function sizePrompt() {
    let userInput = prompt("Please provide grid size:");
    size = parseInt(userInput);
    createGrid();
};

function createGrid() {
    const rowNum = size;
    const colNum = size;

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.height = (container.clientHeight / rowNum) + 'px';
        row.style.width = container.clientWidth + 'px';

        for (let i = 0; i < colNum; i++) {
            let col = document.createElement('div');
            col.className = 'square';
            col.style.height = row.style.height;
            col.style.width = (container.clientWidth / colNum) + 'px';

            row.appendChild(col);
        };

        container.appendChild(row);
    };

    let cells = document.getElementsByClassName('square');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseenter', () => {
            cells[i].style.backgroundColor = 'black';
        });
    };
};
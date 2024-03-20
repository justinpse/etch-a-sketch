const rowNum = 16;
const colNum = 16;

let container = document.getElementById('container');

for (let i = 0; i < rowNum; i++) {
    let row = document.createElement('div');

    for (let i = 0; i < colNum; i++) {
        let col = document.createElement('div');
        col.className = 'square';

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
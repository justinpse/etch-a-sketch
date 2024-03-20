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


let ChessTable = document.createElement('table');
for (i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    for (j = 0; j < 8; j++) {
        let td = document.createElement('td');
        td.id = "cell-" + i.toString() + "_" + j.toString();
        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'cell blackcell');
            tr.appendChild(td);
            
        }
        td.addEventListener('click',console.log(5))
    }
    ChessTable.appendChild(tr);
}
ChessTable.addEventListener('click',console.log())
document.body.appendChild(ChessTable);
function putimageonboard(td,color,type){
    const image = document.createElement('img')
        image.src = 'chess/images/' + color + '/' + type + '.png';
        td.appendChild(image);
}


let ChessTable = document.createElement('table');
for (i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    for (j = 0; j < 8; j++) {
        let td = document.createElement('td');
        tr.id = i.toString()
        td.id = "td " + i.toString() + "_" + j.toString();
        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'cell blackcell');
            tr.appendChild(td);
            
        }
        td.addEventListener('click',()=> console.log(td.id))
    }
    ChessTable.appendChild(tr);
}
document.body.appendChild(ChessTable);
putimageonboard((document.getElementById('td 5_2')),'white','bishop');





function onclick(td){
    // if ((document.getElementsByClassName('chonsecell')) !== undefined) {
    //     (document.getElementsByClassName('chonsecell').setAttribute('class', 'blackcell'))
    // }
   td.setAttribute('class','cell chosencell')
}
function putimageonboard(td,color,type){
    const image = document.createElement('img')
        image.src = 'chess/images/' + color + '/' + type + '.png';
        td.appendChild(image);
}

function makechessboard() {
    let ChessTable = document.createElement('table');
    for (i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        for (j = 0; j < 8; j++) {
            let td = document.createElement('td');
            tr.id = i.toString();
            td.id = i.toString() + " " + j.toString();
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            }
            else {
                td.setAttribute('class', 'cell blackcell');
                tr.appendChild(td);

            }
            td.addEventListener('click',(onclick(td)));
            // td.addEventListener('click', ()=> (td.setAttribute('class', 'cell chosencell')))
        }
        ChessTable.appendChild(tr);

    }
    document.body.appendChild(ChessTable);
}
function intialboard() {
    putimageonboard((document.getElementById('0 0')), 'white', 'rook');
    putimageonboard((document.getElementById('0 7')), 'white', 'rook');
    putimageonboard((document.getElementById('0 1')), 'white', 'bishop');
    putimageonboard((document.getElementById('0 6')), 'white', 'bishop');
    putimageonboard((document.getElementById('0 2')), 'white', 'knight');
    putimageonboard((document.getElementById('0 5')), 'white', 'knight');
    putimageonboard((document.getElementById('0 3')), 'white', 'king');
    putimageonboard((document.getElementById('0 4')), 'white', 'queen');
    putimageonboard((document.getElementById('7 0')), 'dark', 'rook');
    putimageonboard((document.getElementById('7 7')), 'dark', 'rook');
    putimageonboard((document.getElementById('7 1')), 'dark', 'bishop');
    putimageonboard((document.getElementById('7 6')), 'dark', 'bishop');
    putimageonboard((document.getElementById('7 2')), 'dark', 'knight');
    putimageonboard((document.getElementById('7 5')), 'dark', 'knight');
    putimageonboard((document.getElementById('7 4')), 'dark', 'king');
    putimageonboard((document.getElementById('7 3')), 'dark', 'queen');
    // putimageonboard((document.getElementById('1').innerHTML), 'white', 'pawn');
    
}

makechessboard();

intialboard();

console.log(document.getElementById('1'))
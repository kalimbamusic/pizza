function possiblemoves(piecetype,position){
    i = document.querySelector(".maybecell")
    if ((i !== null )) {
        (i.classList.remove('maybecell'))
    }
    let stringofid = (Array.from(position))
    arrayrow = stringofid[0]
    arraycolumn = stringofid[2]
    if (piecetype === '<img src="chess/images/dark/pawn.png">') {
        (arrayrow --)
        console.log(position[0]--)
        console.log((String(arrayrow))+' ' + arraycolumn)
        console.log((arrayrow + 1))
        possiblemovesid = document.getElementById((String(arrayrow))+' ' + arraycolumn)
        console.log(possiblemovesid)
        possiblemovesid.classList.add('maybecell')

}


}
function onclick(td){
    i = document.querySelector(".chosencell")
    if ((i !== null )) {
        (i.classList.remove('chosencell'))
    }  
   td.currentTarget.classList.add("chosencell")
   let piecetype = td.currentTarget.innerHTML
   let position = (td.currentTarget.id)
//    console.log(td.currentTarget.id)
//    console.log(td.currentTarget.innerHTML)
   possiblemoves(piecetype,position)

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
            
            td.addEventListener('click', onclick);
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
    for (let i = 0; i < 8; i++) {
        putimageonboard((document.getElementById('6 ' + i)), 'dark', 'pawn');
        ;
    }  
     
}

makechessboard();

intialboard();

// console.log(document.getElementById('0 2'))
// console.log(document.getElementsByClassName('chosencell').length)
// console.log(document.getElementById(0).getElementsByClassName('cell'))
// console.log(document.images.item(0).outerHTML)
// console.log(document.getElementById('0 2').innerHTML)
//todo: turn the td.id to a string so you could change it
// ((document.getElementsByClassName('chonsecell').array.forEach(element => {
// })) !== undefined)
// console.log(document.getElementById('5 7'))


function onsecondclick(){
  newmaybecell = document.getElementsByClassName(".maybecell")
  console.log(newmaybecell)
}



function possiblemoves(piecetype, position) {
  document.querySelectorAll(".maybecell").forEach((td) => {
    td.classList.remove('maybecell')})
 

  x = parseInt(position[0]);
  y = parseInt(position[2]);
  let directions = [[x,y+1],[x,y-1],[x-1,y],[x-1,y-1],[x-1,y+1],[x+1,y],[x+1,y+1],[x+1,y-1]];
  if (piecetype === '<img src="chess/images/dark/king.png">'||
  piecetype === '<img src="chess/images/white/king.png">') {
  for (let i = 0; i < directions.length; i++) {
  elementById(directions[i][0], directions[i][1]);}}
  
    function elementById(x, y) {
    let maybecell = document.getElementById(String(x) + " " + String(y));
    console.log(maybecell)
    if(maybecell !== null){
    maybecell.classList.add("maybecell")
    if (maybecell.id === position){
      maybecell.classList.remove('maybecell')
    }
    if(maybecell.innerHTML !== ''){
      maybecell.classList.remove('maybecell')
    }
  }
  i = document.getElementsByClassName(".maybecell")
  // i.addEventListener('click',onsecondclick)
}
}
function onclick(td) {
  i = document.querySelector(".chosencell");
  if (i !== null) {
    i.classList.remove("chosencell");}
  
  td.currentTarget.classList.add("chosencell");
  let piecetype = td.currentTarget.innerHTML;
  let position = td.currentTarget.id;
  possiblemoves(piecetype, position);
}

function putimageonboard(td, color, type) {
const image = document.createElement("img");
  image.src = "chess/images/" + color + "/" + type + ".png";
  td.appendChild(image);
}

function makechessboard() {
  let ChessTable = document.createElement("table");
  for (i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    for (j = 0; j < 8; j++) {
      let td = document.createElement("td");
      tr.id = i.toString();
      td.id = i.toString() + " " + j.toString();
      if ((i + j) % 2 == 0) {
        td.setAttribute("class", "cell whitecell");
        tr.appendChild(td);
      } else {
        td.setAttribute("class", "cell blackcell");
        tr.appendChild(td);
      }

      td.addEventListener("click", onclick);
      // td.addEventListener('click', ()=> (td.setAttribute('class', 'cell chosencell')))
    }
    ChessTable.appendChild(tr);
  }
  document.body.appendChild(ChessTable);
}
function intialboard() {
  putimageonboard(document.getElementById("0 0"), "white", "rook");
  putimageonboard(document.getElementById("0 7"), "white", "rook");
  putimageonboard(document.getElementById("0 1"), "white", "bishop");
  putimageonboard(document.getElementById("0 6"), "white", "bishop");
  putimageonboard(document.getElementById("0 2"), "white", "knight");
  putimageonboard(document.getElementById("0 5"), "white", "knight");
  putimageonboard(document.getElementById("0 3"), "white", "king");
  putimageonboard(document.getElementById("0 4"), "white", "queen");
  putimageonboard(document.getElementById("7 0"), "dark", "rook");
  putimageonboard(document.getElementById("7 7"), "dark", "rook");
  putimageonboard(document.getElementById("7 1"), "dark", "bishop");
  putimageonboard(document.getElementById("7 6"), "dark", "bishop");
  putimageonboard(document.getElementById("7 2"), "dark", "knight");
  putimageonboard(document.getElementById("7 5"), "dark", "knight");
  putimageonboard(document.getElementById("7 4"), "dark", "king");
  putimageonboard(document.getElementById("7 3"), "dark", "queen");
  for (let i = 0; i < 8; i++) {
  //   putimageonboard(document.getElementById("6 " + i), "dark", "pawn");
  // }
  // for (let i = 0; i < 8; i++) {
  //   putimageonboard(document.getElementById("1 " + i), "white", "pawn");
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
// ((document.getElementsByClassName('chonsecell').position.forEach(element => {
// })) !== undefined)
// console.log(document.getElementById('5 7'))

// maybecell = document.getElementById(String(x)+' ' + y)
// var maybecellslist = []
// maybecellslist.push(maybecell)
// console.log(maybecellslist)
// maybecellslist[0].classList.add('maybecell')
// let maybecell = document.getElementById(String(x)+' ' + y)



// function possiblemoves(){
// x = parseInt(position[0]);
// y = parseInt(position[2]);
// let directions = [[x,y+1],[x,y-1],[x-1,y],[x-1,y-1],[x-1,y+1],[x+1,y],[x+1,y+1],[x+1,y-1]];
// }//(if certin array returned piece, make that array undefined)


// 
// x = parseInt(position[0]);
// y = parseInt(position[2]);
// // const kingmoves = [[0,1],[0,-1] ,[-1,0],[-1,-1],[-1,1],[1,0],[1,1],[1,-1]]
//   const kingmoves = [[x,y+1],[x,y-1],[x-1,y],[x-1,y-1],[x-1,y+1],[x+1,y],[x+1,y+1],[x+1,y-1]]

// const directions = [];
// for (let i = -1; i < 2; i++) {
//     for (let j = -1; j < 2; j++) {
//       directions.push([x + i,y+j]) 
      
//     }
//   }
//   // for (let i = 0; i < directions.length; i++) {
//   //   elementById(directions[i][0], directions[i][1])
//   }

// // console.log(directions)
// if (piecetype === '<img src="chess/images/dark/pawn.png">') {
//   elementById(x - 1, y);
// }
// if (piecetype === '<img src="chess/images/dark/king.png">'||
// piecetype === '<img src="chess/images/white/king.png">') {
//   for (let i = 0; i < directions.length; i++) {
//   elementById(directions[i][0], directions[i][1]);
//   }}
// if (
//   piecetype === '<img src="chess/images/dark/rook.png">' ||
//   piecetype === '<img src="chess/images/white/rook.png">'
// ) {
//   for (i = 0; i < directions.array; i+=2) {
//     for (let j = -8; j < 8; j++) {
//       elementById(directions[i][j], directions[i][1]);
//     }
//   }
//   for (let j = 0; j < 8; j++) {
//     x = position[0];
//     elementById(x, j);
//   }}
// if (
//     piecetype === '<img src="chess/images/dark/knight.png">' ||
//     piecetype === '<img src="chess/images/white/knight.png">'
//   ){

//   }
   
  
  
// if (
//   piecetype === '<img src="chess/images/dark/bishop.png">' ||
//   piecetype === '<img src="chess/images/white/bishop.png">'
//   ) {
//   for (x = 0; x < 8; x++) {
//     elementById(x, x)
//     // console.log(x, x) 
//     }
//     for (let y = 0; y < 8; y++) {
//       x = y;
//       elementById(y, y);
//     }
  
// }






function possiblemoves(piecetype, position) {
  document.querySelectorAll(".maybecell").forEach((td) => {
    td.classList.remove('maybecell')})
 

  let x = parseInt(position[0]);
  let y = parseInt(position[2]);
  
  
  // if (piecetype === '<img src="chess/images/dark/king.png">'||
  // piecetype === '<img src="chess/images/white/king.png">') {
  // // for (let i = 0; i < directions.length; i++) {
  // // elementById(directions[i][0], directions[i][1]);}}
  
  
  
  
  
  // if (piecetype === '<img src="chess/images/dark/bishop.png">'||
  // piecetype === '<img src="chess/images/white/bishop.png">') {
  // returnbishopmoves(x,y)
  //   for (let i = 0; i < directions.length; i+2) {
  //   elementById(directions[i][0], directions[i][1]);
  //   console.log(x,y)
  //    x++,y++}}
  
  
     function returnmoves(x,y){
      for (let index = 0; index < 9; index++) {
        for (let j = 1; j < 9; j++) {
          let directions = [[x,y+j],[x,y-j],[x-j,y],[x+j,y],[x-j,y-j],[x+j,y+j],[x+j,y-j],[x-j,y+j]];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row <8 && row> -1 && col<8 && col> -1) {
          elementById(row,col)
        }
        }
        
      }
    }
    returnmoves(4,5)

  
  
  
  
function elementById(x, y) {
    let maybecell = document.getElementById(String(x) + " " + String(y));
    
    var cells = []
    if(maybecell !== null && maybecell.id !== position && maybecell.innerHTML === ''){
      maybecell.classList.add("maybecell")
      if(maybecell.innerHTML !== ''){
        maybecell.classList.add('occupiedcell')
      }
      if(maybecell.classList.contains('maybecell')){
        cells.push(maybecell)
      }
      // maybecell.addEventListener('click',() => onsecondclick((piecetype,position,cells)))

  }
}
}
function onclick(e) {
  if(e.currentTarget.classList[2] === "chosencell"){
    e.currentTarget.classList.remove("chosencell");
    document.querySelectorAll(".maybecell").forEach((td) => {
      td.classList.remove('maybecell');
    })   
    return;
  }
  if(e.currentTarget.classList[2] === "maybecell"){
    console.log('maybecell!');
    return;
  }
  if (e.currentTarget.innerHTML !== ""){
    let i = document.querySelector(".chosencell");
    if (i !== null) {
      i.classList.remove("chosencell");
    }
    
    e.currentTarget.classList.add("chosencell");
    let piecetype = e.currentTarget.innerHTML;
    let position = e.currentTarget.id;
    possiblemoves(piecetype, position);
  }
  
}

function makechessboard() {
  let ChessTable = document.createElement("table");
  document.body.appendChild(ChessTable);
  for (i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    ChessTable.appendChild(tr);
    for (j = 0; j < 8; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      // tr.id = i.toString();//maybe use later
      td.id = i.toString() + " " + j.toString();
      if ((i + j) % 2 == 0) {
        td.className= 'cell whitecell';
      } else {
        td.className = "cell blackcell";
      }
      td.addEventListener("click",(e)=>{onclick(e)});
    }
  }
}
function intialboard() {
  putimageonboard("0 0", "white", "rook");
  putimageonboard("0 7", "white", "rook");
  putimageonboard("0 1", "white", "bishop");
  putimageonboard("0 6", "white", "bishop");
  putimageonboard("0 2", "white", "knight");
  putimageonboard("0 5", "white", "knight");
  putimageonboard("0 3", "white", "king");
  putimageonboard("0 4", "white", "queen");
  putimageonboard("7 0", "dark", "rook");
  putimageonboard("7 7", "dark", "rook");
  putimageonboard("7 1", "dark", "bishop");
  putimageonboard("7 6", "dark", "bishop");
  putimageonboard("7 2", "dark", "knight");
  putimageonboard("7 5", "dark", "knight");
  putimageonboard("7 4", "dark", "king");
  putimageonboard("7 3", "dark", "queen");
  for (let i = 0; i < 8; i++) {
  //   putimageonboard("6 " + i, "dark", "pawn");
  // }
  // for (let i = 0; i < 8; i++) {
  //   putimageonboard("1 " + i, "white", "pawn");
  }
}
function putimageonboard(id, color, type) {
  let td = document.getElementById(id)
  const image = document.createElement("img");
  image.src = "chess/images/" + color + "/" + type + ".png";
  td.appendChild(image);
}


window.addEventListener('load',()=>{
  makechessboard();
  intialboard();
} );
//todo:credit

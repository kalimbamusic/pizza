function makechessboard() {
  let ChessTable = document.createElement("table");
  document.body.appendChild(ChessTable);
  for (i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    ChessTable.appendChild(tr);
    for (j = 0; j < 8; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
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
  putimageonboard("0 1", "white", "knight");
  putimageonboard("0 6", "white", "knight");
  putimageonboard("0 2", "white", "bishop");
  putimageonboard("0 5", "white", "bishop");
  putimageonboard("0 3", "white", "king");
  putimageonboard("0 4", "white", "queen");
  putimageonboard("7 0", "dark", "rook");
  putimageonboard("7 7", "dark", "rook");
  putimageonboard("7 1", "dark", "knight");
  putimageonboard("7 6", "dark", "knight");
  putimageonboard("7 2", "dark", "bishop");
  putimageonboard("7 5", "dark", "bishop");
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
function onclick(e) {
  document.querySelectorAll(".chosencell").forEach((e) => {
    e.classList.remove('chosencell');})  
    if(e.currentTarget.classList.contains('maybecell')){
       e.currentTarget.innerHTML = arr[arr.length-1];
      i =  document.getElementById(arr[arr.length-2]);
      i.innerHTML = ""
       document.querySelectorAll(".maybecell").forEach((e) => {
        e.classList.remove('maybecell');})
       return}
      document.querySelectorAll(".maybecell").forEach((e) => {
        e.classList.remove('maybecell');})
        
        
        // if(maybecell.classList.contains('maybecell')
        // if(e.currentTarget.classList.contains('chosencell')){
        //   e.currentTarget.classList.remove("chosencell");
        // return;}
      // }
  //   return;
  
    
    e.currentTarget.classList.add("chosencell");
    let piecetype = e.currentTarget.innerHTML;
    let position = e.currentTarget.id;
    if (piecetype !== ""){
      arr.push(position)
      arr.push(piecetype)
    }
    possiblemoves(piecetype, position);
  } 
let arr = []
let piecetype;
function possiblemoves(piecetype, position) {
  let x = parseInt(position[0]);
  let y = parseInt(position[2]);
  if (piecetype === '<img src="chess/images/dark/queen.png">' || piecetype === '<img src="chess/images/white/queen.png">'){
    for (let index = 0; index < 8; index++) {
      for (let j = 1; j < 8; j++) {
        let directions = [[x,y+j],[x,y-j],[x-j,y],[x+j,y],[x-j,y-j],[x+j,y+j],[x+j,y-j],[x-j,y+j]];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row <8 && row> -1 && col<8 && col> -1) {
        elementById(row,col)
  }}}}
  if (piecetype === '<img src="chess/images/dark/king.png">' || piecetype === '<img src="chess/images/white/king.png">'){
    for (let index = 0; index < 8; index++) {
      for (let j = 1; j < 2; j++) {
        let directions = [[x,y+j],[x,y-j],[x-j,y],[x+j,y],[x-j,y-j],[x+j,y+j],[x+j,y-j],[x-j,y+j]];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row <8 && row> -1 && col<8 && col> -1) {
        elementById(row,col)
        }}}}
        if (piecetype === '<img src="chess/images/dark/bishop.png">' || piecetype === '<img src="chess/images/white/bishop.png">'){
          for (let index = 0; index < 5; index++) {
            for (let j = 1; j < 8; j++) {
              let directions = [[x-j,y-j],[x+j,y+j],[x-j,y+j],[x+j,y-j],[x,y+j],[x,y-j],[x-j,y],[x+j,y]];
              let row = directions[index][0];
              let col = directions[index][1];
              if (row <8 && row> -1 && col<8 && col> -1) {
              elementById(row,col)
              }}}}
              if (piecetype === '<img src="chess/images/dark/rook.png">' || piecetype === '<img src="chess/images/white/rook.png">'){
                for (let index = 4; index < 8; index++) {
                  for (let j = 1; j < 8; j++) {
                    let directions = [[x-j,y-j],[x+j,y+j],[x-j,y+j],[x+j,y-j],[x,y+j],[x,y-j],[x-j,y],[x+j,y]];
                    let row = directions[index][0];
                    let col = directions[index][1];
                    if (row <8 && row> -1 && col<8 && col> -1) {
                    elementById(row,col)
                    }}}}
                    if (piecetype === '<img src="chess/images/dark/knight.png">' || piecetype === '<img src="chess/images/white/knight.png">'){
                      for (let index = 0; index < 8; index++) {
                        for (let j = 0; j < 8; j++) {
                          let directions = [[x-j,y-j],[x+j,y+j],[x-j,y+j],[x+j,y-j],[x,y+j],[x,y-j],[x-j,y],[x+j,y]];
                          let row = directions[index][0];
                          let col = directions[index][1];
                          if (row <8 && row> -1 && col<8 && col> -1) {
                          elementById(row,col)
                          }}}}

        
                          function elementById(x, y) {
                            let maybecell = document.getElementById(String(x) + " " + String(y));
                          
                            if(maybecell !== null && maybecell.id !== x + "" + y  && maybecell.innerHTML === ''){
                              maybecell.classList.add("maybecell")}
                              if(maybecell.innerHTML.includes('white')&& piecetype.includes('dark')|| maybecell.innerHTML.includes('dark')&& piecetype.includes('white')){
                                maybecell.classList.add("occupiedcell")
                              }}
      
    

}



window.addEventListener('load',()=>{
  makechessboard();
  intialboard();
} );
//todo:credit


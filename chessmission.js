let counter = 0;
let lasttdinfo = [];
let piecetype;
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
        td.className = "cell whitecell";
      } else {
        td.className = "cell blackcell";
      }
      td.addEventListener("click", (e) => {
        onclick(e);
      });
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
    putimageonboard("6 " + i, "dark", "pawn");
  }
  for (let i = 0; i < 8; i++) {
    putimageonboard("1 " + i, "white", "pawn");
  }
}
function putimageonboard(id, color, type) {
  let td = document.getElementById(id);
  const image = document.createElement("img");
  image.src = "chess/images/" + color + "/" + type + ".png";
  td.appendChild(image);
}
function onclick(e) {
  document.querySelectorAll(".chosencell").forEach((e) => {
    e.classList.remove("chosencell");
  });
  if (
    e.currentTarget.classList.contains("maybecell") ||
    e.currentTarget.classList.contains("occupiedcell")
  ) {
    //take info from last cell that was clicked, and clear last cell
    e.currentTarget.innerHTML = lasttdinfo[lasttdinfo.length - 1];
    i = document.getElementById(lasttdinfo[lasttdinfo.length - 2]);
    i.innerHTML = "";
    document.querySelectorAll(".maybecell").forEach((e) => {
      e.classList.remove("maybecell");
    });
    document.querySelectorAll(".occupiedcell").forEach((e) => {
      e.classList.remove("occupiedcell");
    });
    counter++;
    return;
  }
  document.querySelectorAll(".maybecell").forEach((e) => {
    e.classList.remove("maybecell");
  });
  document.querySelectorAll(".occupiedcell").forEach((e) => {
    e.classList.remove("occupiedcell");
  });
  //only color cell if it's the right turn for the specific color(doesn't need to be higher in the function cause other colors can't be generated before clicked cell color was initiated)
  if (
    (e.currentTarget.innerHTML.includes("dark") && counter % 2 !== 0) ||
    (e.currentTarget.innerHTML.includes("white") &&
      (counter % 2 === 0 || counter === 0))
  ) {
    if (
      e.currentTarget.innerHTML !== "" &&
      !e.currentTarget.classList.contains("chosencell")
    ) {
      e.currentTarget.classList.add("chosencell");
    }
  }
  //keep cell && piece info, for next click or for sending it to function possiblemoves
  let piecetype = e.currentTarget.innerHTML;
  let position = e.currentTarget.id;
  if (piecetype !== "") {
    lasttdinfo.push(position);
    lasttdinfo.push(piecetype);
  }
  possiblemoves(piecetype, position);
}
function possiblemoves(piecetype, position) {
  //get cells id, change to numbers so you can caculate relative cells
  let x = parseInt(position[0]);
  let y = parseInt(position[2]);
  if (
    piecetype === '<img src="chess/images/dark/queen.png">' ||
    piecetype === '<img src="chess/images/white/queen.png">'
  ) {
    //iterate over 8 possible directions, while (trying to) adjust to specific piece
    for (let index = 0; index < 8; index++) {
      for (let j = 1; j < 8; j++) {
        let directions = [
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
          [x - j, y - j],
          [x + j, y + j],
          [x + j, y - j],
          [x - j, y + j],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        //make sure found piece is not out of bounds
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    }
  }
  if (
    piecetype === '<img src="chess/images/dark/king.png">' ||
    piecetype === '<img src="chess/images/white/king.png">'
  ) {
    for (let index = 0; index < 8; index++) {
      for (let j = 1; j < 2; j++) {
        let directions = [
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
          [x - j, y - j],
          [x + j, y + j],
          [x + j, y - j],
          [x - j, y + j],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    }
  }
  if (
    piecetype === '<img src="chess/images/dark/bishop.png">' ||
    piecetype === '<img src="chess/images/white/bishop.png">'
  ) {
    for (let index = 0; index < 5; index++) {
      for (let j = 1; j < 8; j++) {
        let directions = [
          [x - j, y - j],
          [x + j, y + j],
          [x - j, y + j],
          [x + j, y - j],
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    }
  }
  if (
    piecetype === '<img src="chess/images/dark/rook.png">' ||
    piecetype === '<img src="chess/images/white/rook.png">'
  ) {
    for (let index = 4; index < 8; index++) {
      for (let j = 1; j < 8; j++) {
        let directions = [
          [x - j, y - j],
          [x + j, y + j],
          [x - j, y + j],
          [x + j, y - j],
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    }
  }
  if (
    piecetype === '<img src="chess/images/dark/knight.png">' ||
    piecetype === '<img src="chess/images/white/knight.png">'
  ) {
    for (let index = 0; index < 8; index++) {
      for (let j = 2; j < 4; j += 2) {
        let directions = [
          [x - j, y - j],
          [x + j, y + j],
          [x - j, y + j],
          [x + j, y - j],
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    }
  }
  if (
    piecetype === '<img src="chess/images/dark/pawn.png">' ||
    piecetype === '<img src="chess/images/white/pawn.png">'
  ) {
    for (let index = 6; index < 8; index++) {
      for (let j = 1; j < 2; j++) {
        let directions = [
          [x - j, y - j],
          [x + j, y + j],
          [x - j, y + j],
          [x + j, y - j],
          [x, y + j],
          [x, y - j],
          [x - j, y],
          [x + j, y],
        ];
        let row = directions[index][0];
        let col = directions[index][1];
        if (row < 8 && row > -1 && col < 8 && col > -1) {
          elementById(row, col);
        }
      }
    } //todo: if specific directions array found an occupied cell, delete that array, countine iterating on the others.
  }

  function elementById(x, y) {
    let maybecell = document.getElementById(String(x) + " " + String(y));

    if (
      (piecetype.includes("dark") && counter % 2 !== 0) ||
      (piecetype.includes("white") && (counter % 2 === 0 || counter === 0))
    ) {
      if (
        maybecell !== null &&
        maybecell.id !== x + "" + y &&
        maybecell.innerHTML === ""
      ) {
        maybecell.classList.add("maybecell");
      }
      if (
        (maybecell.innerHTML.includes("white") && piecetype.includes("dark")) ||
        (maybecell.innerHTML.includes("dark") && piecetype.includes("white"))
      ) {
        maybecell.classList.add("occupiedcell");
      }
    }
  }
}
window.addEventListener("load", () => {
  makechessboard();
  intialboard();
});

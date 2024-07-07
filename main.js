var tileNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var turns = document.getElementById("result");

var t = 0;
var emptyTile;

var row = 4;
var col = 4;
 
startGame();
  
function startGame() {
  loadGame();

  jumbleTiles();

  allocateEmptyClass();

  assignTileNum();
 
}

// no of turns 
function noOfTurns(){
  t++;
  turns.innerText = t;  
}
// to load the game
function loadGame() {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let tiles = document.createElement("button");
      document.getElementById("board").append(tiles);

      tiles.id = r.toString() + "-" + c.toString();
      tiles.classList = "tile";
    }
  }

  this.currentTile();
}

// an empty tile
function allocateEmptyClass() {
  let eR = Math.floor(Math.random() * row);
  let eC = Math.floor(Math.random() * col);
  emptyTile = document.getElementById(eR.toString() + "-" + eC.toString());
  emptyTile.classList = "empty";
}

// jumbling the tiles at the start of the game
function jumbleTiles() {
  tileNum.sort(() => Math.random() - 0.5);
}
// a 2d array of all tile coords / ids
function toLoopOverBoard() {
  let allIds = [];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let tileId = r.toString() + "-" + c.toString();
      allIds.push(tileId);
    }
  }
  return allIds; // returns a 2d array
}

// assing each tile a number
function assignTileNum() {
  toLoopOverBoard().forEach((i) => {
    let tiles = document.getElementById(i);
    if (tiles.classList == "tile") {
      tiles.innerText = tileNum.shift();
    } else {
      tiles.innerText = " ";
    }
  });
}
// fucntion to check the cliked tile
function currentTile() {
  toLoopOverBoard().forEach((i) => {
    let tiles = document.getElementById(i);
    if (tiles.className == "tile") {
      tiles.addEventListener("click", tileClicked);
    }
  });
}

//a function to get the coords of tile clicked
function tileClicked() {
  let tileId = this.id.split("-");
  let r1 = parseInt(tileId[0]);
  let c1 = parseInt(tileId[1]);

  tilesIds(r1, c1);
}

// function to get current tile and adjacent tiles
function tilesIds(r, c) {
  var currTile = document.getElementById(r.toString() + "-" + c.toString());

  function checkempty() {
    checkLeft(currTile, r, c);
    checkRight(currTile, r, c);
    checkTop(currTile, r, c);
    checkBottom(currTile, r, c);
  }
  checkempty();
}
// look left
function checkLeft(currTile, r, c) {
  if ((c > 0 || c <= col) && c >= 1) {
    let leftTile = document.getElementById(
      r.toString() + "-" + (c - 1).toString()
    );
    if (leftTile.className == "empty") {
      // console.log(leftTile.id);
      slideLeft(currTile, leftTile);
    }
    // else {
    //   console.log("left tile");
    // }
  }
  // else {
  //   console.log("left border");
  // }
}
// look right
function checkRight(currTile, r, c) {
  if (c < col - 1 && c >= 0) {
    var rightTile = document.getElementById(
      r.toString() + "-" + (c + 1).toString()
    );
    if (rightTile.className == "empty") {
      // console.log(rightTile.id);
      slideRight(currTile, rightTile);
    }
    // else {
    //   console.log(" right tile");
    // }
  }
  // else {
  //   console.log("right border");
  // }
}
// look up
function checkTop(currTile, r, c) {
  if (r >= 1 && r <= row) {
    let topTile = document.getElementById(
      (r - 1).toString() + "-" + c.toString()
    );
    if (topTile.className == "empty") {
      // console.log(topTile.id);
      slideRight(currTile, topTile);
    }
    // else {
    //   console.log(" top tile");
    // }
  }
  // else {
  //   console.log("top border");
  // }
}
// look down
function checkBottom(currTile, r, c) {
  if (r >= 0 && r < row - 1) {
    let bottomTile = document.getElementById(
      (r + 1).toString() + "-" + c.toString()
    );

    if (bottomTile.className == "empty") {
      // console.log(bottomTile.id);
      slideRight(currTile, bottomTile);
    }
    // else {
    //   console.log(" bottom tile");
    // }
  }
  // else {
  //   console.log("bottom border");
  // }
}
// the SLIDEEE LEFTTT
function slideLeft(currTile, leftTile) {
  leftTile.classList = "tile";
  currTile.classList = "empty";

  let tempLeft = leftTile.innerText;
  let tempCurr = currTile.innerText;

  currTile.innerText = tempLeft;
  leftTile.innerText = tempCurr;

  noOfTurns();
}
// the SLIDEEE  RIGHTTT
function slideRight(currTile, rightTile) {
  rightTile.classList = "tile";
  currTile.classList = "empty";

  let tempRight = rightTile.innerText;
  let tempCurr = currTile.innerText;

  currTile.innerText = tempRight;
  rightTile.innerText = tempCurr;

  noOfTurns();
}
// the SLIDEEE TOPPP
function slideUp(currTile, topTile) {
  topTile.classList = "tile";
  currTile.classList = "empty";

  let tempTop = topTile.innerText;
  let tempCurr = currTile.innerText;

  currTile.innerText = tempTop;
  topTile.innerText = tempCurr;

  noOfTurns();
}
// the SLIDEEE BOTTOMMM
function slideDown(currTile, bottomTile) {
  bottomTile.classList = "tile";
  currTile.classList = "empty";

  let tempBottom = bottomTile.innerText;
  let tempCurr = currTile.innerText;

  currTile.innerText = tempBottom;
  bottomTile.innerText = tempCurr;

  noOfTurns();
}

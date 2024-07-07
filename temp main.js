
window.onload = function() {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      
        let tiles = document.createElement('button');
        document.getElementById('board').append(tiles);

        tiles.id = r.toString() + "-"  + c.toString();
         
    }
  }

  tilenum = Math.floor(Math.random() * 4);
  console.log(tileNum);
}

var row = 4;
var col = 4;

var tileNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];
var turns;

let start = addEventListener('onload', startGame())
// fucntion to start the game
function startGame() {
  tileNum.sort(() => Math.random() - 0.5);

  // to select a random tile
  function emptyTile() {
    // This works
    let r = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 4);
    let selectEmptyTile = document.getElementById(
      r.toString() + "-" + c.toString()
    );
    selectEmptyTile.classList = "empty";
  }
  emptyTile();
    
  for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
    
          var tile = document.createElement("button");
    
          document.getElementById("board").append(tile);
          tile.id = r.toString() + "-" + c.toString();
    
          tile.classList = "tile";
  // starting state
  // for (let r = 0; r < row; r++) {
  //   for (let c = 0; c < col; c++) {
  //     let tile = document.getElementById(r.toString() + "-" + c.toString());
  //     if (tile.classList == "tile") {
  //       tile.innerText = tileNum.shift();
  //     } else {
  //       tile.innerText = "empty";
  //     }
  //   }
  }

  // functionality
  



}
  // for (let r = 0; r < row; r++) {
  //   for (let c = 0; c < col; c++) {
  //     let tile = document.getElementById(r.toString() + "-" + c.toString());
  //     tile.addEventListener("click", slide(tile.id.split("-")));
  //   }
  // }

  // function slide(tile) {
  //   let coords = tile;
  //   let r = parseInt(coords[0]);
  //   let c = parseInt(coords[1]);
  // } 
    // var tileUp = document.getElementById(
    //   (r - 1).toString() + "-" + c.toString()
    // );
    // var tileDown = document.getElementById(
    //   (r + 1).toString() + "-" + c.toString()
    // );
    // var tileLeft = document.getElementById(
    //   r.toString() + "-" + (c - 1).toString()
    // );
    // var tileRight = document.getElementById(
    //   r.toString() + "-" + (c + 1).toString()
    // );
    

// console.log(coords);
// console.log(r, c);

    // change class
    // let temp1 = tile.classList;
    // let temp2 = tileUp.classList;

    // tile.classList = temp2;
    // tileUp.classList = temp1;


    //change number
    
    
    // if(r1 == r2 && c1 == c2 - 1){
    //   slideUp();
    // }
    // let slideDown
    // let slideLeft
    // let slideRight  }
}
// const up = document.getElementById("move-up");
// const down = document.getElementById("move-down");
// const left = document.getElementById("move-left");
// const right = document.getElementById("move-right");

// function controls() {
//   up.addEventListener("click", moveUp());
//   down.addEventListener("click", moveDown);
//   left.addEventListener("click", moveLeft);
//   right.addEventListener("click", moveRight);
// }

// function moveUp() {}
// function moveDown() {}
// function moveLeft() {}
// function moveRight() {}

// will try again using VAR ---
// window.onload = () => {
//   for (let r = 0; r < row; r++) {
//     for (let c = 0; c < col; c++) {

//       var tile = document.createElement("button");

//       document.getElementById("board").append(tile);
//       tile.id = r.toString() + "-" + c.toString();

//       tile.classList = "tile";

//     }
// }

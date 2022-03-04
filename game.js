//will control the views and the game

const game = {
  p1Mark: "o", //default
  isHumanOpponent: null,
  turn: "x",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
}; //accessable to all functions that come after.

newGameMenu = document.getElementById("new-game-menu");
gameBoard = document.getElementById("game-board");

const viewController = (view) => {
  switch (view) {
    case "mainGame":
      newGameMenu.style.display = "none";
      gameBoard.style.display = "block";
      break;
    case "newGame":
      newGameMenu.style.display = "block";
      gameBoard.style.display = "none";
      break;
    // default:
  }
};

viewController("newGame"); //initially loads with new game view

//main menu helper functions

const toggleSelection = (el) => {
  const letter = el.id;
  const o = document.querySelector("#o");
  const x = document.querySelector("#x");
  const oImg = document.querySelector("#o img");
  const xImg = document.querySelector("#x img");

  if (el.id === "x") {
    o.classList.remove("menu-selected-character");
    x.classList.add("menu-selected-character");

    game.p1Mark = "x";

    xImg.src = xImg.src.replace("silver", "dark-navy");
    oImg.src = oImg.src.replace("dark-navy", "silver");
  }
  if (el.id === "o") {
    x.classList.remove("menu-selected-character");
    o.classList.add("menu-selected-character");

    game.p1Mark = "o";

    xImg.src = xImg.src.replace("dark-navy", "silver");
    oImg.src = oImg.src.replace("silver", "dark-navy");
  }
};

const toggleHumanOrAI = (el) => {
  el.id === "human"
    ? (game.isHumanOpponent = true)
    : (game.isHumanOpponent = false);

  viewController("mainGame");
};

//game board helper functions

const cellClickHandler = (el) => {
  // alert("clicked id:" + el.id);
  //document.getElementById("content").innerHTML = "whatever";
  //must find out if the cell is already taken, if so do nothing,
  //if it is nit taken then set it to x or o based on whoevers turn it is,
  // if its the computers turn dont allow a click to do anything.
  //maybe on the computers turn we can test with a delay to make sure its locked out.
  const xCoord = el.id.charAt(0);
  const yCoord = el.id.charAt(2);
  console.log("x:" + xCoord + " " + " y:" + yCoord);
  console.log(game.board[xCoord][yCoord]);

  if (!game.board[xCoord][yCoord]) {
    if (game.turn === "x") {
      el.innerHTML = "<img src='./assets/icon-x.svg' alt='x' />";
      game.turn = "o";
      game.board[xCoord][yCoord] = "x";
    } else {
      el.innerHTML = "<img src='./assets/icon-o.svg' alt='o' />";
      game.turn = "x";
      game.board[xCoord][yCoord] = "o";
    }
  }
};

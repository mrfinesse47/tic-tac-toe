//will control the views and the game

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

const checkForWinOrTie = () => {
  //will check for the win and show the winning line
  //or determine if the game is drawn

  let nullCount = 0;
  for (y = 0; y <= 2; y++) {
    let xCount = 0;
    let oCount = 0;
    for (x = 0; x <= 2; x++) {
      if (game.board[x][y]) {
        game.board[x][y] === "x" ? xCount++ : oCount++;
      } else {
        nullCount++;
        x = 2; //may as well stop counting this line
      }
      if (xCount === 3) {
        console.log("horizontal x win at: " + x + "," + y);
      }
      if (oCount === 3) {
        console.log("horizontal o win at: " + x + "," + y);
      }
    }
  }
  for (x = 0; x <= 2; x++) {
    let xCount = 0;
    let oCount = 0;
    for (y = 0; y <= 2; y++) {
      if (game.board[x][y]) {
        game.board[x][y] === "x" ? xCount++ : oCount++;
      } else {
        nullCount++;
        y = 2;
      }
      if (xCount === 3) {
        console.log("vertical x win at: " + x + "," + y);
      }
      if (oCount === 3) {
        console.log("vertical o win at: " + x + "," + y);
      }
    }
  }
  //need to check the 2 diagonals

  if (nullCount === 0) {
    console.log("tie");
  }
};

const cellClickHandler = (el) => {
  // if its the computers turn dont allow a click to do anything.
  //maybe on the computers turn we can test with a delay to make sure its locked out.]
  const turnIndicator = document.querySelector(".whos-turn img");
  const xCoord = el.id.charAt(0); // 0,0 is bottom left on grid, 2,2 is top right
  const yCoord = el.id.charAt(2);
  console.log("x:" + xCoord + " " + " y:" + yCoord);
  console.log(game.board[xCoord][yCoord]);

  if (!game.board[xCoord][yCoord]) {
    if (game.turn === "x") {
      el.innerHTML = "<img src='./assets/icon-x.svg' alt='x' />";
      game.turn = "o";
      game.board[xCoord][yCoord] = "x";
      //toggles the indicator at the top as to whos turn it is
      turnIndicator.src = turnIndicator.src.replace(
        "icon-x-silver.svg",
        "icon-o-silver.svg"
      );
    } else {
      el.innerHTML = "<img src='./assets/icon-o.svg' alt='o' />";
      game.turn = "x";
      game.board[xCoord][yCoord] = "o";
      //toggles the indicator at the top as to whos turn it is
      turnIndicator.src = turnIndicator.src.replace(
        "icon-o-silver.svg",
        "icon-x-silver.svg"
      );
    }
    checkForWinOrTie();
  }
};

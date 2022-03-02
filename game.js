//will control the views and the game

const game = {
  p1Mark: "o",
  isHumanOpponent: null,
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

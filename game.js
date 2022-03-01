//will control the views and the game

//alert("testing script");

// const x = document.querySelector("#x");
// x.style.background = "pink";
// const o = document.querySelector("#o");
// o.classList.remove("menu-selected-character");

const game = { p1Mark: "o" }; //accessable to all functions that come after.

const toggleSelection = (el) => {
  const letter = el.id;
  const o = document.querySelector("#o");
  const x = document.querySelector("#x");
  const oImg = document.querySelector("#o img");
  const xImg = document.querySelector("#x img");

  //console.log(oImg.src);

  if (el.id === "x") {
    o.classList.remove("menu-selected-character");
    x.classList.add("menu-selected-character");

    game.p1Mark = "x";

    console.log(xImg.src);

    xImg.src = xImg.src.replace("silver", "dark-navy");
    oImg.src = oImg.src.replace("dark-navy", "silver");

    console.log(xImg.src);
  }
  if (el.id === "o") {
    x.classList.remove("menu-selected-character");
    o.classList.add("menu-selected-character");

    game.p1Mark = "o";

    xImg.src = xImg.src.replace("dark-navy", "silver");
    oImg.src = oImg.src.replace("silver", "dark-navy");

    // console.log(xImg.src);
  }
};

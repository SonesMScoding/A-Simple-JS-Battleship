const squares = document.querySelectorAll(".square");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const winMsg = document.querySelector("#message");
const errMsg = document.querySelector("#error-message");
const board = document.querySelector('.board');

let guesses = 0;
let ActiveBoard = false;
let shipIndex = null;

startButton.addEventListener("click", () => {

    shipIndex = Math.floor(Math.random() * squares.length)

    guesses = 0;
    ActiveBoard = true;

    winMsg.textContent = "";
    errMsg.textContent = "";
        winMsg.classList.add("hidden");
        errMsg.classList.add("hidden")

     squares.forEach(square => {
    square.style.backgroundColor = "#e0e0f7";
    square.style.pointerEvents = 'auto';
    }); 
});
 
resetButton.addEventListener('click', () => {
  shipIndex = null;
  guesses= 0;
  ActiveBoard = false;

    winMsg.textContent = "";
    errMsg.textContent = "";
        winMsg.classList.add("hidden");
        errMsg.classList.add("hidden")

  squares.forEach(square => {
    square.style.backgroundColor = "#888893";
    square.style.pointerEvents = 'auto';
  });
});

squares.forEach((square, index) => {
    square.addEventListener("click", () => {
        const isClicked = square.style.backgroundColor;

        if (!ActiveBoard) {
            errMsg.textContent = "You have to start the game!";
                errMsg.classList.remove("hidden");
            return;
        }

        guesses++;
        if (index === shipIndex) {
            square.style.backgroundColor = "green";
            winMsg.textContent = `You won in ${guesses} guesses!`;
                winMsg.classList.remove("hidden");
            ActiveBoard = false;
        } else {
            square.style.backgroundColor = "red";
        }

        if (isClicked === "red" || isClicked === "green") {
            errMsg.textContent = "You already clicked this square!";
                errMsg.classList.remove("hidden");
        } else {
            errMsg.textContent = "";
                errMsg.classList.add("hidden");

            
        }
    });
});
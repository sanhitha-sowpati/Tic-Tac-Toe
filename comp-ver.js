let buttons = document.querySelectorAll(".box");
let turn = document.querySelector(".turn-display");
let nums = [0,1,2,3,4,5,6,7,8]; // available indexes

let count = 0;
const winCombs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWin() {
    for(let comb of winCombs){
        let val1 = buttons[comb[0]].innerText;
        let val2 = buttons[comb[1]].innerText;
        let val3 = buttons[comb[2]].innerText;
        if(val1 === val2 && val2 === val3 && val1 !=='' && val2 !==''){
            localStorage.setItem('winner', val1); // Store "O" or "X"
            window.location.href = 'game-over.html';
            return true; // Stop further execution
        }
    }
    return false;
}

// Set initial turn display
if (turn) {
    turn.innerText = "Your Turn";
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Player move
        button.innerText = "O";
        button.disabled = true;

        // Remove player's move from nums
        let playerIdx = nums.indexOf(index);
        if (playerIdx > -1) nums.splice(playerIdx, 1);

        // Check for win after player's move
        if (checkWin()) return;

        // Show computer's turn
        if (turn) {
            turn.innerText = "Computer's Turn";
        }

        // Computer move (if any moves left)
        if (nums.length > 0) {
            let random = Math.floor(Math.random() * nums.length);
            let compIndex = nums[random];
            setTimeout(() => {
                buttons[compIndex].innerText = "X";
                buttons[compIndex].disabled = true;

                // Remove computer's move from nums
                nums.splice(random, 1);

                // Check for win after computer's move
                if (checkWin()) return;

                // Show player's turn again if game not over
                if (turn) {
                    turn.innerText = "Your Turn";
                }

                // Check for draw
                if (nums.length === 0) {
                    localStorage.setItem('winner', ''); // No winner
                    window.location.href = 'game-over.html';
                }
            }, 500);
        } else {
            // Check for draw
            localStorage.setItem('winner', ''); // No winner
            window.location.href = 'game-over.html';
        }
    });
});

let playagain = document.querySelector(".tryagain");
if(playagain){
    playagain.addEventListener("click", () => {
        window.location.href = 'selection.html';
    } )
}

let buttons = document.querySelectorAll(".box");

let playerO = true;

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

let stat = document.querySelector(".status");
let turn = document.querySelector(".turn-display");

//X or O displaying code
buttons.forEach((button) => {
    button.addEventListener("click" ,() => {
        if(playerO){
            button.innerText = "O";
            turn.innerText = "X turn";
            playerO = false;
            
        }else{
            button.innerText = "X";
            turn.innerText = "O turn";
            playerO = true;
        }

        for(let comb of winCombs){
            let val1 = buttons[comb[0]].innerText;
            let val2 = buttons[comb[1]].innerText;
            let val3 = buttons[comb[2]].innerText;
            if(val1 === val2 && val2 === val3 && val1 !=='' && val2 !==''&& val3 !=='' ){
                localStorage.setItem('winner', val1); // Store "O" or "X"
                window.location.href = 'game-over.html';
                return; // Stop further execution
            }
            
        }
        button.disabled = true;
        count++;

        if(count === 9){
            localStorage.setItem('winner', ''); // No winner
            window.location.href = 'game-over.html';
        }
    })
})
//third page js code
let playagain = document.querySelector(".tryagain");
if(playagain){
    playagain.addEventListener("click", () => {
        window.location.href = 'selection.html';
    } )
}



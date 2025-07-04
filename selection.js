let buttons = document.querySelectorAll(".choice-button");

buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        let text = button.innerText;
        if(text === "Player vs Player"){
            window.location.href='Tic-Tac-Toe.html';
        }else{
            window.location.href='comp-ver.html';
        }
    })
})

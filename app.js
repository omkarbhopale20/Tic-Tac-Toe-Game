let boxes =document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newGame_btn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //Player O's turn


let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        // player O turn
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        //player X turn
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;  
        
        checkWinner();

    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulations! Winner is ${winner}`;
    disableBoxes();
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);              
            }
        }
    }   
};

reset_btn.addEventListener("click",resetGame);
newGame_btn.addEventListener("click",resetGame);
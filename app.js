
let new1 = document.querySelector(".new-btn");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let win = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winningcase = [[0, 1, 2]
    , [3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]
turn = true;
count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        count++;
       let draw = checkwinner();
       if(count==9&&!draw){
        gamedraw();
       }
        console.log(count)
        
       
    }

    )
})
const checkwinner = () => {
    for (let Case of winningcase) {
        let pval1 = boxes[Case[0]].innerText;
        let pval2 = boxes[Case[1]].innerText;
        let pval3 = boxes[Case[2]].innerText;
        if (pval1 != "" && pval2 != "" && pval3 != "") {
            if (pval1 == pval2 && pval2 == pval3) {
                console.log(pval1)
                showwinner(pval1);
            }
           
        }
    }
    gamedraw = ()=>{
            msg.innerHTML = "Game was Draw";
            win.classList.remove("hide");
            disable();
        }
}
reset = () => {
    turn = true;
    enable();
    win.classList.add("hide");
}
showwinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    win.classList.remove("hide");
    disable();
}
let disable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
let enable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
new1.addEventListener("click", reset)
resetbtn.addEventListener("click", reset)


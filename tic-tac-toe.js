document.addEventListener("DOMContentLoaded", function() {
    const brd = document.getElementById("board");

    let turn = "X";
    const arr = ["", "", "", "", "", "", "", "", ""];   // 9 slots, not []

    // Exercise 1
    for(let i = 0; i < brd.children.length; i++){
        brd.children[i].classList.add("square");
    }

    // Exercise 2
    brd.addEventListener("click", function(e){
        if(!e.target.classList.contains("square")) return;

        const index = Array.from(brd.children).indexOf(e.target);
        if(arr[index] !== "") return;   

        e.target.textContent = turn;
        e.target.classList.add(turn);
        arr[index] = turn; // record before flipping

        if(turn === "X"){
            turn = "O";
        }
        else{
            turn = "X";
        }
    });
});
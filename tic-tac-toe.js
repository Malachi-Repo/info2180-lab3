document.addEventListener("DOMContentLoaded", function() {
    
    const brd = document.getElementById("board");
    const status = document.getElementById("status");



    const newGame = document.querySelector(".btn");   // check this matches your button
    const startText = status.textContent;             // saved so New Game can reset

    let turn = "X";
    let over = false;
    const arr = ["", "", "", "", "", "", "", "", ""];   // 9 spots for the tic tak

    const lines = [ // combinations where you can win with 3 line up
        [0, 1, 2], [3, 4, 5], [6, 7, 8],   
        [0, 3, 6], [1, 4, 7], [2, 5, 8],   
        [0, 4, 8], [2, 4, 6]               
    ];

    // Exercise 1
    for(let i = 0; i < brd.children.length; i++){
        brd.children[i].classList.add("square");
    }

    // Exercise 2 and 4
    brd.addEventListener("click", function(e){
        if(over) return;
        if(!e.target.classList.contains("square")) return;

        const index = Array.from(brd.children).indexOf(e.target);
        if(arr[index] !== "") return;   // square already taken

        e.target.textContent = turn;
        e.target.classList.add(turn);
        arr[index] = turn;              // record before flipping

        // Exercise 4
        for(let i = 0; i < lines.length; i++){
            const a = lines[i][0];
            const b = lines[i][1];
            const c = lines[i][2];
            if(arr[a] !== "" && arr[a] === arr[b] && arr[a] === arr[c]){
                status.textContent = "Congratulations! " + turn + " is the Winner!";
                status.classList.add("you-won");
                over = true;
                return;
            }
        }

        if(turn === "X"){
            turn = "O";
        }
        else{
            turn = "X";
        }
    });

    // Exercise 3
    brd.addEventListener("mouseover", function(e){
        if(e.target.classList.contains("square")){
            e.target.classList.add("hover");
        }
    });

    brd.addEventListener("mouseout", function(e){
        if(e.target.classList.contains("square")){
            e.target.classList.remove("hover");
        }
    });


     newGame.addEventListener("click", function(){ // Exercise 5
        for(let i = 0; i < brd.children.length; i++){
            brd.children[i].textContent = "";
            brd.children[i].classList.remove("X", "O", "hover");
            arr[i] = "";
        }
        turn = "X";
        over = false;
        status.textContent = startText;
        status.classList.remove("you-won");
    });
});
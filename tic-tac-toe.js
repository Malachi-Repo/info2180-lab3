document.addEventListener("DOMContentLoaded", function() {
    const brd = document.getElementById("board");

    for(let i = 0; i < brd.children.length; i++){
        brd.children[i].classList.add("square");
        console.log(i)
    }
});























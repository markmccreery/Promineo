const badGuyElement = document.getElementById("badGuy");
const scoreElement = document.getElementById("score");
let score = 0;
function add(){
    score = score + 1;
    scoreElement.innerHTML = score;
}
function subtract(){
    score = score - 1;
    scoreElement.innerHTML = score;
}
const addElement = document.getElementById("add");
const subtractElement = document.getElementById("subtract");
badGuyElement.addEventListener("click", add);
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const changeBiscuit = document.querySelector("#change")
const reset = document.querySelector("#reset")


function toggleFunction(e){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

function toggleBack(e){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}

changeBiscuit.addEventListener("click",toggleFunction)
reset.addEventListener("click", toggleBack)
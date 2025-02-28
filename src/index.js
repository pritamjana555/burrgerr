const hamburger = document.getElementById("hamburger");
const inHam = document.getElementById("inside-ham");
const cross = document.getElementById("cross");
const listLink = document.querySelectorAll(".list__link")

listLink.forEach(link=>{
    link.addEventListener("click", ()=>{
        inHam.classList.add("hidden");
    })
} )

hamburger.addEventListener("click", ()=>{
    inHam.classList.remove("hidden");
})

cross.addEventListener("click", ()=>{
    inHam.classList.add("hidden")
})
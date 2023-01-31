const animation =document.querySelector(".preloader")
const header =document.querySelector(".header")
const footer =document.querySelector(".footer1")
const main =document.querySelector(".main1")

function preloader (){
    animation.classList.remove("hidden")
    let set =setTimeout(() => {
        animation.classList.add("hidden")
        header.classList.remove("hidden")
        main.classList.remove("hidden")
        footer.classList.remove("hidden")
        clearInterval(set)
    }, 2000);
}

window.addEventListener("load",preloader)
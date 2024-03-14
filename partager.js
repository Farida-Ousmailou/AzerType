function afficherPartage() {
    let partageScore = document.querySelector(".classScore")
    partageScore.classList.add("active")
}

function cacherPartage() {
    let popupBackground = document.querySelector(".classScore") 
    partageScore.classList.remove("active")
}

function initAddEventListenerPartager() {
    btnPartage = document.querySelector(".zonePartager button")
    let partageScore = document.querySelector(".classScore")
    btnPartage.addEventListener("click", () => {
        afficherPartage()
    })

    partageScore.addEventListener("click", (event) => {
        if (event.target === partageScore) {
                cacherPartage()
        }
    })
}

initAddEventListenerPartager()

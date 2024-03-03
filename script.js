
const listeMots= ["Cachalot", "Incroyable", "institution"]
const listePhrases= ["Le cachalot est un mammifère marin", "C'est incroyable ce que tu as fait", "L'institution est un lieu de savoir"]


function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".score span")
    let affichageResultat = `${score} / ${nbMotsProposes}`
    spanScore.innerText = affichageResultat
    return console.log("Votre score est de: " + score + "sur" + nbMotsProposes.length)
}

function lancerJeu (){
    let score = 0
    let nbMotsProposes = 0
    let inputtext= document.getElementById("texte")
    let buttonValider = document.getElementById("bouton")
    buttonValider.addEventListener("click", function(){
        console.log(inputtext.value)
    })

    afficherResultat(score, nbMotsProposes)
}

lancerJeu()



let textErea= document.querySelector(".textErea")
console.log(textErea)
let listBoutonRadio = document.querySelectorAll(".optionSource input")
console.log(listBoutonRadio)

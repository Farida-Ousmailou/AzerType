
const listeMots= ["Cachalot", "Incroyable", "institution"]
const listePhrases= ["Le cachalot est un mammifère marin", "C'est incroyable ce que tu as fait", "L'institution est un lieu de savoir"]


function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".score span")
    let affichageResultat = `${score} / ${nbMotsProposes}`
    spanScore.innerText = affichageResultat
    return console.log("Votre score est de: " + score + "sur" + nbMotsProposes.length)
}

function afficherProposition(proposition){
   let textErea= document.querySelector(".textErea")
    textErea.innerText = proposition
}


function lancerJeu (){
    let score = 0
    let i = 0
    let listePropositions = listeMots
    let inputtext= document.getElementById("texte")
    let buttonValider = document.getElementById("bouton")
    afficherProposition(listePropositions[i])
    buttonValider.addEventListener("click", function(){
        console.log(inputtext.value)
        if (inputtext.value === listePropositions[i]){
            score++
        }   
        i++
        afficherResultat(score, i)
        inputtext.value = ""
        if (listePropositions[i] === undefined){
            afficherProposition("Fin du jeu")
            inputtext.disabled = true
        } else {
            afficherProposition(listePropositions[i])
        }
    })

    let listesBtnRadio= document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listesBtnRadio.length; index++) {
        listesBtnRadio[index].addEventListener("change", function(event){
            console.log(event.target.value)
            if (event.target.value === "1"){
            listePropositions = listeMots
            listePropositions = listeMots
        } else {
            listePropositions = listePhrases
        }
        afficherProposition(listePropositions[i])
        })
        
    }

}

lancerJeu()



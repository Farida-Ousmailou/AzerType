
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

function afficherEmail () {
    let mailo = `mailto:${email}?subject=Votre score&body=Votre score est de ${score} / ${i}`
    location.href = mailo
}

function lancerJeu (){
    let score = 0
    let i = 0
    let listePropositions = listeMots
    const inputtext= document.getElementById("texte")
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
    const form = document.querySelector("form")
    form.addEventListener("submit", function(event){
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        let scoreEmail = `${score} / ${i}`

        afficherEmail(email, email, score)

        console.log(nom, email)
    })
    afficherResultat(score, i)

    function verifierChamp(balise) {
        if (balise.value === "") {
            balise.style.backgroundColor = "red"
            return false
        } else {
            balise.style.backgroundColor = "white"
            return true
        }
    }
    function verifierEmail(balise) {
        if (balise.value.includes("@")) {
            balise.style.backgroundColor = "white"
            return true
        } else {
            balise.style.backgroundColor = "red"
            return false
        }
    }
    function verifierEmail(balise){
        let emailRegExp= new
    }
    form.addEventListener("submit", function(event){
        event.preventDefault()
        verifierChamp(baliseNom)
    })
}

lancerJeu()



const listeMots= ["Cachalot", "Incroyable", "institution"]
const listePhrases= ["Le cachalot est un mammifère marin", "C'est incroyable ce que tu as fait", "L'institution est un lieu de savoir"]


function afficherResultat(score, nbMotsProposes){
    return console.log("Votre score est de: " + score + "sur" + nbMotsProposes.length)
}
function choisirPhraseOuMots(){
    let choix = prompt("Voulez-vous jouer avec des mots ou des phrases?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veuillez choisir entre les mots et les phrases")
    }
    return choix
}
function lancerBoucleDeJeu(listePropositions){
    let score = 0
    if (choix === "mots") {
        for (let i = 0; i < listeMots.length; i++) {
            let motUtilisateur = prompt("Entrez le mot: " + listeMots[i])
            if (motUtilisateur === listeMots[i]) {
                console.log("Bravo, vous bien saisi le mot")
                score++
            }
        }
        return score
    } else {
        for(let i=0; i <listePhrases.length; i++){
            let phraseUtilisateur = prompt("Entrez la phrase: " + listePhrases[i])
            if(phraseUtilisateur === listePhrases[i]){
                score++
            }
        }
        return score
    }
}

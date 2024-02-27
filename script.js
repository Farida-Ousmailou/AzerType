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
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt("Entrez le mot: " + listeMots[i])
        if (motUtilisateur === listePropositions[i]) {
                score++
         }
     }
        return score    
 }

function lancerJeu (){
    let choix = choisirPhraseOuMots()
    let score = 0
    let nbMotsProposes = 0
    
    if (choix === "mots") {
        lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}

lancerJeu()
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede



// RIFERIMENTI DOM
const contenitore = document.getElementById("container");



// creo un array di oggetti con le informazioni per ogni membro del team
const membriTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "immagine": '<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">',
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine": '<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">',
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine": '<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon">',
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "immagine": '<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">',
    },

    {
        "nome": "Soctt Estrada",
        "ruolo": "Developer",
        "immagine": '<img src="img/scott-estrada-developer.jpg" alt="Soctt Estrada">',
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine": '<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">',
    },
];

// console.log(membriTeam);

// // con un ciclo for prendo ogni oggetto dell'array
for(let i = 0; i < membriTeam.length; i++){
    // console.log(membriTeam[i]);
    let persona = membriTeam[i]
    
    // estreaggo il contenuto di ogni oggetto presente nell'array
    for(let key in persona){
        console.log(persona[key]);

        // // stampo nel dom
        // contenitore.innerHTML += persona[key];
    }
}


const listaCards = document.getElementsByClassName("card");

console.log(listaCards);

for(let i = 0; i < listaCards.length; i++){
    let cardMembro = listaCards[i];

    console.log(cardMembro);


    cardMembro.innerHTML = `${membriTeam[i].immagine} ${membriTeam[i].nome} ${membriTeam[i].ruolo}`




}

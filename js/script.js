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
        "immagine": 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine": 'img/angela-caroll-chief-editor.jpg',
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine": 'img/walter-gordon-office-manager.jpg',
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "immagine": 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        "nome": "Soctt Estrada",
        "ruolo": "Developer",
        "immagine": 'img/scott-estrada-developer.jpg',
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine": 'img/barbara-ramos-graphic-designer.jpg',
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

    membriTeam[i].immagine


    cardMembro.innerHTML = `<img class= "icona" src="${membriTeam[i].immagine}" alt=""> ${membriTeam[i].nome} <br> ${membriTeam[i].ruolo}`;

}

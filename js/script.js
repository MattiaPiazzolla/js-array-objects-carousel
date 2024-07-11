// ARRAY ASSEGNATO PER L'ESERCIZIO ODIERNO
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// RECUPERO LA DESTINAZIONE DELLA CARTA PRINCIPALE
let cardDestination = document.getElementById('card');
// RECUPERO LA DESTINAZIONE DELLE ANTEPRIME
let thumbs = document.getElementById('thumbs')

// CICLO L'ARRAY PER CREARE LE CARD DELLE COPERTINE 
images.forEach((elem, index) => {
    // VADO A CREARE LE CARD CON GLI ELEMENTI DEGLI OGGETTI DENTRO GLI ARRAY
    cardDestination.innerHTML += `
            <div class="item d-none">
                <img class="w-100 h-100" src="./${elem.image}" alt="">
                <div class="card-overlay">
                    <h5>${elem.title}</h5>
                    <p>${elem.text}</p>
                </div>
            </div>`
    // AGGIUNGO LE FOTO ALLE ANTEPRIME
    thumbs.innerHTML += `
            <div class="thumbsnail active">
                <img src="./${elem.image}" alt="">
            </div>`
})

// INIZIALIZZO UNA VARIABILE PER TRAGHETIZZARE L'ELEMENTO ATTUALE 
let activeCard = 0;

// TARGHETIZZO TUTTI GLI ELEMENTI DEL MAIN CON CALSSE ITEM
const card = document.querySelectorAll('.item');

// TOLGO LA CLASSE d-none ALL'ELEMENTO ATTIVO 
card[activeCard].classList.remove('d-none');
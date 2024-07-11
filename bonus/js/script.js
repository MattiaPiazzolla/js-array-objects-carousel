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
            <div class="thumbsnail opacity-50">
                <img src="./${elem.image}" alt="">
            </div>`

})

// INIZIALIZZO UNA VARIABILE PER TRAGHETIZZARE L'ELEMENTO ATTUALE 
let activeCard = 0;

// TARGHETIZZO TUTTI GLI ELEMENTI DEL MAIN CON CALSSE ITEM
const card = document.querySelectorAll('.item');

// TARGHETIZZO TUTTI GLI ELEMENTI DEL MAIN CON CALSSE ITEM
const thumb = document.querySelectorAll('.thumbsnail');

// RIMUOVO LA CLASSE d-none ALL'ELEMENTO ATTIVO 
card[activeCard].classList.remove('d-none');

// RIMUOVO LA CLASSE opacity ALL'ELEMENTO ATTIVO 
thumb[activeCard].classList.remove('opacity-50');
thumb[activeCard].classList.add('borderCustom');

// RECUPERO I PULSANTI AVANTI E INDIETRO 
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// ARRIBUISCO LE FUNZIONALITÀ AL PULSANTE NEXT
next.addEventListener('click', function(){
    // CANCELLO LA CARTA ATTUALMENTE ATTIVA
    card[activeCard].classList.add('d-none');
    // ABBASSO L'OPACITÀ DEL THUMB DELLA CARTA ATTUALE
    thumb[activeCard].classList.add('opacity-50');
    thumb[activeCard].classList.remove('borderCustom');

    // AGGIUNGO LE CONDIZIONI PER EVITARE DI ANDARE OLTRE L'ULTIMO ELEMENTO
    if(activeCard == images.length - 1){
        // INIZIO DA CAPO
        activeCard = 0;
    } else {
        // INCREMENTO IL VALORE DELLA CARTA ATTIVA
        activeCard++;
    }
    // RIMUOVO LA CLASSE d-none ALL'ELEMENTO ATTIVO 
    card[activeCard].classList.remove('d-none');  
    // RIMUOVO LA CLASSE opacity ALL'ELEMENTO ATTIVO 
    thumb[activeCard].classList.remove('opacity-50');
    thumb[activeCard].classList.add('borderCustom');

})

// ARRIBUISCO LE FUNZIONALITÀ AL PULSANTE PREV
prev.addEventListener('click', function(){
    // CANCELLO LA CARTA ATTUALMENTE ATTIVA
    card[activeCard].classList.add('d-none');
    // ABBASSO L'OPACITÀ DEL THUMB DELLA CARTA ATTUALE
    thumb[activeCard].classList.add('opacity-50');
    thumb[activeCard].classList.remove('borderCustom');

    // AGGIUNGO LE CONDIZIONI PER EVITARE DI ANDARE OLTRE L'ULTIMO ELEMENTO
    if(activeCard == 0){
        // INIZIO DA CAPO
        activeCard = images.length - 1;
    } else {
        // DECREMENTO IL VALORE DELLA CARTA ATTIVA
        activeCard--;
    }
    // RIMUOVO LA CLASSE d-none ALL'ELEMENTO ATTIVO 
    card[activeCard].classList.remove('d-none');  
    // RIMUOVO LA CLASSE opacity ALL'ELEMENTO ATTIVO 
    thumb[activeCard].classList.remove('opacity-50');
    thumb[activeCard].classList.add('borderCustom');
    
})

// AGGIUNGO LA FUNZIONALITÀ PER SKIPPARE DA UN IMMAGINE ALL'ALTRA CLICCANDOCI SOPRA 
images.forEach((elem, index) => {
    // AGGIUNGO UN EVENTO CLICK ALL'ELEMENTO DELL'ARRAY
    elem.addEventListener('click', function(){
        // AGGIUNGO TUTTI GLI EVENTI DI PREMESSA CHE SI FANNO AL CLICK DEI COMANDI PREW E NEXT 
        // CANCELLO LA CARTA ATTUALMENTE ATTIVA
        card[activeCard].classList.add('d-none');
        // ABBASSO L'OPACITÀ DEL THUMB DELLA CARTA ATTUALE
        thumb[activeCard].classList.add('opacity-50');
        thumb[activeCard].classList.remove('borderCustom');

        // IMPOSTO L'INDICE ATTIVO SULL'INDICE CLICCATO
        activeCard = index;

        // RIMUOVO LA CLASSE d-none ALL'ELEMENTO ATTIVO 
        card[activeCard].classList.remove('d-none');  
        // RIMUOVO LA CLASSE opacity ALL'ELEMENTO ATTIVO 
        thumb[activeCard].classList.remove('opacity-50');
        thumb[activeCard].classList.add('borderCustom');
    })

})
// mi sembra logico ma non capisco perche non funziona 
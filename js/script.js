//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
   
    //incremento il suo valore di 1
   itemActive++;
   if(itemActive == imagesArray.length){
    itemActive = 0;
   }
 //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi
   if(itemActive == 0){
    items[imagesArray.length-1].classList.remove('active');
    circles[imagesArray.length-1].classList.remove('active')
   }
   else{
    items[itemActive-1].classList.remove('active');
    circles[itemActive-1].classList.remove('active');
   }
   items[itemActive].classList.add('active')
   circles[itemActive].classList.add('active');
   
});
//CON BONUS 1

prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1


    if(itemActive == 0){
        itemActive = imagesArray.length
    }
    itemActive--;
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    if(itemActive == imagesArray.length-1){
        items[0].classList.remove('active')
        circles[0].classList.remove('active')
        
    }

    else{
        items[itemActive+1].classList.remove('active');
        circles[itemActive+1].classList.remove('active');
      
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    
})



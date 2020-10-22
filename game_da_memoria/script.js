const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');

    //primeiro clique no card
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //certificação de que a primeira e segunda carta são iguais/identicas
    secondCard = this;
    hasFlippedCard = false;
    checkForMath ();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}



cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})

 
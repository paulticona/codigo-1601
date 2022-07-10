const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    
    //repit
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
]
//

//barajar el array osea las cartas
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector("#grid")
let cardsChosen = []
let cardChosenId = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function checkForMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    
    //comparar el arrary cardChosen que tendra siempre dos objetos
     if (optionOneId == optionTwoId) {
        
        alert("misma carta")
     }else if(cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].setAttribute["src", "images/white.png"]
        cards[optionTwoId].setAttribute["src", "images/white.png"]
        alert("iguales")
     }else{
        //cerrar cartars abiertas
        cards[optionOneId].setAttribute["src", "images/blank.png"]
        cards[optionTwoId].setAttribute["src", "images/blank.png"]
        alert("diferentes")
     }

    //limpiar arreglo
    cardsChosen = []
    cardChosenId = []
}

function flipCard(){
    let cardId = this.getAttribute("data-id")
    this.setAttribute("src", cardArray[cardId].img)
    cardsChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

console.log(cardArray)

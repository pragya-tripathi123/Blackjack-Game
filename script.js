let hasBlackJack = false
let isAlive = true
let player = {
    namee : "PRAGYA",
    chips : 300

}
let totalCard
let sum = 0
let message;
let messagel = document.getElementById("msg");
console.log(messagel)

let s = document.querySelector(".sum-el")
let cardEl = document.querySelector(".card-el")
document.getElementById("name").innerText = player.namee + player.chips

// function to get random card number
function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function startGame() {
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    totalCard  = [card1, card2]
    sum = card1 + card2;
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards selected : "
    for (let i = 0; i < totalCard.length; i++) {
        cardEl.textContent += totalCard[i] + " "
    }
    s.textContent = "Sum : " + sum;
    if (sum <= 20) {
        message = "Do you want to choose another card??🙂";
    }
    else if (sum === 21) {
        message = "You've got the blackjack.";
        hasBlackJack = true
    }
    else {
        message = "You are out of game.";
        isAlive = false
    }

    messagel.textContent = message;
}

// function for drawing new card

function newCard() {
    if(hasBlackJack === false || isAlive === true){
        var card = getRandomCard()
        sum += card
        totalCard.push(card);
        renderGame()
    }
   
}

const key1 = "objkey1"
const key2 = "objkey2"
const value1 = "value11"
const value2 = "value22"
const values = {
    [key1]: value1,
    [key2] : value2

}
console.log(values)
const person = {
    name : "pragya",
    age : 20,
    hobby : ["coding","playing","dancing","studying"]
}
console.log(Object.keys(person))
for(let fuu of Object.keys(person)){
    console.log(`${fuu} : ${person[fuu]}`)
}
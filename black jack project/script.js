const addedCards = document.getElementById("added-cards")
const Points = document.getElementById("points")
const computerScore = document.getElementById("house-points")
const finalResult = document.getElementById("final")

var semi =["Denari","Coppe","Bastoni","Spade"]
let array = []
for(let i of semi){
    for(let j = 1; j <= 10; j++){
        let object = {}
        object["Seme"] = i
        object["Numero"] = j
        array.push(object)     
    }
}

let firstCard = Card()
document.getElementById("player-card").textContent = `This is your card: ${firstCard["Numero"]} di ${firstCard["Seme"]}`
Points.textContent = cardValue(firstCard["Numero"])
computer()

document.getElementById("add").addEventListener("click", function Add() {
    let moreCards = Card()
    let li = document.createElement("li")
    li.innerHTML = `${moreCards["Numero"]} di ${moreCards["Seme"]}`
    addedCards.appendChild(li)
    Points.textContent = Number(Points.textContent) + cardValue(moreCards["Numero"])   
})

document.getElementById("stay").addEventListener("click", function() {
    if(parseFloat(computerScore.textContent) > 7.5) {
        finalResult.textContent = "COMPUTER LOSE!! YOU WIN!!"
        setTimeout(function() {location.reload()}, 1200)
        return finalResult.textContent
    }
    let Result = parseFloat(Points.textContent) > 7.5 || parseFloat(Points.textContent) <= parseFloat(computerScore.textContent) ? "YOU LOSE!!" : "YOU WIN!!!"
    finalResult.textContent = Result
    setTimeout(function() {location.reload()}, 1200)
})

function computer() {
    let pcCard = Card()
    let somma = 0
    while(somma < 3.5){
        somma = somma + cardValue(pcCard["Numero"]) + cardValue(Card()["Numero"])
        computerScore.textContent = somma
    }
    return computerScore.textContent
}

function Card() {
    let randomNumber = Math.floor(Math.random()*array.length)
    array.splice[randomNumber]
    return array[randomNumber]
}

function cardValue(e) {
    return e < 8 ? e : 0.5
}

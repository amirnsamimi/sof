const getterUser = document.getElementById("user")
const getterComputer = document.getElementById("comp")

const game = ["rock","paper","scissor"];

const playerState = []
const randomNumberGenerator = () =>{
  return Math.floor(Math.random()*(game.length)) 
}
const computer = () => {
   return game[randomNumberGenerator()]
}

let round = 0
const player = (playerChoice) => {
    let trueCounter = playerState.filter(i=> i === true).length
    round = playerState.length
    getterUser.innerText = trueCounter
    getterComputer.innerText =  round - trueCounter
    if(playerState.length !== 3){
    const comp = computer()
    if((playerChoice === "rock" && comp === "scissor" ) || ( playerChoice === "scissor" && comp === "paper" ) ||( playerChoice === "paper" && comp === "rock")){
    playerState.push(true)
    }else if(playerChoice === comp){
    console.log("draw")
    }else{
    playerState.push(false)
    }
    }else{
    if( trueCounter >= 2){
       document.getElementById("result").innerText = "you won"
    } else {
        document.getElementById("result").innerText = "you lost"
    }
    document.getElementById("startover").style.display = "block"
    document.getElementById("controllers").style.display = "none"
    }
}

const startOver = () => {

    playerState.splice(0,playerState.length-1)
    document.getElementById("controllers").style.display = "block"
    document.getElementById("startover").style.display = "none"
    document.getElementById("result").innerText = "waiting for opponent..."
    document.getElementById("user").innerText = 0
    getterComputer.innerText =  0

}




const userState = {
    won: "",
    userTurn: "",
    players: [],
    userRolled: []
}
let rememberUsers = []

const randomPlayer = () => {
  
   userState.userTurn = rememberUsers[Math.floor(Math.random()*rememberUsers.length)]
   document.getElementById(`player${userState.userTurn}`).removeAttribute("disabled")
 
}

const randomColorGenerator = () => {
    return Math.floor(Math.random() * 100)+100
}

const randomGenerator = () => {
    return Math.ceil(Math.random()*6)
}

const startGame = () =>{
    let users = document.getElementById("userNumbers").value;
    if(users > 1){
        startHandler(users)
    } else {
        alert("at least there should be 2 players")
    }
   
}
const startHandler = (users = 2) => {
    for( let i = 0; i < users; i++){
        (userState.players).push(String.fromCharCode(+i+65))
        const button = document.createElement("button")
        button.innerText = `player ${String.fromCharCode(+i+65)}`
        button.setAttribute("onClick",`clickHandler('${String.fromCharCode(+i+65)}')`)
        button.setAttribute("id",`player${String.fromCharCode(+i+65)}`)
        button.setAttribute("disabled",`true`)
        button.setAttribute("style",`background:linear-gradient(45deg, rgb(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()}),rgb(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()}) )`)
        document.getElementById("throwDiceButton").appendChild(button)
    }
  
    document.getElementById("startGame").setAttribute("disabled",true)
    rememberUsers = [...userState.players]
    userState.userTurn = userState.players[randomPlayer()]
}

const clickHandler = (opponent) => {
    document.getElementById('result').innerHTML = ""
    const opponentId = rememberUsers.findIndex((i)=>i === opponent)
    const randomNumber = randomGenerator()
    userState.userRolled = [...userState.userRolled,{ user:opponent, result: randomNumber}]
    for(let i = 0; i < randomNumber; i++){
        const light = document.createElement('span')
        light.setAttribute('class','light')
        document.getElementById('result').appendChild(light)
    }
    document.getElementById(`player${opponent}`).setAttribute("disabled",true)
    rememberUsers.splice(opponentId,1)
    userState.userRolled.forEach(()=>{
    userState.userRolled.forEach((i,index)=>{
        let temp = null;
        
        if(userState.userRolled[index+1] !== undefined ){
            if( userState.userRolled[index].result < userState.userRolled[index+1].result ){
                temp = userState.userRolled[index]
                userState.userRolled[index] = userState.userRolled[index+1]
                userState.userRolled[index+1] = temp
            }
    }
    })})
    if(rememberUsers.length > 0){
        randomPlayer()
    }else{
        let max = userState.userRolled[0].result
        const drawUsers = []
        userState.userRolled.forEach((i,index)=>{
            if(i.result === max){
                drawUsers.push(userState.userRolled[index])
                
            }
            
        })
        if(drawUsers.length > 1){
            window.alert(` ${drawUsers.length} users draw, ready for next round?`)
            document.getElementById("throwDiceButton").innerHTML = ""
            userState.userRolled.splice(drawUsers.length,userState.players.length-1)
            userState.users = []
            userState.userRolled.forEach(i=> userState.users.push(i.user))
            startHandler(drawUsers.length)
          //continue development here
        }else{
            window.alert(` user ${userState.userRolled[0].user} won.`)
            userState.won = ""
            userState.userTurn= ""
            userState.players = []
            userState.userRolled = []
            window.location.reload()
        }
       
    }
  
}
const gameFinished = () => {
    if(userRolled.length  === 2 ){
    if(userRolled[0] > userRolled[1] ){
        document.getElementById("won").innerText = "user A"
    }else{
        document.getElementById("won").innerText = "user B"
    }   
    userRolled.splice(0,userRolled.length)
    userState.userTurn === ""
}
}

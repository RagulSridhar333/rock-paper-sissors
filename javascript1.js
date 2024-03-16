
let system = confirm("shall we play rock ,paper and scissors");
if(system){
    let player = prompt("Enter rock or paper or scissors")
    
    if(player){
        
        let playerOne = player.trim().toLowerCase();
        console.log(playerOne.length)
        console.log(playerOne)
          if(playerOne === "rock" || playerOne === "scissors" || playerOne === "paper")
         {
         let computerChoice = Math.floor(Math.random()* 3 + 1);
         let computer = computerChoice == 1 ? "rock" :
                        computerChoice == 2 ? "scissors" 
                              : "paper";
        console.log(computer);
        
        let result =(
         playerOne === computer ? `player : ${playerOne}\ncomputer : ${computer} \n Tieee !!!`
         :playerOne ==="rock" && computer === "paper" ? `player : ${playerOne}\ncomputer : ${computer} \ncomputer wins !!!`
         :playerOne === "rock" && computer ==="scissors"? `player : ${playerOne}\ncomputer : ${computer} \nplayerwins !!!`

        :playerOne ==="scissors" && computer ==="paper" ? `player : ${playerOne}\ncomputer : ${computer} \nplayer wins !!!`
        :playerOne ==="scissors" && computer === "rock" ?  `player : ${playerOne}\ncomputer : ${computer} \ncomputer wins !!!`

        :playerOne ==="paper" && computer ==="rock" ? `player : ${playerOne}\ncomputer : ${computer} \nplayerwins !!!`:
        `player : ${playerOne}\ncomputer : ${computer} \ncomputer wins !!!`
         ) ;
         alert(result);
         let playAgain = confirm("play again!") ? location.reload():alert("ok , thanks for playing");
        

         }
         else{
            let again = ("you didn't enter rock or scissors or paper");
            confirm(again) ? location.reload() :alert("visit again");

          
         }
    }
    else{
        alert("you didn't enter your choice")
    }
}
else{
    alert("Thanks for your response");
}














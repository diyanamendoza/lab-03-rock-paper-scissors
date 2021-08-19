export function getRandomThrow() {
    let randomThrow = Math.ceil(Math.random() * 3);
    if (randomThrow === 1) return "rock";
    if (randomThrow === 2) return "paper";
    if (randomThrow === 3) return "scissors";
}

export function didUserWin(player, computer) {
    if (player === computer) return "draw";
    if ((player === "paper" && computer === "rock") 
        || (player === "rock" && computer === "scissors")
        || (player === "scissors" && computer === "paper"))
         {
        return "win";}
    else {
        return "loss";
    }
}

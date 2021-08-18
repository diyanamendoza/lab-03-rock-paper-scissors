export function didUserWin(player, computer) {
    if (player === computer) return "draw";
    if ((player === "paper" && computer === "rock") 
        || (player === "rock" && computer === "scissors")
        || (player === "scissors" && computer === "paper"))
         {
        return "win";}
    else {
        return "lose";
    }
}

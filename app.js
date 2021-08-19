// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from "./utils.js";

const goButton = document.getElementById('go-button');
const outcomeDisplay = document.getElementById('result');
const winCount = document.getElementById('wins');
const lossCount = document.getElementById('losses');
const drawCount = document.getElementById('draws');
const resetButton = document.getElementById('reset-button');

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners 
goButton.addEventListener('click', () => {
  const computerChoice = getRandomThrow();
  const userChoice = document.querySelector('input:checked');
  const outcome = didUserWin(userChoice.value, computerChoice);
  outcomeDisplay.textContent = `You chose ${userChoice.value} and the computer chose ${computerChoice}. It's a ${outcome}!`

  if (outcome === "draw") draws++;
  if (outcome === "loss") losses ++;
  if (outcome === "win") wins ++;

  winCount.textContent = wins;
  lossCount.textContent = losses;
  drawCount.textContent = draws;
})

resetButton.addEventListener('click', () => {
  window.location.reload();
})
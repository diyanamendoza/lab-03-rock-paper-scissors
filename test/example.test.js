import { didUserWin } from './didUserWintest.js';

const test = QUnit.test;

test('player: paper && computer: rock = win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player1 = "paper";
    const computer1 = "rock";
    const expected = "win";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player1, computer1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player: paper && computer: paper = draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player2 = "paper";
    const computer2 = "paper";
    const expected = "draw";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player2, computer2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player: paper && computer: scissors = lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player3 = "paper";
    const computer3 = "scissors";
    const expected = "lose";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player3, computer3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player: rock && computer: scissors = win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player4 = "rock";
    const computer4 = "scissors";
    const expected = "win";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player4, computer4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player: scissors && computer: paper = win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player5 = "scissors";
    const computer5 = "paper";
    const expected = "win";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player5, computer5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player: rock && computer: paper = lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player6 = "rock";
    const computer6 = "paper";
    const expected = "lose";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player6, computer6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




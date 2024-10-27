// question 44. Project - Guess Game
     // Write a program that generates a random number and asks the user to guess what the number is.
    //   If the user's guess is higher than the random number, the program should display "Too high, try again."
    //   If the user's guess is lower than the random number, the program should display "Too low, try again."
    //   The program should use a loop that repeats until the user correctly guesses the random number.

// solution
 
let input;
do {
    let input = +prompt("Guess a number between 1 to 10");
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    
    if (input === randomNumber) {
        console.log("Welcome, you guessed the right number!");
        break;
    } else if (input > randomNumber) {
        console.log("Too high, try again");
    } else {
        console.log("Too low, try again");
    }
} while (true);

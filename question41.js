// question 41. Make a choice based calculator using do while
// solution

let num1 = +prompt("Enter first number");
let  num2 = +prompt("Enter second number");
let choice = prompt(" Enter your choice (1 for sum, 2 for sub)");
let result = 0;
do {
    if (choice == 1) {
        result = num1 + num2;
        } else if (choice == 2) {
            result = num1 - num2;
        } else  {
            alert("Invalid choice !!!!!!");
        }

        } while (choice != 1 && choice != 2);
        console.log(result);
        


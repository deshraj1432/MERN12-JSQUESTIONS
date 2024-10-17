// question 32. Check if the number is Prime or not.
// solution
let a = +prompt(" Enter a number");
if (a > 1) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            alert("The number is not prime");
            break;
            }
            
            else {
                alert("The number is prime");
                }
            }
                } else {
                    alert("The number is not prime");
                    }

// this code  will check if the number is prime or not. If the number is divisible by any number between 

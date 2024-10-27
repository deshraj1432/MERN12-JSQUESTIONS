// question 38. Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//       Ex- 145 = 1! + 4! + 5! = 145
//solution

let a = +prompt(" Enter a number");
let b = a.toString().split('').map(Number);
let sum = 0;
for (let i = 0; i < b.length; i++) {
    let c = 1;
    for (let j = 1; j <= b[i]; j++) {
        c *= j;
        }
        sum += c;
        }
        if (sum == a) {
            console.log("Strong number");
            } else {
                console.log("Not a strong number");
                }

                     

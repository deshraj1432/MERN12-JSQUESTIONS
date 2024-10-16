// question 29.Print the sum of all even & odd numbers in a range seperately.
//solution
let a = +prompt("enter your number ")
let b = 0;
for (let i = a; i > 0; i--) {
    if (i % 2 == 0) {
        b += i;
        }
        
    else if (i %2  != 0) {
    b += i;
    

    }
}
        console.log(b);
        
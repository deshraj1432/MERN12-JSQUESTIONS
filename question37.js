// question 37.Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
       // Ex - 12321 - Rerverse - 12321
//solution
 
let a = prompt(" Enter a number");
 let length = a.length;
for  (let i = a.length - 1; i >= 0; i--) {
    a = a + a[i];
    }
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (a[i] !== a[length - 1 - i]){
   console.log ("The number is a not pallindromic number");
        }
        else {
            alert("The number is a pallindromic number");

}

    }

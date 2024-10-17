// question 35. Sum of digits of a number, 936 = 18
// solution
let a = prompt(" Enter a number");
let sum = 0;
for (i=0; i <a.length; i++) {   // a.length  is the number of digits in the number and  a[i] is the digit at the ith position and  a[i] is a string



    sum += +a[i];
    
}
console.log (sum);


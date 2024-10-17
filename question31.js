// question 31. Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43
// solution
let a = +prompt("enter a positive integer");
let sum  = 0;

  for (i=1; i<=a; i++){
     if (a%i === 0){
         sum += i;
     }
    }
    console.log(sum)
    
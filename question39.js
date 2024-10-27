// // question 39. Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776
// //solution
let num = 25;
let temp = num;
let sq = num * num; //625

var count = 0; //1
while (num != 0) {
  count++;
  num = Math.floor(num / 10);
  0;
}

num = temp;

const num2 = sq % Math.pow(10, count);
console.log(num2);
console.log(num);

console.log(num == num2);

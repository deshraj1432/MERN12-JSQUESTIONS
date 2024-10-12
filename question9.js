// question 9. accept the three sides of triangle and calculate the area using herons formula
// solution
let a = +prompt(" Enter the first side of the triangle");
let b = +prompt(" Enter the second side of the triangle");
let c = +prompt(" Enter the third side of the triangle");


 
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
// math.sqrt  is used to calculate the square root of a number
// prompt is used to get the input from the user
// let is used to declare the variable
console.log(`The area of the triangle is: ${area}`);

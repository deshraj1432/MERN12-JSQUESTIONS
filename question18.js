// question 18- Accept three numbers and print the greatest among them
//solutiuon
num1 = +prompt(" Enter the first number");


num2 =  +prompt(" Enter the second number");

num3 = +prompt("emter the  third number");

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the greatest")
}  else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the greatest")
    } else {
     console.log(num3 + " is the greatest")
    }

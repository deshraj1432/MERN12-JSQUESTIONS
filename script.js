
// question 12
//   12. accept two number and print the greatest between them
// solution->
// let a = +prompt("enter first number")
// let b = +prompt("enter second number")

// if(a>b){
//     console.log("first value is greater the second value",a)
// } else {
//     console.log("second value is greater the first value",b)

// }


// question 13 and 14
// 13. accept the gender from the user ass char the respective greeting message 
//  ex. good morning sir (on \the basis of gender)
//  14. extend the previous program and handle the wrong inputs.
//  print goood moring sir & good morning maam else print wrong input


// solution-->


//  let a = prompt("your gender (male/female): ")


//  if ( a === "male"){
// console.log("Good morning sir ")
// } else if ( a === "female"){
//     console.log("Good morning mam")
// } else{
//     console.log("invalid input: please type male/female")
// }



// question 15 
// 15. accept an integer and check whether it is an even number or odd
 

// solutin->

// let a = +prompt("enter your number")

// if(a%2 == 0){
//     console.log("this is even number")
// } else {
//     console.log ("this is odd number")
// }


// question 16
// 16. accept name and age from the user check if the user is a valid voter or Not
//  valid: hello shery you are a valid voter
//  invalid sorry shery you cant cast the vote


// solution -->
//    let a = prompt("enter your name");
//    let b = +prompt("enter your age")


//    if(b > 18){
//     console.log ("hello",a ), console.log("you are valid voter")
//    } else if (b <18){
//     console.log ("hello",a ), console.log(`you cant cast the vote at ${18-b}, year`)

//    } else {
//    alert("invalid input : please fill correct information")
//    }



//////////////// question 17 
//  17. accespt a day number between 1-7 and pirnt the corresponding dayname


 // solution


//  let a = +prompt("enter day number 1-7 only");

//  if(a == 1){
//     console.log("monday")
//  } else if(a  ==2){
//     console.log("tuesday")
//  } else if(a  ==3){
//     console.log("Wednesday")
//  }  else if(a  ==4){
//     console.log("Thursday")
//  } else if(a  ==5){
//     console.log("Friday")
//  } else if(a  ==6){
//     console.log("Saturday")
//  } else if(a  ==7){
//     console.log("Sunday")
//  } else{
//     console.log("invalid input number please giev 1-7 number")
//  }


// /////////////question 19
// 19. accespt a yaer and check if it a leep year or not  and print the result
// solution


// let a = +prompt("enter yaer")

// if(a%4 ==0 && a%100 ==0 && a%400  ==0){
//     console.log(`${a}, is a leap yaer`)
// } else{
//     console.log(`${a}, is not a leap yaer`)
// }

// question 20
// shop discount description on graphic
// solution
// let a = +prompt("enter price of item")
// let b = +prompt("enter discount percentage")
// let c = a - (a * b / 100)
// console.log(`price of item ${a} after discount ${b}% is ${c}`
// )



// question 22


// accept an english alphabet fro user and check if it a consonent or a vowel
// solution
// let a = prompt("enter english alphabet")
// if (a == 'a' || a == 'e' || a == 'i' ||
//    a == 'o' || a == 'u') {
//       console.log(`${a} is a vowel`)
//       } else {
//          console.log(`${a} is a consonent`)
//       }




///////////////////// what is for loop
// for (initialization; condition; increment) {
  // code to be executed
// }

// question  23
// accept an integer and print hello world n times

// solution
// let  a = +prompt("enter integer")

//  for (i = 0; a>i; i++){
//    console.log("hello")
//  }

// question 24
// print natural Number up to n
// solution
// let a = +prompt("enter integer")
// for (i = 1; i <= a; i++){
//   console.log(i)
// }

// question 25 
// 25. reverse for  loop print  numbers from n to 1
// let a = +prompt("enter your number")
// for (i = a; i >= 1; i--) {
//   console.log(i)
// }

//  question 26
// 26. take a number as input and print its table
// // ex. 5*1=5
//  //     5*2=10


// solution
// let a = +prompt("enter your number")
// for (i=0; i<=10; i++){
//   console.log(`${a} * ${i} = ${a*i}`)
// }



// question 27 
// sum up to n terms
// solution
// let a = +prompt("enter your number")
// let sum = 0
// for (i = 1; i <= a; i++) {
//   sum = sum + i;
//   console.log(sum)
// }




//question 28

// 28. 
 
const mulSum =(a, b)=>{
  console.log(a*b);
}
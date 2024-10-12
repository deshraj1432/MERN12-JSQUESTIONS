// question 16
// 16. accept name and age from the user check if the user is a valid voter or Not
//  valid: hello shery you are a valid voter
//  invalid sorry shery you cant cast the vote


// solution -->
   let a = prompt("enter your name");
   let b = +prompt("enter your age")


   if(b > 18){
    console.log ("hello",a ), console.log("you are valid voter")
   } else if (b <18){
    console.log ("hello",a ), console.log(`you cant cast the vote at ${18-b}, year`)

   } else {
   alert("invalid input : please fill correct information")
   }


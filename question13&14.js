// uestion 13 and 14
// 13. accept the gender from the user ass char the respective greeting message 
//  ex. good morning sir (on \the basis of gender)
//  14. extend the previous program and handle the wrong inputs.
//  print goood moring sir & good morning maam else print wrong input


// solution-->


 let a = prompt("your gender (male/female): ")


 if ( a === "male"){
console.log("Good morning sir ")
} else if ( a === "female"){
    console.log("Good morning mam")
} else{
    console.log("invalid input: please type male/female")
}


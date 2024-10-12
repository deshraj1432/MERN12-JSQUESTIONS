//question 19
// 19. accespt a yaer and check if it a leep year or not  and print the result
// solution


let a = +prompt("enter yaer")

if(a%4 ==0 && a%100 ==0 && a%400  ==0){
    console.log(`${a}, is a leap yaer`)
} else{
    console.log(`${a}, is not a leap yaer`)
}
// 49- Inverted Right Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

let rowNum = 5;
for(let i =rowNum; i >= 1; i--){
    let row = '';
    for(let j = 1; j <= i; j++){
        row += '* ';
    }
    console.log(row);
}

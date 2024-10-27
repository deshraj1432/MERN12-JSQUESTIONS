// 46- Right Triangle - Star
// *
// * *
// * * *
// * * * *
// * * * * *

let rowNum = 5;
for (let i = 1; i <= rowNum; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
//  47- Right Triangle - Number
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let rowNum = 15;
for (let i = 1; i <= rowNum; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row)
}

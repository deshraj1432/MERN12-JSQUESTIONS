// 48- Right Triangle - Alphabet
// A
// A B
// A B C
// A B C D
// A B C D E

let rowNum = 15;
 let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 for(let i = 0; i <= rowNum; i++){
      let row = '';
        for(let j = 0; j <= i; j++){
            row += char[j];
     }
    console.log(row);
}

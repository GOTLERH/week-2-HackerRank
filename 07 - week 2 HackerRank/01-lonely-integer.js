'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here


    a.sort((a,b)=> a-b)


    let uniq = Array.from(new Set(a));
    console.log("uniq: ", uniq);


    let finalArr = Array.from({length: uniq.length}, ()=> [])
    console.log("finalArr: ", finalArr);




    for(var i = 0; i < uniq.length; i++){


        console.log(i);


        let el = uniq[i];
        console.log("el: ", el);


        for(var j = 0; j < a.length; j++){
            let el2 = a[j];


            if(el2 === el){
                finalArr[i].push(el)
            }
     
        }




        // end of for i loop
    }


    let finalNum = finalArr.filter(el=> el.length === 1).flat()[0];
    console.log(finalNum);
    return finalNum;
   


}




let arr = [ 0, 0, 1, 2, 1 ];
lonelyinteger(arr)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
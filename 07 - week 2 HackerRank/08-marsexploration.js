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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let strToArr = s.split('');
    let finalArr = [];
    let changedLetters = 0;
    let a = strToArr.slice(0, 3);

    for(let i = 0; i < strToArr.length; i = i + 3){
        finalArr.push(strToArr.slice(i, i+3))
    }

    // console.log("finalArr: ", finalArr);

    finalArr.forEach(el=> {
        // console.log(el)
        if(el[0] !== 'S'){
            changedLetters++
        }
        if(el[1] !== 'O'){
            changedLetters++
        }
        if(el[2] !== 'S'){
            changedLetters++
        }
    });
    console.log("changedLetters: ", changedLetters);
    return changedLetters;
}

let input1 = 'SOSSPSSQSSOR';
let input2 = 'QQQ'
marsExploration(input1)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}

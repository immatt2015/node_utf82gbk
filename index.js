'use strict';
const iconv = require('iconv-lite');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('输入汉字', (ans)=>{
    // core
    let buf = iconv.encode(ans, 'GBK');

    let arr = [];
    for(let i of buf.values()){
        arr.push('%' + i.toString(16).toUpperCase());
    }
    // core end 
    
    rl.write(arr.join('%'));

    rl.close(); 
});
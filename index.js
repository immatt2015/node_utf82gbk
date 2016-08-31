'use strict';
const iconv = require('iconv-lite');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('输入汉字:  \n', (ans)=>{
    // core
    let buf = iconv.encode(ans, 'GBK');

    let str = '';
    for(let i of buf.values()){
        if(i) str += '%' + i.toString(16).toUpperCase();
    }
    // core end 
    
    rl.write(str);
    rl.write('\n');

    rl.close(); 
});
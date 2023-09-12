const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('숫자 입력: ', n=>{

    let res ='';
    // 10 -> 1010
    // 2**3+2**1 -> 배열로 생각해봄 [0,1,0,1] -> 0101 ->역순 -> 1010
    let end = 0;
    for(let i =0;2**i<n;i++){
        if(2**(i+1)>n){
            end = i;
        } 
    }
    // console.log(end);
    for(end;end>=0;end--){
        if(n-2**end>=0) {
            res +=1;
            n = n - 2**end;
        }
        else res +=0;
        console.log(n,res);
    }

    

    console.log(res);

    rl.close();
})
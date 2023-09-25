const t1 = "(())";
const t2 = "()())";

// 스택을 이용하는 것
// (, push
// ) 일때는 pop으로 비교 맞는지 확인
// 다른 경우 [, { 도 마찬가지로 처리하기
let arr =[];
let flag = true;
for(const i of t2){
    console.log(i);
    if(i==='{' || i==='[' || i==='(') arr.push(i);
    console.log(arr, arr.length);
    if(i==='}'){
        if(arr[arr.length-1]!=='{') {
            flag = false;
            break;
        } else arr.pop();
    } else if (i===']'){
        if(arr[arr.length-1]!=='[') {
            flag = false;
            break;
        } else arr.pop(); 
    } 
    if (i===')'){
        if(arr[arr.length-1]!=='(') {
            flag = false;
            break;
        } else arr.pop();
    }
}
console.log(arr);

console.log(`${t2}`);
if(flag && arr.length===0){
    console.log("YES");
} else {
    console.log("NO");
}


// 반복문으로 새로운 배열에 더한 값들을 다 push하기
// set을 이용해 중복 제거
// sort를 이용해 오름차순 정렬하기

function solution(numbers) {
    let answer = [];
    
    //  반복문으로 새로운 배열에 더한 값들을 다 push하기
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1; j<numbers.length;j++){
            let sum = numbers[i]+numbers[j];
            answer.push(sum);
        }
    }
    
    
    // set을 이용해 중복 제거
    answer = [...new Set(answer)];
    // sort를 이용해 오름차순 정렬하기
    
    answer.sort((a,b)=>a-b);

    
    return answer;
}

// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
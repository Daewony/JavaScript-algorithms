const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 학생이름: 값
// 키 : 값으로 받는 방법 => 해쉬테이블 형태
// 새로운 학생인가를 판별 -> 새로 만들고 표의 수 1로 설정
// 기존에 있는 학생인가? -> 표의 수 증가

rl.question('입력: ',e=>{
    const votes = e.split(' ');
    let classLeader = '';
    let voteCount = 0;
    for(let i =0;i<votes.length;i++){
        let tmpCount = 1;
        for(let j =i+1;j<votes.length;j++){
            if(votes[i]===votes[j]){
                tmpCount+=1;
            }
        }
        if(tmpCount > voteCount) {
            voteCount = tmpCount;
            classLeader = votes[i];
        }
    }
    console.log(`${classLeader}(이)가 총 ${voteCount}표로 반장이 되었습니다.`);

    rl.close();
})

// 투표의 수가 같을 시에는 어떻게하라는게 없네
// 객체를 사용하고싶었는데 어떻게 써야할지 못해 사용하지 못한점을 보완하자

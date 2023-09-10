const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    outpit: process.stdout
});

rl.question('a 입력: ', a =>{
    
    a = parseInt(a);

    const Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    rl.question('b 입력: ',b=>{
        b = parseInt(b);
        // 월마다 30,31일인지 달라짐
        // 13월, 31,32일 예외사항 처리
        // 요일을 영어로 알려줘야함
        // 1월 부터 먼저 해보자
        // 1월 2일이 목요일이라는 사실을 컴퓨터에게 어떻게 알려줄 수 있지?
        // 요일 수를 빼볼까?
        

        
        // 1월 31일
        // 2월 29일(윤년)
        // 3월 31일
        // 4월 30일
        // 5월 31일
        // 6월 30일
        // 7월 31일
        // 8월 31일
        // 9월 30일
        // 10월 31일
        // 11월 30일
        // 12월 31일

        if(a===1){
            if(b>31) return console.log(`${a}월에는 31일까지입니다.`);



            
        }



        
    })
    rl.close();
})
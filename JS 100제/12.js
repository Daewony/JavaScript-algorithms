// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

// 데이터
//     < 여기에 class를 작성하세요.>

class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack() {
        return console.log('파이어볼');
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


// 출력
// 545 210 10
// 파이어볼

// 생성자 함수가 객체라면
class Wizard1 {
    constructor({ health, mana, armor }) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
        // this.attack() = attack();
    }
}
const wizard1 = new Wizard1({ health: 100, mana: 200, armor: 50 });
console.log(wizard1.health, wizard1.mana, wizard1.armor); // 100 200 50

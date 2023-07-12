function solution(price, money, count) {
    for (var i = 1; i <= count; i++) {
        money -= price * i;
    }
    return money = money >= 0 ? 0 : money *= -1;
}
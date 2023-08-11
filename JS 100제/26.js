let planetNames = {
    수성: 'Mercury',
    금성: 'Venus',
    지구: 'Earth',
    화성: 'Mars',
    목성: 'Jupiter',
    토성: 'Saturn',
    천왕성: 'Uranus',
    해왕성: 'Neptune'
}

// 추가할 점
function getEnglishName(koreanName) {
    const englishName = planetNames[koreanName];
    return englishName || "해당하는 행성의 영어 이름을 찾을 수 없습니다.";
}

const name = prompt("한글로 행성 이름 입력");
const englishName = getEnglishName(name);
console.log(englishName);
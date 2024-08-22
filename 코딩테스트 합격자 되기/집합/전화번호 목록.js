function solution(phone_book) {
  // 1. 전화번호부를 사전순으로 정렬합니다.
  phone_book.sort();

  // 2. 인접한 두 전화번호를 비교하여 접두어 관계를 확인합니다.
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false; // 접두어인 경우
    }
  }

  // 3. 모든 비교가 끝난 후 접두어 관계가 없으면 true를 반환합니다.
  return true;
}

function solution(code) {
  let ret = '';
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    let v = code[i];
    if (mode === 0) {
      if (v !== '1' && i % 2 === 0) {
        ret += v;
      }

      if (v === '1') {
        mode = 1;
      }
    } else if (mode === 1) {
      if (v !== '1' && i % 2 === 1) {
        ret += v;
      }

      if (v === '1') {
        mode = 0;
      }
    } else {
      console.log('잘못된 mode 입력');
    }
  }

  if (ret.length === 0) return 'EMPTY';

  return ret;
}

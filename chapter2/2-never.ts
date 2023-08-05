{
  // never의 조건
  // 1. 함수에 return 값이 있으면 안된다.
  // 2. 함수의 endpoint가 없어야 한다.
  // 3. 쓸 데가 없는 타입이다. void를 쓰면 된다.
  // 4. 코드를 이상하게 짜다 보면 등장하는 타입이다.
  function func1(): never {
    throw new Error('error 실행 중단');
  }
  func1();

  // never type case 1
  function func2(parameter: string) {
    if (typeof parameter == 'string') {
      console.log(parameter);
    } else {
      // parameter의 type이 never로 변경됨
      console.log(parameter);
    }
  }

  // never type case 2
  // Error가 날 일이 없는 함수이다.
  let func3 = function () {
    throw new Error();
  };
}

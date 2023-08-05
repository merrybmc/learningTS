{
  // 기본 함수
  function func(x: number): number {
    return x * 2;
  }
  console.log(func(2));

  // void
  function func2(): void {
    console.log('void func');
  }
  func2();

  // ? = undefined 을 포함한 union 타입을 만들어주는 것과 같다.
  function func3(x: number, y?: number) {
    console.log(x, y);
  }
  func3(10);

  function func4(name: string = '이름이 없습니다'): void {
    console.log(name);
  }
  func4('안녕하세요 조병민입니다.');
  func4();

  function func5(name: string): void {
    if (name) {
      console.log('안녕하세요' + name);
    } else {
      console.log('이름이 없습니다.');
    }
  }
  func4('안녕하세요 조병민입니다.');
  func4();

  function func6(input: string | number): void {
    console.log(input.toString().length);
  }
  func6('helloWorld');
  func6(1234567891);

  type Shy = '상' | '중' | '하';

  function func7(money: number, house: boolean, shy: Shy) {
    console.log(money, house, shy);
  }

  func7(10000, false, '중');
}

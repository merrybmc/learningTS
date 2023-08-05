{
  function func(x: unknown[]) {
    return x[0];
  }

  // a type = unknown
  let a = func([4, 2]);
  // error
  //   console.log(a + 1);

  function func2<MyType>(x: MyType[]): MyType {
    return x[0];
  }

  let b = func2<number>([4, 2]);
  let c = func2<string>(['4', '2']);
  // 알아서 유추하기도 함
  let d = func2(['4', '2']);
  console.log(b);
  console.log(c);
  console.log(d);

  // 타입파라미터 제한두기
  function func3<T extends number>(x: T) {
    return x - 1;
  }
  let e = func3<number>(3);
  console.log(e);

  function func4<T extends string>(x: T) {
    console.log(x.length);
  }

  func4<string>('hello');

  function func5<T extends string | string[]>(x: T) {
    console.log(x.length);
  }

  func5<string[]>(['kim', 'park']);
}

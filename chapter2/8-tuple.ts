{
  // union보다 엄격하게 tuple
  // 첫 번째엔 무조건 string
  // 두 번째엔 무조건 boolean 값이 들어와도 안들어와도 됨
  // 옵셔널은 항상 제일 마지막에만 작성
  let arr: [string, boolean?] = ['dog', true];

  function func(x: [number, string]) {
    console.log(x);
  }

  func([1, '2']);

  let arr2: [...number[]] = [1, 2, 3];
  let arr3: [number, number, ...number[]] = [4, 5, ...arr];
  console.log(arr2);
  console.log(arr3);
}

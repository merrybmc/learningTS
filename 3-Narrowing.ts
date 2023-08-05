{
  // Narrowing
  // Narrowing을 판정해주는 문법
  // typeof 변수
  // 속성명 in 오브젝트 자료
  // 인스턴스 instanceof 부모
  function func1(x: number | string) {
    if (typeof x === 'string') {
      //   console.log(x + 1);
    } else {
      //   console.log(x + 1);
    }
  }
  func1('abc');
  func1(123);

  function myArr(x: number | string) {
    let array: number[] = [];
    // x = number | string 타입이기 때문에 할당이 불가능하다.
    if (typeof x === 'number') {
      array[0] = x;
    } else {
      throw new Error('not number');
    }
  }

  // Assertion 타입 덮어쓰기
  // assertion 문법의 용도
  // 1. Narrowing할 때 쓴다.
  // 2. 무슨 타입이 들어와야하는지 확실히 필요할 때 쓴다.
  function myArr2(x: number | string) {
    let array: number[] = [];
    // as type = assertion
    // 왼쪽에 있는 변수를 해당 타입으로 덮어 써주세요
    array[0] = x as number;
  }

  // assertion은 타입을 변경할 때 쓰는 문법이 아니다.
  let name: string = 'kim';
  //   name as number;

  // 과제
  let intArr: (string | number)[] = [1, 2, 3, '4', '5'];
  let intArr2: (string | number)[] = [1, 2, 3, '4', '5'];

  for (let i = 0; i < intArr.length; i++) {
    if (typeof intArr[i] === 'number') {
      continue;
    } else if (typeof intArr[i] === 'string') {
      let newInt: number = parseInt(intArr[i] as string);
      intArr[i] = newInt;
    }
  }

  //   or

  let newArr: number[] = [];

  intArr2.forEach((element) => {
    if (typeof element === 'string') {
      newArr.push(parseInt(element));
    } else {
      newArr.push(element);
    }
  });

  //   console.log(intArr);
  //   console.log(newArr);

  let teacher1: { subject: string } = { subject: 'math' };
  let teacher2: { subject: string[] } = { subject: ['science', 'english'] };
  let teacher3: { subject: string[] } = { subject: ['science', 'art', 'korean'] };
  //   console.log(teacher1);
  //   console.log(teacher2);
  //   console.log(teacher3);

  //   let leng = teacher2.subject.length;
  //   console.log(teacher2.subject[teacher2.subject.length - 1]);

  function putSubject(subject: string | string[]): void {
    // array만 object가 아니다. !!!
    // if (typeof subject === 'object') {
    //   console.log(subject[subject.length - 1]);
    // } else {
    //   console.log(subject);
    // }

    // array인지 판별
    if (Array.isArray(subject)) {
      console.log(subject[subject.length - 1]);
    } else {
      console.log(subject);
    }
  }

  putSubject(teacher1.subject);
  putSubject(teacher2.subject);
  putSubject(teacher3.subject);
}

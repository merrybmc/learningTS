{
  // &&
  function func1(a: string | undefined) {
    // && = null & undefined 타입 체크
    // a가 null & undefined면 a 타입 아니면 string
    if (a && typeof a === 'string') {
    }
  }

  func1('');

  type Fish = { swim: string };
  type Bird = { fly: string };

  // in
  function func2(animal: Fish | Bird) {
    if ('swim' in animal) {
      console.log(animal.swim);
    }
  }

  func2({ swim: 'ah-poo' });

  // object instanceof parentsClass
  let date = new Date();

  if (date instanceof Date) {
    console.log(date);
  }

  type Car = {
    wheel: '4개';
    color: string;
  };

  type Bike = {
    wheel: '2개';
    color: string;
  };

  function func3(x: Car | Bike) {
    // 둘 다 똑같은 속성을 가지고 있어 in이 불가능
    // 리터럴 타입으로 검사
    // 이 경우 x = Car 타입
    if (x.wheel === '4개') {
      console.log(x);
    }
  }

  func3({ wheel: '4개', color: '#ddd' });
}

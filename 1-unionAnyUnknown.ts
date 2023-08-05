{
  // 타입 지정 여러개 해주기 union

  // number 또는 string 타입
  let customer: number | string = 123;

  // 할당 가능
  customer = 'Cho';

  // number,string 값이 들어갈 수 있는 배열
  let customer2: (number | string)[] = [1, 'cho', 2];
  console.log(customer2);

  let customer3: { a: string | number } = { a: '123' };
  console.log(customer3);

  // any
  // 모든 자료형을 허용해준다.
  // any를 쓰면 타입스크립트를 쓰는 의미가 없어진다.
  // 타입실드 해제 문법이라고도 부른다.
  let myName: any = 123;

  // unknown
  // 모든 자료형을 허용해준다.
  let myName2: unknown = 123;

  let myAge: string | number = 'kim';
  // 타입스크립트가 엄격하게 검사
  // string + 1 불가능
  myAge + 1;
}

// 과제 1
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let info: (string | number | undefined | boolean)[] = [user, age, married];

// 과제 2
let school: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 90, 80],
  teacher: 'apple',
  friend: 'ByeongMin',
};

school.score[4] = false;
school.friend = ['Lee', school.teacher];

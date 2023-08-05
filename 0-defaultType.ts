// 변수명: 타입명
let myName: string = 'Cho Byeong Min';

let myAge: number = 29;

let MarryCheck: boolean = true;

let myUndefined: undefined;

let myNull: null = null;

// 배열
let customers1: string[] = ['kim', 'park'];
let customers2: number[] = [1, 2, 3];

// 객체
let customers3: { member1: string; member2: string } = {
  member1: 'kim',
  member2: 'park',
};

// 타입스크립트는 타입 지정을 해줄 필요가 없다.
// 타입스크립트는 알아서 타입을 지정해줄 수 있는건 자동으로 해준다.

// 과제

// 모두 자동으로 타입 지정이 되어 있다.
let project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

// 명시할 경우
let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

{
  // rest parameter
  function func1(num1: number, num2: number, ...a: (number | string)[]) {
    console.log('a', a);
    console.log('num', num1, num2);
    console.log('arg', arguments);
  }

  func1(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c');

  // destructuring 구조분해할당
  let arr = ['hello', 100];
  let str1 = arr[0]; // 💩
  let num1 = arr[1]; // 💩
  console.log(str1);
  console.log(num1);

  let [str2, num2] = arr;
  console.log(str2, num2);

  let person = { student: true, age: 20 };
  let { student, age } = person;
  console.log(student, age);
  let { student: student2, age: age2 } = person;
  console.log(student2, age2);

  function func2({ student, age }: { student: boolean; age: number }) {
    console.log('func2', student, age);
  }

  func2({ student: true, age: 20 });

  // 과제
  function max(...num: number[]): number {
    let maxNum: number = Math.max(...num);
    return maxNum;
  }

  console.log(max(6, 3, 7, 5, 4));

  interface Func3 {
    user: string;
    comment: number[];
    admin: boolean;
  }

  //   let func3 = ({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }): void => {
  //     console.log(user, comment, admin);
  //   };

  let func3 = ({ user, comment, admin }: Func3): void => {
    console.log(user, comment, admin);
  };

  func3({ user: 'kim', comment: [3, 5, 4], admin: false });

  type Array = (number | string | boolean)[];

  function func4([a, b, c]: Array) {
    console.log(a, b, c);
  }

  let myArr = [40, 'wine', 'false'];
  //   func4([40, 'wine', false]);
  func4(myArr);
}

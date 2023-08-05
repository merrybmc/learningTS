{
  type funcType = (a: string) => number;

  const func1: funcType = (a) => {
    return parseInt(a);
  };

  let result = func1('10');
  console.log(result);

  type UserInfo = {
    name: string;
    plusOne: (a: number) => number;
    changeName: () => void;
  };

  let userInfo: UserInfo = {
    name: 'kim',
    plusOne(a) {
      return a + 1;
    },
    changeName() {
      console.log('changeName');
    },
  };

  console.log(userInfo.plusOne(1));
  console.log(userInfo.changeName());

  type CutZero = (str: string) => string;

  const cutZero: CutZero = (str) => {
    // let result = str.replace(/^0+/, '');
    if (str[0] === '0') {
      let result = str.replace('0', '');
      return result;
    }
    return str;
  };

  console.log(cutZero('012'));

  type RemoveDash = (str: string) => number;

  const removeDash = (str: string): number => {
    let result = str.replace('-', '');
    return parseInt(result);
  };

  console.log(removeDash('010-8981'));

  const callBack = (str: string, func1: CutZero, func2: RemoveDash): number => {
    let step1 = func1(str);
    let step2 = func2(step1);
    return step2;
  };

  console.log('cb', callBack('010-8981', cutZero, removeDash));
}

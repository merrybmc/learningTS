{
  type Position = 'top' | 'down' | 'left' | 'right';

  let position = 'top';
  console.log(position);

  function func1(a: 'hello'): 1 | 0 {
    return 1;
  }

  func1('hello');

  type Game = '가위' | '바위' | '보';

  function game(command: Game): ('가위' | '바위' | '보')[] {
    let arr = [];
    arr.push(command);
    return arr;
  }

  console.log(game('가위'));

  var source = {
    name: 'kim',
  } as const;

  function myFunc(a: 'kim') {
    console.log(a);
  }
}

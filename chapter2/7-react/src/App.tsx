import React, { useState } from 'react';
import './App.css';

// 태그가 있는 변수에 타입 지정
let box: JSX.Element = <div>box</div>;

function App() {
  // useState는 타입이 자동으로 지정된다.
  const [user, setState] = useState('kim');
  // 굳이 쓰고 싶으면
  const [user2, setState2] = useState<string | number>('cho');

  let name: string = 'kim';
  return (
    <div>
      <h4>안녕하십니까?</h4>
      <p>{name}</p>
      {box}
      {user}
      {user2}
      <Profile name='철수' age='20' />
    </div>
  );
}

// 컴포넌트 만들 때 타입지정
function Profile({ name, age }: { name: string; age: string }): JSX.Element {
  return (
    <div>
      프로필입니다.
      {name}
      {age}
    </div>
  );
}

export default App;

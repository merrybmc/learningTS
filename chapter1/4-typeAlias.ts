{
  type Animal = string | number | undefined;

  //   let animal: string | number | undefined;
  let animal: Animal;

  type Animal2 = { name: string; age: number };
  let animal2: Animal2 = { name: 'kim', age: 20 };
  // console.log(animal2);

  // 수정 가능
  const hometown = { region: 'seoul' };
  hometown.region = 'busan';
  // console.log(hometown);

  type GirlFriend = {
    readonly name: string;
  };

  const girlFriend: GirlFriend = {
    name: 'IU',
  };
  // console.log(girlFriend);
  // girlFriend.name = 'suji';
  // console.log(girlFriend);

  type Name = string;
  type Age = number;
  type Person = Name | Age; // string | number

  type PositionX = { x: number };
  type PositionY = { y: number };
  type Position = PositionX & PositionY; // PositionX + PositionY

  // 과제
  type Subject1 = {
    color: string;
    size: number;
    readonly position: number[];
  };

  let subject1: Subject1 = {
    color: '#ddd',
    size: 20,
    position: [10, 20],
  };

  type Subject2 = {
    name: string;
    phone: number;
    email: string;
    check: boolean;
  };

  let subject2: Subject2 = {
    name: 'kim',
    phone: 123,
    email: 'abc@naver.com',
    check: true,
  };

  console.log(subject2);
}

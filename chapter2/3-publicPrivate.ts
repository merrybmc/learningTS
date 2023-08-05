{
  // public = 전역 사용 가능, default
  // private = 지역 내 사용 가능

  class User {
    private name: string;
    private familyName: string = ' Cho';

    constructor(name: string) {
      this.name = name + this.familyName;
    }

    changeName() {
      this.familyName = 'park';
    }
  }

  let user1 = new User('Byeong Min');

  // private field는 호출 불가능
  //   user1.name;

  console.log(user1);

  user1.changeName();
  console.log(user1);

  class Person {
    constructor(public name) {}
  }

  let person = new Person('Byeong Min');
  console.log(person);
}

{
  class Person {
    // class field
    data: number = 0;
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    function(name: string) {
      console.log('hello class' + name);
    }
  }

  let person = new Person('kim');
  console.log(person);
  person.function('cho');

  // 과제
  class Car {
    model: string;
    price: number;
    constructor(model: string, price: number) {
      this.model = model;
      this.price = price;
    }

    tax(): void {
      console.log(this.price * 0.1);
    }
  }

  let car1 = new Car('sonata', 3000);
  console.log(car1);
  car1.tax();

  class Word {
    arrayNum: number[] = [];
    arrayStr: string[] = ;
    constructor(...data: (number | string)[]) {
      data.forEach((element) => {
        if (typeof element === 'number') return this.arrayNum.push(element);
        if (typeof element === 'string') return this.arrayStr.push(element);
      });
    }
  }

  let Word1 = new Word('1', 1, 2, '3');
  console.log(Word1);
}

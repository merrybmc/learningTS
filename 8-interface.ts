{
  type Square = {
    color: string;
    width: number;
  };

  let square: Square = { color: 'red', width: 100 };

  interface School {
    name: string;
    age?: number;
  }

  interface School {
    location?: string;
  }

  let student: School = { name: 'kim' };
  let teacher: School = { name: 'kim', age: 20 };
  console.log(student);
  console.log(teacher);

  // 과제

  interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
  }

  let product: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'Phone'] };
  console.log(product);

  interface Cart extends Card {
    product: string;
    price: number;
  }

  interface Card {
    card?: boolean;
  }

  let cart: Cart[] = [
    { product: '청소기', price: 7000, card: false },
    { product: '삼다수', price: 800 },
  ];

  interface Calculator {
    plus: (num1: number, num2: number) => number;
    minus: (num1: number, num2: number) => number;
  }

  const calculator: Calculator = {
    plus(num1, num2) {
      return num1 + num2;
    },
    minus(num1, num2) {
      return num1 - num2;
    },
  };

  console.log(calculator.plus(10, 20));
  console.log(calculator.minus(20, 10));
}

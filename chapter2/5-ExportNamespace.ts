import { ObjectFucntion } from './5-ExportNamespace';
export type Name = string;
export let age = 20;

// 타입명 감추기
// 옛날에 사용함, 타입명 중복 방지용
// 지금은 안씀 알아만 두셈
namespace Namespace {
  export type Name2 = string | number;
}

// 사용법
let name: namespace.Name2 = 'kim';

export interface Interface {
  name: string;
}

export type Car = {
  wheel: number;
  model: string;
};

export interface Bike {
  wheel: 2;
  model: string;
}

// 파라미터로 object를 선택적으로 집어넣을 수 있고 아무것도 리턴하지 않는다.
export type ObjectFucntion = (a?: object) => void;

const func: ObjectFucntion = (a) => {
  console.log(a);
};

ObjectFucntion({ abc: 'hello' });

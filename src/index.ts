import { TestObj } from './global';

const a = [1, 2, 3, 4];
const c = [6567, 876];
const d = [...a, ...c];
const b = () => {
  return new Promise((resolve) => {
    resolve(true);
  });
};

b();

export default class Test {
  constructor() {}
  init(data: TestObj) {
    console.log(data);
  }
}

export const sum = (a: number, b: number): number => {
  return a + b;
};

new Test().init({ a: '1', b: 1, c: true });

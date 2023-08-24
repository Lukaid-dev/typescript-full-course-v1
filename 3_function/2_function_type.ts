/**
 * Function Type
 *
 * 함수를 타입으로 사용하기
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map(callback);
};

console.log(runner((x) => `아이브 멤버: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

// 함수 자체에 타입을 지정하면 인자에 타입을 지정하지 않아도 됨
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x * y;
};

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  // return true;
  return x * y;
};

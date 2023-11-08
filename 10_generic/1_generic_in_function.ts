/**
 * Generic 함수에서 사용하기
 *
 * 객체지향의 꽃! Generic!
 */

function whatValue(value: any) {
  return value;
}

const value = whatValue("test"); // value: any

// 입력하는 값의 타입과 반환하는 값의 타입이 같다.
function genericWhatValue<T>(value: T): T {
  return value;
}

// genericWhatValue 함수를 사용할 때, 타입을 명시적으로 지정해줄 수 있다.
const genericResult1 = genericWhatValue<number>(123); // genericResult1: number

let genericResult2 = genericWhatValue("123"); // genericResult2: string, 값만 보고 타입을 추론한다.

const genericResult3 = genericWhatValue("123"); // genericResult3: "123", const의 경우 더 엄격하게 타입을 추론한다.

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  };
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  "123"
);

const multipleGenericResult2 = multipleGenerics(123, true, "123");

function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

// 어렵네...
function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instantiator(Idol, "아이유", 23));
console.log(instantiator(Car, "BMW", 1111));

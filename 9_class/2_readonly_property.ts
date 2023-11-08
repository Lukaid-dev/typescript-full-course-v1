/**
 * readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol("안유진", 23);

yuJin.age = 32;
// yuJin.name = '코드팩토리'; // Cannot assign to 'name' because it is a read-only property.
// setter로도 안되네요.

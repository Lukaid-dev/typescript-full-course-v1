/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  sing() {
    console.log(`child : ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent("코드팩토리");
const ahri = new Child("아리", 12);

codefactory.dance();

ahri.dance();
ahri.sing();

let person: Parent;
person = codefactory;
// 자식은 부모타입이 될 수 있다.
person = ahri;

let person2: Child;
person2 = ahri;
// 부모는 자식타입이 될 수 없다.
// person2 = codefactory;

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2("코드팩토리");
const ahri2 = new Child2("아리", 20);

let child: Child2;
child = ahri2;

// 원래는 에러가 나야하지만, optional 프로퍼티가 있어서 부모와 자식이 같은 경우 에러가 나지 않는다.
child = cf2;

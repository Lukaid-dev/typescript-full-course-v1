/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

// interface는 implements 키워드를 사용하여 구현한다.
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  dance() {}
}

let ori: any = new Dog("오리", 3);

// type predicate
function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(ori)) {
  ori; // ori는 Animal
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐옹");
  }
}

// intersection type와 다중 인터페이스 구현은 같은 의미
type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐옹");
  }
}

interface WrongInterface1 {
  name: string | number;
}

interface WrongInterface2 {
  name: number;
}

// 인터페이스들 끼리 중복되는 property가 있는지 체크

// 각 인터페이스의 name이 각기 다른 타입이므로, Person은 두 인터페이스를 모두 구현할 수 없다.
// Property 'name' has no initializer and is not definitely assigned in the constructor.
// class Person implements WrongInterface1, WrongInterface2 {
// name: number;
// name: number | string;
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  new (name: string, age: number): Idol; // 이 문법은 제너릭에서도 사용된다. 기억하자.
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age); // 이거랑 똑같음
  return new constructor(name, age);
}

console.log(createIdol(Idol, "아이유", 32));

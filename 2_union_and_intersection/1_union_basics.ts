/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다. (제일 많이 사용됨)
 *
 * Or의 개념
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "아이브";
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // Type 'undefined' is not assignable to type 'StringOrBooleanType'

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
// state = 'INITIAL';

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

strListOrBooleanList = [true, false, false, true];

// 두 타입을 쓰까먹을 수는 없다.
// strListOrBooleanList = [
//     true,
//     '아이유',
// ]

// 이렇게 선언하면 두 타입을 쓰까서 어레이에 넣을 수 있음
type StrOrNumberList = (string | number)[];

let stringOrNumberList = [1, 2, 3, "아이유", "레드벨벳"];

stringOrNumberList = [1, 2, 3];

stringOrNumberList = ["아이유", "레드벨벳"];

// stringOrNumberList = [
//     true,
//     false,
// ]

/**
 * Interface로 사용하는 union
 */
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "최지호",
  age: 32,
  address: "대한민국",
};

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

animalOrHuman = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); // Property 'address' does not exist on type 'Animal'.

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "최지호",
  age: 32,
  address: "대한민국",
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
  name: "오리",
  age: 9,
};

// console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  country: string;
};

type PersonOrCat = Person | Cat;

// 각각 선언하는 것과 두 타입 모두 선언하는거 괜찮은데, 각타입에서 하니씩 선언하는건 또 안됨. 근데 이렇게 쓸 일이 있나?
const personOrCat: PersonOrCat = {
  name: "코드팩토리",
  age: 32,
  breed: "Yorkshire Terrier",
  country: "영국",
};

console.log(personOrCat);

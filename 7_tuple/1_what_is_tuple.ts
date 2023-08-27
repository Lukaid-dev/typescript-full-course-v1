/**
 * Tuple
 *
 * js에서는 Tuple이 없다.
 * ts에서 빌드타임에 타입체크를 할 수 있도록 도와주는 타입이다.
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringTuple: [number, string] = [23, "코드팩토리"]; // 순서

numberAndStringTuple.push("아이유"); // ts에서 push가 가능해버리면 js에서는 잡아낼 수 없다.
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [23, "코드팩토리"]; // 그래서 readonly를 사용한다.

// unmodifiableTuple.push();

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

let actressesTuple = ["김고은", "박소담", "전여빈", "전여빈"] as const; // as const를 사용하면 readonly가 된다.
console.log(actressesTuple);

const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const;

let stringArray: string[] = [...actressesTuple, ...actressesTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["코드팩토리", 32];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ["장원영", "안유진"];

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
  ["코드팩토리", 32],
  ["아이유", 31],
  ["김고은", 30],
];

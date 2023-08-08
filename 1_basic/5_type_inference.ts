/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string"; // let stringType: string 으로 추론해줌
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false'; // Type 'string' is not assignable to type 'boolean'

const constStringType = "const string"; // const로 선언하면, const constStringType: "const string" 이렇게 완전 구체적으로 추론해줌
const constBooleanType = true; // 얘도 딱 true만 할당할 수 있음

let yuJin = {
  name: "안유진",
  age: 2003,
};

// object는 const로 선언해도, 내부의 값을 변경할 수 있음
const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2);

// casting
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

yuJin3.name = "안유진";
// yuJin3.name = "코드팩토리"; // 이건 안됨
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100]; // undefined

// tuple
const twoNumbers = [1, 3] as const; // readonly

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3]; // Tuple type 'readonly [1, 3]' of length '2' has no element at index '3'.
// tuple은 길이까지 가져옴

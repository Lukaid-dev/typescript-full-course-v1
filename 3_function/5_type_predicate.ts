/**
 * Type Predicate
 *
 * 생각보다 많이 쓴다고 함...
 *
 * 어떤 변수나 반환값이 특정 타입인지 아닌지를 체크하는 함수
 */

// 함수의 반환타입에 인풋파라미터를 넣어주고 is와 체크하고싶은 타입을 넣어줌, 불리언으로 반환
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));
console.log(isNumber("10"));

function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;

if (isNumberRetBool(number)) {
  number; // number는 여전히 any
}

if (isNumber(number)) {
  number; // number는 number
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 32,
      }
    : {
        name: "오리",
        breed: "코리안 길냥이",
      };

if (isDoge(doge)) {
  doge; // doge는 Doge
} else {
  doge; // doge는 Cat
}

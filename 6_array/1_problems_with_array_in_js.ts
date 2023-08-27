/**
 * Problems with Array in JS
 *
 * 다른 타입의 데이터를 같은 배열에 넣을 수 있다.
 */
const number = [1, "2", 3, "4", 5];

let strings: string[] = ["1", "2", "3"];

// strings.push(1);

let stringsOrNumbersArray: (string | number)[] = [1, "2", 3, "4"];

let stringArrNumberArr: string[] | number[] = [1, 2, 3];

stringArrNumberArr = ["1", "2", "3"];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = "3";

let boolArr = [true, false, true];

boolArr.push(false);

// boolArr.push(1);

const onlyString = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i];
}

for (let item of onlyNumbers) {
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999]; // ts는 array의 길이를 신경쓰지 않는다.

console.log(number4); // undefined

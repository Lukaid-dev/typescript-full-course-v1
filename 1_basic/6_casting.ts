/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 * 상속에서 더 구체화 된 값으로 캐스팅할 때만 사용한다고 생각하자.
 * 막 쓰면 큰일남. 컴퓨터 터짐.
 */
let codefactory = "code factory";
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number, js로 컴파일 되고 나서는 string이 아니라 number로 나옴, casting은 js로 컴파일 되기 전에만 적용됨

let number = 5;

console.log((number as any).toUpperCase()); // compile time에서는 통과되지만, runtime에서는 에러가 남

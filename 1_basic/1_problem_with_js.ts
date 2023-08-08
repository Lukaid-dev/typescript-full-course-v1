function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(1, "2")); // runtime이 아니라 compile time에 에러를 잡을 수 있다.
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

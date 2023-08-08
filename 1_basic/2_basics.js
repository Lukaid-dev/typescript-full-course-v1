/**
 * Types
 */
var helloText = "Hello";
// helloText = true;
/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
var stringVar = "String";
var numberVar = 3;
var bigIntVar = BigInt(999999);
var booleanVar = true;
var symbolVar = Symbol(1);
var nullVar = null;
var undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
var anyVar;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;
// any 타입은 다른 타입으로 선언된 변수에 할당할 수 있다.
var testNumber = anyVar;
var testString = anyVar;
var testBoolean = anyVar;
// unknown - 알 수 없는타입
var unknownType;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;
// unknown 타입은 다른 타입으로 선언된 변수에 할당할 수 없다.
var testNumber2 = unknownType;
var testString2 = unknownType;
var testBoolean2 = unknownType;
var unknownType2 = unknownType;
var anyType2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
var neverType = null;
var neverType = undefined;
var neverType = "test";
/**
 * 리스트 타입
 */
var koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
var booleanList = [true, false, false, true];
// 이렇게 typescript를 작성하고 terminal에 tsc 1_basic/2_basics.ts를 입력하면
// 2_basics.js 파일이 생성된다.

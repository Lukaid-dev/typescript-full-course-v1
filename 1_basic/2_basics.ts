/**
 * Types
 */
let helloText: string = "Hello";
// helloText = true;

/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;

// any 타입은 다른 타입으로 선언된 변수에 할당할 수 있다.
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는타입
let unknownType: unknown;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;

// unknown 타입은 다른 타입으로 선언된 변수에 할당할 수 없다.
let testNumber2: number = unknownType;
let testString2: string = unknownType;
let testBoolean2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
let neverType: never = null;
let neverType: never = undefined;
let neverType: never = "test";

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList: boolean[] = [true, false, false, true];

// 이렇게 typescript를 작성하고 terminal에 tsc 1_basic/2_basics.ts를 입력하면 2_basics.js 파일이 생성된다.

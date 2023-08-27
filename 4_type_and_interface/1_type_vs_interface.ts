/**
 * Type vs Interface
 *
 * Type이 먼저 개발되고, 이를 보완하기 위해 Interface가 나왔다.
 * 하지만, Interface가 Type을 대체할 수 있는 것은 아니다.
 */

// Object 선언할때
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function을 선언할때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging, interface를 합치는거 *중요*
// interface는 같은 이름으로 여러번 선언할 수 있다.
// 중복선언 했을때, 같은 이름의 interface를 합쳐서 사용할 수 있다.
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 200,
  width: 100,
};

// Duplicate identifier 'TRectangle'.
// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티, instance에 귀속된다.
  getY = (x: number) => {
    return x;
  };

  // 메서드, prototype에 귀속된다.
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // getY: (y: string) => number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number; // 함수는 오버로딩이 됨
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};

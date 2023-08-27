/**
 * Extension
 */
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

// interface는 type을 상속받을 수 있다.
interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

// type은 interface를 상속받을 수 있다.
type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/**
 * extending multiple
 */
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "코드팩토리",
  age: 32,
  breed: "Poodle",
};

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "오리",
  age: 7,
  breed: "코리안 냥냥이",
};

/**
 * Overriding
 */
type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string; // primitive type을 intersection하면 never가 된다.
  width: number;
};

// const rectangle: TRectangle = {
//     height:,  //  height는 never가 된다.
//     width: 100,
// }

type TWidth = {
  width: number | string;
};
type TRectangle2 = TWidth & {
  width: number; // 이 경우에는 하나의 type으로 정의된다. narrowing이 일어난다.
  height: number;
};

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
};

interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}

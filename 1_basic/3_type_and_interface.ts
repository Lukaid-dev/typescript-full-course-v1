/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year?: number; // optional
};

const yuJin: IdolType = {
  name: "안유진",
  // year: 2002,
};

/**
 * Interface
 *
 * type이 먼저 생기고 type의 부족한 부분을 보완하기 위해 interface가 생겼다.
 * 그래서 둘이 겹치는 부분이 꽤 많음.
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: "안유진",
  // year: 2002,
};

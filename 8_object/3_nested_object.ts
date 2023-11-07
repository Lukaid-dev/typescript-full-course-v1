/**
 * Nested Object
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "코드팩토리",
    age: 32,
  },
  nationality: "한국인",
};

// 이렇게 타입을 쪼개서 네스팅하는게 더 나음, 에러체크가 더 잘됨
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    name: "아이유",
    age: 32,
  },
  nationality: "한국인",
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: "안유진",
    age: 22,
  },
  nationality: "한국인",
};

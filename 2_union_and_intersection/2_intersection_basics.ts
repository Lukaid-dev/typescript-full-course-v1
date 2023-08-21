/**
 * Intersection
 *
 * And의 개념
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01012341234",
  address: "서울시",
};

// primitive type을 intersection 할 수 없다.
type NumberAndString = number & string;

// let numberAndString: NumberAndString = never; // never는 ts의 타입이지 js의 타입은 아니다. 따라서 할당 불가능

/**
 * Optional and Undefined Property
 */
interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined
  breed?: string;
}

const byulE: Dog = {
  name: "별이",
  age: 12,
  breed: "미니핀",
};

const ori: Dog = {
  name: "오리",
  age: 3,
};

interface Cat {
  name: string;
  age: number;
  // optional이 아니라면 undefined를 넣어줘야 함
  breed: string | undefined;
}

const nabi: Cat = {
  name: "나비",
  age: 7,
  // optional이 아니라면 undefined를 넣어줘야 함
  breed: undefined, // Property 'breed' is missing in type '{ name: string; age: number; }' but required in type 'Cat'.
};

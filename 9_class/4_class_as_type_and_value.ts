/**
 * Class as Type and Value
 *
 * 클래스는 타입이 될 수도 있고 값이 될 수도 있다.
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다`;
  }
}

let ori = new Dog("오리"); // ori는 Dog 타입이다.
console.log(ori.bark());

// ori = '오리';

ori = {
  name: "별이",
  bark() {
    return `${this.name}가 짖습니다.`;
  },
};

console.log(ori);

/**
 * Abstract class
 *
 * 그 자체로는 인스턴스화 할 일이 없지만, 공유되는 타입을 생성하는데 사용될 수 있다.
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId {}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return "소리질러~";
  }
}

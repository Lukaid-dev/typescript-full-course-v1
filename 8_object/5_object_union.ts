/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 12,
      }
    : // 고양이
      {
        name: "오리",
        breed: "코리안 길냥이",
      };

dogOrCat.name;
dogOrCat.age; // number | undefined
dogOrCat.breed; // string | undefined

console.log(dogOrCat.name);
console.log(dogOrCat.age);
console.log(dogOrCat.breed);

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: "별이",
        age: 12,
      }
    : // 고양이
      {
        name: "오리",
        breed: "코리안 길냥이",
      };

dogOrCat2.name;
// dogOrCat2.age; // Property 'age' does not exist on type 'DogOrCat'. Property 'age' does not exist on type 'Cat'.
// dogOrCat2.breed; // Property 'breed' does not exist on type 'DogOrCat'. Property 'breed' does not exist on type 'Dog'.

// narrowing
if ("age" in dogOrCat2) {
  dogOrCat2;
  dogOrCat2.age;
  dogOrCat2.name;
} else {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.breed;
}

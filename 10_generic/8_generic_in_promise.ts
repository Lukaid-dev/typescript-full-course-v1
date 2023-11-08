/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
};

runner();

// Promise의 generic은 resolve의 type을 정의한다.
const afterOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterOneSecond();
  console.log(res);
};

runner2();

// async function의 return type은 Promise<return type>이다. Promise가 실제로 없는대도!!
const runner3 = async function () {
  return "string return";
};

/**
 * Spread Operator
 */
const onlyString = ["1", "2", "3", "4"];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onlyString];

console.log(arr1);

const arr2 = [...onlyString, ...onlyNumbers];

console.log(arr2);

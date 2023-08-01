// Run with Quokka

/* ---------------------------------------
 Basic Examples
--------------------------------------- */
const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("John", "Murphy"));

/* ---------------------------------------
 Impure Function Examples
--------------------------------------- */
let z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 3));

let a = 1;
const increment = () => (a += 1);
console.log(increment());
console.log(a);

/* ---------------------------------------
 High Order Function Examples
--------------------------------------- */
const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter((num) => num % 2 != 0);
console.log(oddToFive);

const doubled = oneToFive.map((num) => num * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, num) => acc + num);
console.log(summed);

console.log(oneToFive);

const reverseSort = oneToFive.sort((prev, curr) => {
    if (prev == curr) return 0;
    if (prev > curr) return -1;
});

console.log(reverseSort);

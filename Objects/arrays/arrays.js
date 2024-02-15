let arrOrg1 = ["One", "Two", "Three", "Four", "Five"];
console.log("arrOrg1", arrOrg1);

const arr1 = arrOrg1.splice(2);

console.log("arr1", arr1);
console.log("arrOrg1", arrOrg1);
console.log();

let arrOrg2 = ["One", "Two", "Three", "Four", "Five"];
console.log("arrOrg2", arrOrg2);

const arr2 = arrOrg2.splice(2, 2);

console.log("arr2", arr2);
console.log("arrOrg2", arrOrg2);
console.log();

let arrOrg3 = ["One", "Two", "Three", "Four", "Five"];
console.log("arrOrg3", arrOrg3);

const arr3 = arrOrg3.splice(2, 1, "Six", "Seven", "Eight");

console.log("arr3", arr3);
console.log("arrOrg3", arrOrg3);
console.log();

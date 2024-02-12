let arrOrg1 = ["One", "Two", "Three", "Four", "Five"];
const arr1 = arrOrg1.splice(2);
console.log(arr1);
console.log(arrOrg1);

let arrOrg2 = ["One", "Two", "Three", "Four", "Five"];
const arr2 = arrOrg2.splice(2, 2);
console.log(arr2);
console.log(arrOrg2);

let arrOrg3 = ["One", "Two", "Three", "Four", "Five"];
const arr3 = arrOrg3.splice(2, 2, "Six", "Seven", "Eight");
console.log(arr3);
console.log(arrOrg3);

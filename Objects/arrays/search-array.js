let arr = [
    { name: "John", age: 20 },
    { name: "Mary", age: 15 },
    { name: "Jane", age: 35 },
    { name: "Peter", age: 50 },
];

const over19 = arr.find((node) => {
    return node.age > 19;
});

console.log(over19);

const over19Idx = arr.findIndex((node) => {
    return node.age > 19;
});
console.log("over19Idx", over19Idx);

const under15 = arr.findIndex((node) => {
    return node.age < 15;
});

console.log("under15", under15);

const over19s = arr.filter((node) => {
    return node.age > 19;
});

console.log("over19s", over19s);

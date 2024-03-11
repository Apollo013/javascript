let obj = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "5th Avenue",
        number: 123,
    },
};

let obj2 = obj;
let obj3 = { ...obj };
let obj4 = Object.assign({}, obj);
let obj5 = JSON.parse(JSON.stringify(obj));

obj2.name = "Smith";
obj3.name = "Doe";
obj4.name = "Brown";
obj5.name = "Johnson";

obj2.address.street = "6th Avenue";
obj3.address.street = "7th Avenue";
obj4.address.street = "8th Avenue";
obj5.address.street = "9th Avenue";

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);

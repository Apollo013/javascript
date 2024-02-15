let products = [
    { name: "Orange", price: 20 },
    { name: "Bannana", price: 15 },
    { name: "Apple", price: 35 },
    { name: "Peach", price: 50 },
];

console.log(products);

products.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log(products);

products.sort((a, b) => {
    return a.name.localeCompare(b.name) * -1;
});
console.log(products);

products.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
});
console.log(products);

let products = new WeakMap();
products.set({ name: "Apple", price: 1.99 }, 10);
products.set({ name: "Banana", price: 0.99 }, 5);
products.set({ name: "Orange", price: 2.99 }, 7);
console.log(products);
console.log(products.size);
console.log(products.get({ name: "Apple" }));
console.log(products.has({ name: "Apple", price: 1.99 }));
// console.log(products.keys());
// console.log(products.values());
// console.log(products.entries());
products.delete({ name: "Apple", price: 1.99 });
console.log(products);

products.set({ name: "Orange", price: 3.99 });
console.log(products);

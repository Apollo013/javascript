const set = new Set();

set.add("John");
set.add(32);
set.add(["reading", "movies", "sports"]);
set.add(false);
set.add({
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zip: "02101",
});

console.log(set);
console.log(set.size);
console.log(set.has("John"));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
console.log(set.delete("John"));
console.log(set);
console.log("---");
console.log("");

console.log(set.clear());
console.log(set);
console.log(set.size);
console.log(set.has("John"));
console.log("---");
console.log("");

let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10];
let set2 = new Set(arr);
console.log(set2);
console.log(set2.size);
const arr2 = Array.from(set2.values());
console.log(arr2);
console.log("---");
console.log("");

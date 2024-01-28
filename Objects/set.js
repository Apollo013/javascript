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

console.log(set.clear());
console.log(set);
console.log(set.size);
console.log(set.has("John"));

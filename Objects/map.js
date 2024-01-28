const map = new Map();

map.set("name", "John");
map.set("age", 32);
map.set("hobbies", ["reading", "movies", "sports"]);
map.set("isMarried", false);
map.set("address", {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zip: "02101",
});

console.log(map);
console.log(map.size);
console.log(map.get("name"));
console.log(map.has("name"));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

map.delete("name");
console.log(map);
console.log(map.size);
console.log(map.get("name"));
console.log(map.has("name"));

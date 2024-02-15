function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765

let n = 9;
console.log(n.toString(2));

let a = (b = 0);
console.log(a, b);

console.log(("str1,str2,str3,str4".match(/,/g) || []).length);

console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length);

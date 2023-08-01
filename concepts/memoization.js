// Run with Quokka

/* ---------------------------------------
 Basic Example
--------------------------------------- */
function processIntensiveFunction(n) {
    console.log("long time");
    return n + 80;
}

console.log(processIntensiveFunction(5));
console.log(processIntensiveFunction(5));
console.log(processIntensiveFunction(5));

// instead do this

const cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("long time");
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

/* ---------------------------------------
 Closures
--------------------------------------- */
function closureMemoizedAddTo80() {
    const cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long time");
            cache[n] = n + 80;
            return cache[n];
        }
    };
}

const closureMemoize = closureMemoizedAddTo80();
console.log(closureMemoize(5));
console.log(closureMemoize(5));

/* ---------------------------------------
 Decorator Pattern
--------------------------------------- */
const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (args.toString() in cache) {
            console.table(cache);
            return cache[args.toString()];
        }

        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    };
};

const multipleBy10 = (num) => num * 10;
const add3 = (num1, num2, num3) => num1 + num2 + num3;
const addMany = (...args) => args.reduce((acc, curr) => acc + curr);

const memoizeMultiplyBy10 = memoize(multipleBy10);
console.log(memoizeMultiplyBy10(3));
console.log(memoizeMultiplyBy10(3));
console.log(memoizeMultiplyBy10(43));
console.log(memoizeMultiplyBy10(43));

const memoizeAdd3 = memoize(add3);
console.log(memoizeAdd3(3, 2, 1));
console.log(memoizeAdd3(3, 2, 1));
console.log(memoizeAdd3(10, 10, 10));
console.log(memoizeAdd3(10, 10, 10));

const memoizeAddMany = memoize(addMany);
console.log(memoizeAddMany(33, 12, 51));
console.log(memoizeAddMany(33, 12, 51));
console.log(memoizeAddMany([30, 50, 70, 90]));
console.log(memoizeAddMany([30, 50, 70, 90]));

/* ---------------------------------------
 Recursion - fibonacci
--------------------------------------- */
/*
const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
};

const memoizeFib = memoize(fib);
console.log(memoizeFib(40));
console.log(memoizeFib(40));
console.log(memoizeFib(40));

console.log(fib(40));
console.log(fib(40));
console.log(fib(40));
*/

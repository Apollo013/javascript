/* ---------------------------------------
Example 1 
--------------------------------------- */
// Core functionality
let sum = (...args) => [...args].reduce((acc, num) => acc + num);

// Decorator
const callCounter = (fn) => {
    let count = 0;

    return (...args) => {
        count++;
        console.log(`sum has been called ${count} times`);
        return fn(...args);
    };
};

const callSumCounter = callCounter(sum);
callSumCounter(1, 4, 5);
callSumCounter(15, 43, 65);

/* ---------------------------------------
Example 2 
--------------------------------------- */
// Core functionality
let calculateRectangleArea = (length, width) => length * width;

// Decorator
const validateParameters = (fn) => {
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }

        return fn(...params);
    };
};

//calculateRectangleArea = validateParameters(calculateRectangleArea);
//console.log(calculateRectangleArea(2, 3));
//console.log(calcRectangle(2));

const requiresIntegers = (fn) => {
    return (...params) => {
        params.forEach((param) => {
            if (!Number.isInteger(param)) {
                throw new Error(`Parameters for ${fn.name} must be integer`);
            }
        });
        return fn(...params);
    };
};

calculateRectangleArea = validateParameters(calculateRectangleArea);
calculateRectangleArea = requiresIntegers(calculateRectangleArea);
console.log(calculateRectangleArea(2, 3));
console.log(calculateRectangleArea(2, "3"));
console.log(calculateRectangleArea(2));

/* ---------------------------------------
Example 3 
Decorator Pattern
--------------------------------------- */
// Core functionality
const multipleBy10 = (num) => num * 10;
const add3 = (num1, num2, num3) => num1 + num2 + num3;
const addMany = (...args) => args.reduce((acc, curr) => acc + curr);

// Decorator
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

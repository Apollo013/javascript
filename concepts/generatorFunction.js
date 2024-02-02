const getFunction = function* () {
    yield 1;
    yield 2;
    yield 3;
};

const generator = getFunction();
const result = generator.next();

console.log(result);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(result);

let obj = {
    start: 1,
    end: 5,
    *[Symbol.iterator]() {
        for (let cnt = this.start; cnt <= this.end; cnt++) {
            yield cnt;
        }
    },
};

console.log([...obj]);

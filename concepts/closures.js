// Run with Quokka

/* ---------------------------------------
 Example 1
--------------------------------------- */
// The Problem
function heavyDutyArray(index) {
    const bigArray = new Array(7000).fill("A");
    console.log("Big Array Created");
    return bigArray[index];
}

heavyDutyArray(688);
heavyDutyArray(689);
heavyDutyArray(690);

// With Enclosure
function heavyDutyArray2() {
    const bigArray = new Array(7000).fill("A");
    console.log("Big Array Closure Created"); // CREATED ONCE

    const getIndex = (index) => {
        return bigArray[index];
    };

    return { getIndex };
}

const getHeavyDutyArray2 = heavyDutyArray2();
console.log(getHeavyDutyArray2.getIndex(688));
getHeavyDutyArray2.getIndex(689);
getHeavyDutyArray2.getIndex(690);

/* ---------------------------------------
 Example 2
--------------------------------------- */
// The Problem
let carModel = "Honda",
    speed = 0;

function increaseSpeed() {
    speed += 10;
    console.log(`${carModel} is now travelling at ${speed} mph`);
}

function decreaseSpeed() {
    speed -= 10;
    speed = speed < 0 ? 0 : speed;
    console.log(`${carModel} is now travelling at ${speed} mph`);
}

// With Enclosure
function car(carModel) {
    const model = carModel;
    let speed = 0;

    function increaseSpeed() {
        speed += 10;
        console.log(`${model} is now travelling at ${speed} mph`);
    }

    function decreaseSpeed() {
        speed -= 10;
        speed = speed < 0 ? 0 : speed;
        console.log(`${model} is now travelling at ${speed} mph`);
    }

    return { increaseSpeed, decreaseSpeed };
}

let hondaCar = car("Honda");
hondaCar.increaseSpeed();
hondaCar.increaseSpeed();
hondaCar.decreaseSpeed();

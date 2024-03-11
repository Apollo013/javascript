const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async operation 1...");
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        // console.log("Async operation 2...");
        resolve(2);
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async operation 3...");
        reject(3);
    }, 2000);
});

Promise.all([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

Promise.allSettled([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

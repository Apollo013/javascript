/* ---------------------------------------
 Example 1
 Passing a function as an arguement
--------------------------------------- */
const oneToFive = [1, 3, 2, 5, 4];
const oddToFive = oneToFive.filter((num) => num % 2 != 0);
console.log(oddToFive);

const doubled = oneToFive.map((num) => num * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, num) => acc + num);
console.log(summed);

const reverseSort = oneToFive.sort((prev, curr) => {
    if (prev == curr) return 0;
    if (prev > curr) return -1;
});

console.log(reverseSort);

/* ---------------------------------------
 Example 2
 Returning a function as a result
--------------------------------------- */
/*
<HTML CODE>

<button onClick='handleClick12'>12px</button>
<button onClick='handleClick16'>16px</button>
<button onClick='handleClick20'>20px</button>
*/

let handleClick12 = () => (document.body.style.fontSize = "12px");
let handleClick16 = () => (document.body.style.fontSize = "16px");
let handleClick20 = () => (document.body.style.fontSize = "20px");

// Using a HOF

const handleFontChange = (size) => {
    return () => {
        document.body.style.fontSize = `${size}px`;
    };
};

handleClick12 = handleFontChange(12);
handleClick12 = handleFontChange(16);
handleClick12 = handleFontChange(20);

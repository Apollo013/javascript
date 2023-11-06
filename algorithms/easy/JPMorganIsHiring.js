// IN: JPMORGANISHIRING, 3
// OUT: JRIRPOGNSIIGMAHN

// OUT: JRIR POGNSIIG MAHN
// J   R   I   R
// P 0 G N S I  I  G
// M   A   H   N

module.exports = {
    run: (inputString, rows) => {
        let direction = -1;
        let currentRow = 0;
        let maxRows = rows - 1;
        let map = {};

        for (let i = 0; i < inputString.length; i++) {
            if (!map[currentRow]) {
                map[currentRow] = [inputString[i]];
            } else {
                map[currentRow].push(inputString[i]);
            }

            if (currentRow === 0) {
                direction = 1;
            }

            if (currentRow === maxRows) {
                direction = -1;
            }

            currentRow += direction;
        }

        return Object.values(map).flat().join("");
    },
};

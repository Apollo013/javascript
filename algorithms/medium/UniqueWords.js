/*
Given an array of string arrays, find all the unique words that only appear in a single array
input:  [['hello', 'goodbye', 'alpha'], ['alpha, 'bravo', 'bravo']]
output: ['hello', 'goodbye', 'bravo']
*/

module.exports = {
    run: (matrix) => {
        const set = new Set(matrix.flat());
        let wordCount = 0;

        for (const word of set) {
            wordCount = 0;
            for (const innerArray of matrix) {
                if (innerArray.indexOf(word) >= 0) {
                    wordCount++;
                }
                if (wordCount > 1) {
                    set.delete(word);
                    break;
                }
            }
        }

        return Array.from(set);
    },
};

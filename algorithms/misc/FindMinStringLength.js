/*
Given a string, seq, that consists of the characters 'A' and 'B' only, in one move, delete either an 'AB' or 'BB' substring and concatenate the remaining substrings

Find the minimum possible length of the remaing string after performing any number of moves
*/
function getMinLength(seq) {
    let result = seq;
    let i = 0;
    while (i < result.length) {
        if (result[i] === "A" && result[i + 1] === "B") {
            result = result.slice(0, i) + result.slice(i + 2);
            i = 0;
        } else if (result[i] === "B" && result[i + 1] === "B") {
            result = result.slice(0, i) + result.slice(i + 2);
            i = 0;
        } else {
            i++;
        }
    }

    return result.length;
}

function getMinLength1(seq) {
    if (!seq) {
        return 0;
    }

    if (seq.length < 2) {
        return seq.length;
    }

    let idx = seq.indexOf("AB");
    if (idx > -1) {
        return getMinLength1(seq.slice(0, idx) + seq.slice(idx + 2));
    } else {
        idx = seq.indexOf("BB");
        if (idx > -1) {
            return getMinLength1(seq.slice(0, idx) + seq.slice(idx + 2));
        } else {
            return seq.length;
        }
    }
}

//console.log(getMinLength("BAAABAB"));
console.log(getMinLength1("BAAABAB"));
console.log(getMinLength1("BBABAA"));
console.log(getMinLength1("ABABAB"));
console.log(
    getMinLength1(
        "ABABABABAAAAAAAAAAAAAAAAAAAAAABABABABBBBBBABABABABABABABABBABABABABBBABABABABBAAABABBBABAAABABABABABABABAAAAAAAAAAAAAAAAAAAAAABABABABBBBBBABABABABABABABABBABABABABBBABABABABBAAABABBBABAAABABABABABABABAAAAAAAAAAAAAAAAAAAAAABABABABBBBBBABABABABABABABABBABABABABBBABABABABBAAABABBBABAAABABABABABABABAAAAAAAAAAAAAAAAAAAAAABABABABBBBBBABABABABABABABABBABABABABBBABABABABBAAABABBBABAAABABAB"
    )
);

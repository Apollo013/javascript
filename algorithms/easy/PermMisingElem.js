// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

function solution(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    return ((A.length + 1) * (A.length + 2)) / 2 - sum;
}

console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([2, 3, 1, 5, 6])); // 4
console.log(solution([2, 3, 1, 5, 6, 7])); // 4
console.log(solution([22, 23, 21, 25, 26, 27, 28]));
console.log(solution([2])); // 1
console.log(solution([1])); // 2
console.log(solution([200, 202, 206, 204, 203, 201])); // 205
// Recursive solution - not dynamic programming
// function fib(n){
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

//Memoization defined: 
//storing the results of expensive function calls in a structure (array, object, etc)
// and returning the cached result when the same inputs occur again.

// Memo-uzed solution where we store the answer of fib(n) in memo[n].
// So answer of fib(3) stored in third index of array memo, memo[3]
// function fib_memoization(n, memo=[]){
//     if(memo[n] !== undefined) return memo[n];
//     if(n <= 2) return 1;
//     let result = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = result; // whenever a function call resolves, we will store the result in the array
//     return result;
// }

// Optimization with prebuilt memo array with indices 0,1, and 2. I then remove the base case.
function fib_memoization(n, memo=[undefined,1,1]){
    if(memo[n] !== undefined) return memo[n];
    let result = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = result; // whenever a function call resolves, we will store the result in the array
    return result;
}


//Tabulation is a bottom-up approach.
    // Storing the result of a previous result in a ‘table’ (usually an array)
    // Usually done using iteration
    // Better space complexity can be achieved using tabulation


function fib_tabulation(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1]; // first three numbers in fibonacci sequence
    for (let i = 3; i <= n; i++){
        // Working from bottom up, fill in the fibNums 'table' until you get to the n index
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}
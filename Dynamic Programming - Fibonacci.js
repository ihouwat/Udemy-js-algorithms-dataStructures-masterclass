// Recursive solution - not dynamic programming
// function fib(n){
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// Memo-uzed solution where we store the answer of fib(n) in memo[n].
// So answer of fib(3) stored in third index of array memo, memo[3]
function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let result = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = result; // whenever a function call resolves, we will store the result in the array
    return result;
}
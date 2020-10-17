// 1. Understand the problem
// Input is num. Say fibonacci sequence was an array called fib, find fib[num]
// Labels: function fib()

// 2. Explore concrete examples
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465 

// 3. Break it down
// Base cases: fib(2) and fib(1) will always equal to 1, since they are the first two numbers
//             fib(4) = 3
//     fib(3)    +     fib(2)
//       2       +       1 
// fib(2)+fib(1)    
//    1 +   1          

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

fib(4)

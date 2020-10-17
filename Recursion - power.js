// 1. understand the problem
// Function takes two integers. The first is a base, the second an exponent. Return the power of the base to the exponent.
// No need to worry about negative numbers
// Labels: function power (base,exponent)

// 2. explore concrete examples
// power(2,0) // 1
// power(2,2) // 4

// if exponent = 0 return 1
// return base * power(base, exponent - 1)

// return 2 * power(2,3)
//     return 2 * power(2,2)
//         return 2 * power(2,1)
//             return 2 * power(2,0)
// 1

// 3. Break it down
// Base case is 0. Return 1 in this case
// Start with 
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
power(2,4) // 16

// Iterative approach
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive approach
function factorial(num){
    if(num === 1 || num === 0) return 1;
    return num * factorial(num-1);
}
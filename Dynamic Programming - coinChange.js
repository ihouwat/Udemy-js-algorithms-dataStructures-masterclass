// function coinChange accepts two parameters: an array of denominations and a value
// The function returns the number of ways you can obtain a value from the denominations collection.
// This is like figuring out the number of ways to make change for a given value from a supply of coins

// See here for more on dynamic programming: https://www.geeksforgeeks.org/solve-dynamic-programming-problem/

// SOLUTION: https://medium.com/@omergoldberg/algorithms-in-js-making-change-bc5dec257e97
// ANOTHER SOLUTION: https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/

var denominations = [1,5,10,25];

function coinChange(denominations, amount) {
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        // we can only start returning change with coins in our denominations
        var coin = denominations[j];
        
        // we start bottom up, each time reducing change amount with curr coin.
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

// coinChange(denominations, 1) // 1
// coinChange(denominations, 2) // 1
// coinChange(denominations,5) // 2
// coinChange(denominations, 10) // 4
// coinChange(denominations, 25) // 13
// coinChange(denominations, 45) // 39
// coinChange(denominations, 100) // 242
// coinChange(denominations, 145) // 622
// coinChange(denominations, 1451) // 425663
// coinChange(denominations, 14511) // 409222339
coinChange(denominations, 11)
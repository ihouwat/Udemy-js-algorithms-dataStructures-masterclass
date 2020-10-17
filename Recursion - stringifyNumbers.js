// 1. Understand the problem
// Find all the numbers in an object and turn them into strings
// Input: object with various levels of nesting
// Output: object with similar key-value pairs but numbers are strings
// Labels: function stringifyNumbers(obj)
//     newObject to recreate the original object but with stringified numbers

// 2. Explore concrete examples

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// 3. Break it down
// Copy the object with spread operator
// Go through each key-value pair
//     if the value is a number, turn to string

// 4. Solve and simplify
function stringifyNumbers(obj) {
    let newObj = {};
    for(let key in obj) {
        if(typeof(obj[key]) === 'number') { // if a number, turn to string
            newObj[key] = obj[key].toString();
        }
        else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) { // if an object but not an array, check the object recursively
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else {
          newObj[key] = obj[key]; // else just a straight copy
        }
      }

    return newObj;
}
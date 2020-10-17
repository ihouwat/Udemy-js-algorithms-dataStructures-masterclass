// 1. Understand the problem
// Find all even numbers in an object and return their sum
// Inputs: object with nesting
// Outputs: sum of all even numbers
// Labels: function nestedEvenSum(obj)
//     Do I need a helper?

// 2. Explore concrete examples
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj2); // 10

// 3. Break it down
// Do I need to loop?
// If a key-value pair is an even number, ++
// If a key-value pair is an object recursively look at its next level

function nestedEvenSum (obj) {
  let result = 0;
  
  function helper(helperInput) {
    for (const [key, value] of Object.entries(helperInput)) {
      if(typeof(value) === 'object'){ 
        helper(value);
      }
      else if (typeof(value) === 'number' && value % 2 === 0) {
        result = result + value;
      }
    }
  }

  helper (obj);

  return result;

}

// nestedEvenSum(obj1); // 6

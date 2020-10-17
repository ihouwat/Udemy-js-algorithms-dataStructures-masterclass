// Pure method
// function collectStrings(obj) {
//     let newArray = [];
//     for (let key in obj) {
//         if(typeof(obj[key]) === 'string'){
//             newArray.push(obj[key]);
//         }
//         else if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key])){
//             newArray = newArray.concat(collectStrings(obj[key]));
//         }
//     }
//     return newArray;
// }

// Helper method
function collectStrings(object) {
    let newArray = [];
    
    function helper (obj) {
     for (let key in obj) {
        if(typeof(obj[key]) === 'string'){
            newArray.push(obj[key]);
        }
        else if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key])){
            newArray = newArray.concat(collectStrings(obj[key]));
        }
      }
    }

    helper(object);
   
    return newArray;
}

var object = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(object) // ["foo", "bar", "baz"])
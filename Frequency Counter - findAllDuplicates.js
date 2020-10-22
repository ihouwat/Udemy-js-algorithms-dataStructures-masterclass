// Given an array of positive integers, some elements appear twice, others once. Find all
// elements that appear twice and return in an array. Order does not matter.
// findAllDuplicates([4,3,2,7,8,2,3,1]) array with 2 and 3
// findAllDuplicates([4,3,2,1,0]) // []
// findAllDuplicates([4,3,2,1,0,1,2,3]) // array with 3,2, and 1
function findAllDuplicates(arr){
    let lookup = {};
    let duplicates = [];
    for(let i = 0; i < arr.length; i++){
        lookup[arr[i]] ? lookup[arr[i]] ++ : lookup[arr[i]] = 1;
    }
    for (let key in lookup){
        if(lookup[key] > 1) duplicates.push(Number(key));
    }
    return duplicates;
}

findAllDuplicates([4,3,2,1,0,1,2,3]) // array with 3,2, and 1



function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    // if array is empty, return 0
    if (arr.length === 0) {
        return i;
    }
    else {
        do {
           if (arr[j] !== arr[i]) {
                arr[i + 1] = arr[j];
                i++;
           }
           j++;
        }
        
        while(j <= arr.indexOf(arr[arr.length - 1]));
        
        return i + 1;
    }
    
}

countUniqueValues([1,1,1,2,3])

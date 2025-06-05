function lastOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let lastindex = -1;

    while(low <= high) {
        let mid = Math.floor((low + high)/ 2);

        if(arr[mid] === target) {
            lastindex = mid;
            low = mid + 1;
        } else if (arr[mid])
    }
}


console.log(lastOccurrence([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 4
console.log(lastOccurrence([3, 4, 13, 13, 13, 20, 40], 60)); // Output: -1
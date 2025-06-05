function insertionSort(arr) {
    let n=arr.length;
    for(let i=1;i<arr.length;i++) {
        let min = arr[i];
        let j = i -1;

        while(arr[j]> min) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = min
    }
    return arr
}

let arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(arr));  
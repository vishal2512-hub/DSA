function binarySearch(arr, X) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === X) return mid;
      else if (arr[mid] < X) left = mid + 1;
      else right = mid - 1;
    }
  
    return -1;
  }
  

let arr = [1, 3, 5, 7, 9, 11], X = 7;
console.log(binarySearch(arr, X)); 

function SearchPosition(arr, x) {

    let n = arr.length;
    let low = 0, high = n - 1;
    let floor = -1, ceiling = -1;

    //floor 
    while(low <= high) {
        let mid = Math.floor((low + high) /2); 
        if(arr[mid] <= x) {
            floor = arr[mid];
            low = mid +1;
        }  else {
            high = mid - 1;
        }
    }

    low = 0;
    high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= x) {
          ceiling = arr[mid];
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return [ floor , ceiling]
}
let  arr = [3, 4, 4, 7, 8, 10] , x = 5;
console.log(SearchPosition(arr, x));

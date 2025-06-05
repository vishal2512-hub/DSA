
function lowerBound(arr, n, x) {
  for (let i = 0; i < n; i++) {
      if (arr[i] >= x) {
          // lower bound found:
          return i;
      }
  }
  return n;
}

let arr = [3, 5, 8, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);


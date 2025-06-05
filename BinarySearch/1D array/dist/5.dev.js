"use strict";

function lastOccurrence(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var lastindex = -1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      lastindex = mid;
      low = mid + 1;
    }
  }
}

console.log(lastOccurrence([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 4

console.log(lastOccurrence([3, 4, 13, 13, 13, 20, 40], 60)); // Output: -1
"use strict";

function lowerBound(arr, n, x) {
  for (var i = 0; i < n; i++) {
    if (arr[i] >= x) {
      // lower bound found:
      return i;
    }
  }

  return n;
}

var arr = [3, 5, 8, 15, 19];
var n = 5,
    x = 9;
var ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);
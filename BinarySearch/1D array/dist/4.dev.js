"use strict";

function SearchPosition(arr, x) {
  var n = arr.length;
  var low = 0,
      high = n - 1;
  var floor = -1,
      ceiling = -1; //floor 

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (arr[mid] <= x) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  low = 0;
  high = n - 1;

  while (low <= high) {
    var _mid = Math.floor((low + high) / 2);

    if (arr[_mid] >= x) {
      ceiling = arr[_mid];
      high = _mid - 1;
    } else {
      low = _mid + 1;
    }
  }

  return [floor, ceiling];
}

var arr = [3, 4, 4, 7, 8, 10],
    x = 5;
console.log(SearchPosition(arr, x));
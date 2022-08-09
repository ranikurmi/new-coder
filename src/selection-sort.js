module.exports = {
  selection_sort,
};
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selection_sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minVal = Infinity;
    var minValIndex = 0;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minValIndex = j;
        minVal = arr[j];
      }
    }
    swap(arr, i, minValIndex);
  }
  return arr;
}

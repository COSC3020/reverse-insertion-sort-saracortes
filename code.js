function insertionSortReverse(array) {
  for(var i = array.length - 2; i >= 0; i--) {
    var val = array[i];
    var j = i;
    while (j < array.length - 1 && array[j + 1] < val) {
      array[j] = array[j-1];
      j++;
    }
    array[j] = val;
  }
  return array;
}

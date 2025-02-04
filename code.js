function insertionSortReverse(array) {
    for(var i = arr.length - 2; i >= 0; i--) {
      var val = array[i];
      var j;
      for(j = i; j < arr.length - 1 && arr[j + 1] < val; j++) {
        array[j] = array[j-1];
      }
      array[j] = val;
    }
    return array;
  }

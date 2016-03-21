Array.prototype.swap = function(x,y){
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

function selection_sort(arr){
    for(var i = 0; i<arr.length-1; i++){
        for(var j = i+1;j<arr.length; j++){
            if(arr[i] > arr[j]){ arr.swap(i,j)}
        }
    }
    return arr;
}

selection_sort([5,2,7,1,9])


function compare(a,b){
  return a-b;
}

function selectionSort(arr, cmp){
  cmp = cmp || compare;
  var min;
  var idx;
  var temp;
  for(var i = 0; i < arr.length; i++){
    idx = i;
    min = arr[i];
    for(var  j = i+1;j<arr.length;j++){
      if(cmp(min,arr[j])>0){
        min = arr[j];
        idx = j;
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[idx] = temp;
  }
  return arr;
}

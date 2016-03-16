Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

function bubble_sort(arr){
    for(var i = arr.length-1; i>=1; i--){
        for(var j = 0; j<i;j++){
            if(arr[j] > arr[j+1]){
               arr.swap(j, j+1);
            }
        }
    }
    return arr
}

bubble_sort([2,4,1,6,5])

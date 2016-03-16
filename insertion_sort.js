Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

function insertion_sort(arr){
   for(var i = 1; i<arr.length; i++){
       var j = i-1;
       while(j>=0 && arr[j] > arr[j+1]){
           arr.swap(j,j+1)
           j--;
       }
   }
   return arr;
}

insertion_sort([5,2,8,1,3])

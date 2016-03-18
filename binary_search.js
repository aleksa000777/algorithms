// The following code returns the index of the first occurence of target in arr,
// or the insertion index if target is not part of the array.


function searchInsert(arr,target){
    if(arr.length == 0 || arr[0] >= target) return 0;
    var l = 0;
    var r = arr.length;
    while(r-l > 1){
        var  mid = parseInt((r-l)/2) + l;
        if(arr[mid] >=target) {
            r=mid;
        }
        else{ l = mid;}
    }
   return r;
}

searchInsert([1,2,4,5,6],9)


function binary_search(items, value){
  var startIndex = 0;
  var stopIndex = items.length-1;
  var middle = Math.floor((stopIndex + startIndex)/2);

  while(items[middle] != value && startIndex < stopIndex){
    if(value < items[middle]){
      stopIndex = middle - 1;
    }
    else if(value > items[middle]){
      startIndex = middle + 1;
    }
    middle = Math.floor((stopIndex + startIndex)/2);
  }
  return (items[middle] != value) ? -1 : middle;  
}

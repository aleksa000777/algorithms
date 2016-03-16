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

// Quicksort is a recursive algorithm that uses the divide-and-conquer approach to split the problem into subproblems,
// solve them recursively, and then combine the solution.
// Quicksort works by first partitioning the array around a value vv.
// This means shuffling the array so that all elements <v<v are one side of the array, and all elements ≥v≥v are on the other side.
// Once we have that, we know the final resting place for vv.
// It now remains to recursively sort the left and right partitions.


Array.prototype.swap = function(x,y){
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

// Partition the array `arr` between `a` and `b` such that
// m = partition(arr, val, a, b) &&
//   a <= i <= m --> arr[i] < val &&
//   m < i <= b --> arr[i] >= val


function partition(arr, val, a, b){
    var m = a-1;
    for(var i = a; i<=b;i++){
        if(arr[i] < val){
            m++;
            arr.swap(i,m)
        }
    }
    return m;
}

function quicksort(arr){
    quicksortAux(arr,0,arr.length-1);
    return arr;
}

function quicksortAux(arr, l, r ){
    if(l >= r){
        return;
    }
    var m = partition(arr, arr[l], l+1, r);
    arr.swap(l,m);
    quicksortAux(arr,l,m-1);
    quicksortAux(arr,m+1,r);
}

quicksort([4,1,7,2,3])

// Mergesort also works recursively – it splits the array into two sub-arrays, mergesorts them recursively,
// and then merges the two sub-arrays into one.
// The key is the merge function, which given two sorted arrays, interleaves them together to produce a third sorted array.

function mergeSort(arr){
    if(arr.length < 2) return arr;
    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle,arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result =[];

    while(left.length && right.length){
        if(left[0] <=right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }
    }

    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result
}

mergeSort([4,2,8,5,7,1])

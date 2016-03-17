// Supposed a sorted array has been rotated by an unknown integer k. 
// We can also binary search on this array.

function search(arr,target){
    var l = 0;
    var r = arr.length-1;

    while(l<=r){
        var mid = parseInt((r-l)/2) + l;
        console.log(mid)
        if(arr[mid] === target) return mid;

        if(arr[l] <=arr[mid]){  // left half in increasing order
            if(target<arr[mid] && target >=arr[l]) r=mid-1;
            else l=mid+1;
        }
        else{   // right half must be in increasing order
            if(target>arr[mid] && target<=arr[r]) r=mid+1;
            else r=mid-1;
        }
    }
    return -1;
}

search([1,3,5,6],6)

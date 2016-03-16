function searchInsert(arr, target){
    if(arr.length === 0 || arr[0] >=target) return 0;

    var l = 0;
    var r = arr.length;

    while(r-l > 1){
        var mid = parseInt((r-l)/2) + l;
        if(arr[mid] >= target) r = mid;
        else {
            l = mid;
        }
    }
    return r;
}

searchInsert([1,4,5,6,7], 8)

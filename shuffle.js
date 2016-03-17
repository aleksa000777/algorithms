function shuffle(arr){
    var size = arr.length;
    var rand;
    var temp;
    for(var i=0;i<size;i++){
        rand = Math.floor(i+Math.random()*(size-i));
        temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

shuffle([1,2,3,4,5,6])



function random_from_array(arr){
    var size = arr.length;
    var rand;
    var temp;
        rand = Math.floor(Math.random()*(size));
        temp = arr[rand];
    return temp;
}

shuffle([1,2,6])

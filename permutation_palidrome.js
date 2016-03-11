// Given a string , write a function to check if it is a permutation of a palidrome.
// A palidrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.

function permutation(str){
    var count=0;
    str=str.replace(/ /g,'').split('').sort();
    for(var i=0;i<str.length-1;i++){
        if(str[i]===str[i+1]){
            i++;
        }
        else{
            count++;
        }
    }
    if(count>1){
        return false;
    }
    else{return true;}
}

permutation("caca b")

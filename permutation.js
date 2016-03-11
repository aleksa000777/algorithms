// Check Permutation
// Given 2 strings, write a method to decide if one is a permutation of the other
function unic(str,permut){
    var result=true;
    if(str.length!==permut.length){
        result=false;
        return result;
    }
    str = str.split('').sort();
    permut = permut.split('').sort();
    binar(str,permut,result);
    return result;
}
function binar(array1,array2,result){
        for(var i=0;i<array1.length;i++){
            if(array1[i]===array2[i]){
            }
            else{
                result=false;
                return result;
            }
        }
        return result;
    }
unic("himyna","anihmyi")

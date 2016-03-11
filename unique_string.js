// Create a function that passes an array of strings. In this zero-index array,
// find the first unique string. The array is already sorted.


function unique(array){
	var uniqueStr = "";
	var temp = null;
    var count=0;
	for(var i = 0; i < array.length; i++){
		if(temp == array[i]){
			count=0;
			uniqueStr="";
		} else {
            count++;
            if(count>1){
                return array[i-1];
            }
			temp=array[i];
            uniqueStr+=temp

		}
	}
}
unique(['ab','ab','ab','cd','cd','de','ef','ef'])

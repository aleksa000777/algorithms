// Write a method to replace all spaces in a string with '%20'.
 // You may assume that the string has sufficient space at the end
 // to hold the additional characters

 function space(str){
    str=str.split('');
    for(var i=0;i<str.length-1;i++){
        if(str[i]===" "&& str[i+1]!=" " ){
            str[i]=str[i].replace(" ", "%20");
        }
    }
    return str.join('');
}
space("I was so happy to get results       ")

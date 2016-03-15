function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    var array = {
        open: ["(", "{", "["],
        close: [")", "}", "]"]
    };
    var open = [];
    var close = [];
    var result = 1;

    S=S.split('');
    for (var i = 0; i<S.length; i++){
        if(array.open.indexOf(S[i])>-1){
            open.push(array.open.indexOf(S[i]));
        }
        if(array.close.indexOf(S[i])>-1){
            close.push(array.close.indexOf(S[i]));
                if(close[0]!==null && close[0]==open.slice(-1)){
                        open.pop();
                        close.shift();

                }
                else{
                    result = 0;
                }
         }
         if(array.close.indexOf(S[0])>-1){return result=0;}
    }
    if(open.length!==close.length){return result=0;}
    return result;

}

solution("{{{{")

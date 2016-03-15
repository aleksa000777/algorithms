// A string S consisting of N characters is called properly nested if:
//
// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.
//
// Write a function:
//
// function solution(S);
// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
//
// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.
//
// Assume that:
//
// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(1) (not counting the storage required for input arguments).



function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    var array = {
        open: ["("],
        close: [")"]
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

                if(close[0]!==null && close[0]==open.slice(-1) && open.length>0){
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

function is_prime(n){
    if(n <=1) return false;
    for(var i = 2; i*i <=n; i++){
        if(n%i===0) return false
    }
    return true;
}

is_prime(7)

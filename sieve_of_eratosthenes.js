var eratosthenes = function(n){
  // eratosthenes algorithm to find all primes under n
  var array = [];
  var upperLimit = Math.sqrt(n);
  var output = [];

  // Make an array from 2 to (n-1)
  for(var i = 0; i<n; i++){
    array.push(true);
  }

  // Remove multiplies of primes starting from 2,3,5...
  for(var i = 2; i <= upperLimit; i++){
    if(array[i]){
      for(var j = i*i; j<n;j+=i){
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for(var i = 2; i<n; i++){
    if(array[i]){
      output.push(i);
    }
  }

  return output;
};

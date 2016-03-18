var Node = function(key,data){
  this.key = key;
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
};

//Constaract hash table
var Hashtable = function(){
  this.buckets = [];
  //the higher the bucket count; less likely for collisions.
  this.maxBucketCount = 100;
};

Hashtable.prototype.hashCode = function(val){
  var i;
  var hashCode = 0;
  var character;

  //if value to be hashed is already an integer, return it.
  if(val.length === 0 || val.length === undefined){
    return val;
  }
  for(i = 0;i<val.length;i++){
    character = val.charCodeAt(i);
    /*jshint -W016 */
    // << bitwise shift to arrow side
    hashCode = ((hashCode << 5) - hashCode)+character;
    // bit wise + like 0001101 & 1101010 = 0001000
    hashCode = hashCode & hashCode;
    /*jshint -W016 */
  }
  return hashCode;
};

//Puts data into the table based on hashed key value
Hashtable.prototype.put = function(key,data, hashCode){
  if(hashCode === undefined){
    hashCode = this.hashCode(key);
  }
  else if(hashCode.length > 0){
    hashCode = this.hashCode(hashCode);
  }
  hashCode = hashCode % this.maxBucketCount;

  var newNode = new Node(key, data);

  //No elem exist at hash/index for given key -> put in table
  if(this.buckets[hashCode]===undefined){
    this.buckets[hashCode] = newNode;
    return;
  }

  //Elem exists at hash/index for given key, but, same key -> overwrite
  if(this.buckets[hashCode].key === key){
    this.buckets[hashCode].data = data;
    return;
  }

  //Item exist at hash/index for key, but different key
  //handle collisions

  var first = this.buckets[hashCode];
  while (first.next !== undefined){
    first = first.next;
  }
  first.next = newNode;
  newNode.prev = first;
};


//Gets data from the table based on key

Hashtable.prototype.get = function(key, hashCode){
  if(hashCode === undefined){
    hashCode = this.hashCode(key);
  }
  else if(hashCode.length > 0){
    hashCode = this.hashCode(hashCode);
  }
  hashCode = hashCode % this.maxBucketCount;

  if(this.buckets[hashCode]===undefined){
    return undefined;
  }
  else if(
    this.buckets[hashCode].next === undefined &&
    this.buckets[hashCode].key === key
  ){
    return this.buckets[hashCode].data;
  }
  else{
    var first = this.buckets[hashCode];
    while(
      first !== undefined &&
      first.next !== undefined &&
      first.key !== key
    ){
      first = first.next;
    }

    if(first.key === key){
      return first.data;
    }
    else{
      return undefined;
    }
  }
};

Hashtable.prototype.remove = function (key, hashCode){
  if(hashCode === undefined){
    hashCode = this.hashCode(key)
  }
  else if( hashCode.length > 0){
    hashCode = this.hashCode(hashCode);
  }
  hashCode = hashCode % this.maxBucketCount;

  if(this.buckets[hashCode] === undefined){
    return undefined;
  }
  else if(this.buckets[hashCode].next === undefined){
    this.buckets[hashCode] = undefined;
  }
  else {
    var first = this.buckets[hashCode];

    while(
      first !==undefined &&
      first.next !== undefined &&
      first.key !== key
    ){
      first = first.next;
    }

    var removedValue = first.data;

    if(first.prev === undefined && first.next === undefined){
      first = undefined;
      return removedValue;
    }

    if(first.prev === undefined && first.next !== undefined){
      first.data = first.next.data;
      first.key = first.next.key;
      if(first.next.next !== undefined){
        first.next = first.next.next;
      }
      else{
        first.next = undefined;
      }
      return removedValue;
    }

    if(first.prev !== undefined && first.next === undefined){
      first.prev.next = undefined;
      first = undefined;
      return removedValue;
    }

    if(first.prev !== undefined && first.next !== undefined){
      first.prev.next = first.next;
      first.next.prev = first.prev;
      first = undefined;
      return removedValue;
    }

  }
};

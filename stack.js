function Stack(){
  this._size = 0;
  this._storage = {};
}

Stack.prototype.push = function(data){
  var size = ++this._size;
  this._storage[size] = data;
};

Stack.prototype.pop = function(){
  var size = this._size;
  var deletedData;

  if(size){
    deletedData = this._storage[size];

    delete this._storage[size];
    this._size--;

    return deletedData;
  }
}

Stack.prototype.isEmpty = function(){
  if(this._size===0){
    return true;
  }
  else return false;
}

Stack.prototype.isFull = function(){
  if(this._size==MAXSIZE) return true;
  else return false;
}

Stack.prototype.peek = function(){
  if(this._storage[this._size]) return this._storage[this._size];
  else return false;
}

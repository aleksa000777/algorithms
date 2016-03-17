var Node = function(data){
  this.data = data;
  this.next = null;
  this.prev = null;
};

var LinkedList = function(){
  this.first = null;
  this.last = null;
};

// add data to linked list
LinkedList.prototype.push = function(data){
  var node = new Node(data);
  if(this.first === null){
    this.first = this.last = node;
  }
  else{
    var temp = this.last;
    this.last = node;
    node.prev = temp;
    temp.next = node;
  }
};

// add data to the beginning of linked list
LinkedList.prototype.unshift = function(data){
  var node = new Node(data);
  if(this.first === null){
    this.first=this.last=node;
  }
  else{
    var temp = this.first;
    this.first = node;
    node.next = temp;
    temp.prev = node;
  }
};

// In order traversal of the linked list
// Callback which should be executed on each node.

LinkedList.prototype.inorder = function(callback){
  var temp = this.first;
  while(temp){
    callback(temp);
    temp = temp.next;
  }
};

//Remove data from the linked list
//Data which should be removed.
// return true if data has been removed

LinkedList.prototype.remove = function(data){
  if(this.first === null){
    return false;
  }
  var temp = this.first;
  var next;
  var prev;
  while(temp){
    if(temp.data === data){
      next = temp.next;
      prev = temp.prev;
      if(next){
        next.prev=prev;
      }
      if(prev){
        prev.next = next;
      }
      if(temp === this.first){
        this.first = next;
      }
      if(temp === this.last){
        this.last = prev;
      }
      return true;
    }
    temp = temp.next;
  }
  return false;
}


//Check if linked list contains cycle
//return true if it is
//this one not so clear :(

LinkedList.prototype.hasCycle = function(){
  var fast = this.first;
  var slow = this.first;
  while (true){
    if(fast === null){
      return false;
    }
    fast = fast.next;
    if(fast === null){
      return false;
    }
    fast = fast.next;
    slow = slow.next;
    if(fast === slow){
      return true;
    }
  }
}

//Return last node from the linked list.

LinkedList.prototype.pop = function(){
  if(this.last === null){
    return false;
  }
  var temp = this.last;
  this.last = this.last.prev;
  return temp;
};


//Return first node from the linked list

LinkedList.prototype.shift = function(){
  if(this.first === null){
    return null;
  }
  var temp = this.first;
  this.first = this.first.next;
  return temp;
};

//Reverses linked list recursevely

LinkedList.prototype.recursiveReverse = function(){
  function inverse(current, next){
    if(!next){
      return;
    }
    inverse(next,next.next);
    next.next = current;
  }

  if(!this.first){
    return;
  }
  inverse(this.first, this.first.next);
  this.first.next = null;
  var temp = this.first;
  this.first = this.last;
  this.last = temp;
};

//Reverses the linked list iteratively
LinkedList.prototype.reverse = function(){
  if(!this.first || !this.first.next){
    return;
  }
  var current = this.first.next;
  var prev = this.first;
  var temp;
  while(current){
    temp = current.next;
    current.next = prev;
    prev.prev = current;
    prev = current;
    current = temp;
  }
  this.first.next = null;
  this.last.prev = null;
  temp = this.first;
  this.first = prev;
  this.last = temp;
};

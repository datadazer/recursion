// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
  if(obj != NaN && obj != null && typeof obj !== 'string' && Object.prototype.toString.call(obj) !== "[object Array]")
    return obj.toString();

  else if(typeof obj === 'string'){
    return "\"" + obj + "\"";
  }
  else if(Object.prototype.toString.call(obj) === "[object Array]"){
    return "[" +obj+ "]";
  }
  
  else{
   return String(obj); 
  }

  // your code goes here
};

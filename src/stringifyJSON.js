// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = [];
  var i = 0;
  if(obj != NaN && obj != null && typeof obj !== 'string' && Object.prototype.toString.call(obj) !== "[object Array]")
    return obj.toString();

  else if(typeof obj === 'string'){
    return "\"" + obj + "\"";
  }
  else if(Object.prototype.toString.call(obj) === "[object Array]"){
    if(obj.length > 1 && i < obj.length){
      while(i < obj.length){
        result.push(stringifyJSON(obj[i]));
        i++;
      }
    }
    else{
      if(typeof obj[0] === 'string'){
        return "["+"\""+obj+"\""+"]";
      }
      return "[" +obj+ "]";
    }
    return "["+result+"]";
  }
  
  else{
   return String(obj); 
  }

  // your code goes here
};

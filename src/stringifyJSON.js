// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = [];
  var i = 0;
  if(obj != NaN && obj != null && typeof obj !== 'string' && Object.prototype.toString.call(obj) !== "[object Array]") //checks if able to perform .toString on obj
    return obj.toString();

  else if(typeof obj === 'string'){ //is obj a string?
    return "\"" + obj + "\"";
  }
  else if(Object.prototype.toString.call(obj) === "[object Array]"){ //is obj an array?
    if(obj.length > 1 && i < obj.length){ //does obj have more than one element in its list?
      while(i < obj.length){
        result.push(stringifyJSON(obj[i]));
        i++;
      }
    }
    else{//if it is an array with a length less than 1.
      if(typeof obj[0] === 'string'){//is the element inside array a string?
        return "["+"\""+obj+"\""+"]";
      }
      return "[" +obj+ "]";//if not a string.
    }
    return "["+result+"]"; // if obj was array.length > 1... return the while loop result from above.
  }
  
  else{
   return String(obj); //if it isn't any of the above types.
  }

};

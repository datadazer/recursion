// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = [];
  var stringNum = function(o){return String(o)}
  var stringNull = function(o){return String(o)}
  var stringBool = function(o){return String(o)}
  var stringString = function(o){return "\""+o+"\""}
  var stringArray = function(o){
    for(var i = 0; i < o.length; i++){
      if(o[i] !== undefined){
        result.push(stringifyJSON(o[i]));
      }
    }
      return "["+ result +"]"
    }

  if(obj === null || isNaN(obj) && typeof obj !== typeof "hi mom" && !Array.isArray(obj))
  {
    return stringNull(obj);
  }
  else if(typeof obj === typeof 123){
  return stringNum(obj);
  }
  else if(typeof obj === typeof true){
    return stringBool(obj);
  }
  else if(typeof obj === typeof "hi mom"){
    return stringString(obj);
  }
  else if(toString.call(obj) === "[object Array]"){
    return stringArray(obj);
  }
};

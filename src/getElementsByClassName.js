// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	var $body = $("body");
	var $p = $("p");
	var tempResult;
	tempResult = $body.slice();
	result.push(tempResult[0]);
	tempResult = $p.slice();
	result.push(tempResult[0]);
	return result;
};
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	var allNodes = document.body.childNodes;
		//if(document.body){
			result.push(document.body);
		for(var i=0; i < allNodes.length; i++){
			if(allNodes[i].className){
				result.push(allNodes[i])
			}
		//}
	}
	return result;
};
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	var allNodes = document.body.childNodes;
	step(document.body);
	function step(node){
		var children = node.childNodes;
		if(node.classList.toString() == className){
			result.push(node);
		}
		for(var i=0; i < children.length; i++){
			if(children[i].nodeType === 1){
				step(children[i]);
			}
	    }
	}
	return result;
};
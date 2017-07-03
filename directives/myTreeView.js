/*
<my-tree-view nodes="data.nodes" nodes-class="data.nodesClass"></my-tree-view>
 */
"use strict";
function directive(){
	return {
		restrict:"EA",
		template:require("./views/myTreeView.html"),
		replace:false,
		controller:function($scope){
			$scope.clickItem=function(item,nodes){
				item.isOpen=item.isOpen==true?false:true;
				if(item.clickFunc)
					item.clickFunc(item,nodes);
			}
		},
		scope:{
			nodes:"=nodes",
			nodesClass:"=nodesClass"
		}
	}
}
module.exports=directive;
function service(){
	this.test=function(){
		let test=[];
		this.pushItem(test,{a:1});
		this.pushItem(test,{a:2});
		this.pushItem(test,{a:3});
		console.log(test);
		console.log(this.findItem(test,{a:2},"a"));
		this.swap(test,0,1);
		console.log(test);
	}
	this.pushItem=function(dataSource,item){
		if(dataSource==undefined)
			dataSource=[];
		dataSource.push(item);
	}
	this.insertItem=function(dataSource,item,index){
		if(dataSource!=undefined)
			dataSource.splice(index,0,item);	
	}
	this.deleteItem=function(dataSource,index){
		if(dataSource!=undefined&&dataSource.length>=index+1){
			dataSource.splice(index,1);
		}
	}
	this.updateItem=function(dataSource,index,newItem){
		if(dataSource!=undefined&&dataSource.length>=index+1)
			dataSource.splice(index,1,newItem);
	}
	this.findItem=function(dataSource,item,attr){
		if(dataSource!=undefined){
			if(attr==undefined){
				return dataSource.indexOf(item);
			}
			else{
				let length=dataSource.length;
				for(let i=0;i<length;i++){
					if(dataSource[i][attr]==item[attr])
						return i;
				}
				return -1;
			}
		}
	}
	this.swap=function(dataSource,oldIndex,newIndex){
		if(dataSource!=undefined&&dataSource.length>oldIndex&&dataSource.length>newIndex){
			let temp=dataSource[oldIndex];
			dataSource.splice(oldIndex,1,dataSource[newIndex]);
			dataSource.splice(newIndex,1,temp);
		}
	}
	this.loadSubArr=function(dataSource,index,len){
		if(dataSource.length>=index+1){
			console.log(dataSource.slice(index,index+len));
			return dataSource.slice(index,index+len);
		}
	}
	this.pushInMutex=function(place,item){//自动处理(存在则删除，不存在则插入)
		if(place!=undefined){
			let index=place.indexOf(item);
			if(index>-1)//存在
				place.splice(index,1);
			else
				place.push(item);
		}
	}
}
module.exports=service;
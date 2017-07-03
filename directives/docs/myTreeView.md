# 树形展示menus

## menus-item-class 
```js
{
	openIcon:"", // 开启图标
	closeIcon:"", // 关闭图标
	itemClass:"", // 整个item的class
	textClass:"", // text上面的class
	leftIconClass:"", // 左部分classs
	rightIconClass:"", // 右部分icon class
}
```

## menus-item 
```js
{
	text:"",
	isOpen:true||false,	// 是否处于打开状态
	clickFunc:<func>, // 点击后触发事件`func(item,nodes);`
	children:[<menus-item>], // 子项目数组
	class:<menus-item-class> // 本节点class,*必须*
}
```

## menus-items-class 
*针对某一层节点*
```js
{
	class:<menus-item-class>, //本层menus class
	childClass:<menus-items-class > //子层menus class
}
```
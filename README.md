# slideFill
宽度全屏幻灯片插件 v0.1.0 (依赖于[jQuery](http://jquery.com/))


## 特性：

+ 手动点击切换

+ 自动切换

+ 鼠标移入暂停切换

+ 切换效果为淡入淡出

+ 支持AMD规范

## 使用：

引入js文件：

普通引入：
```
<script src="{yourURL}/slideFill.js"></script>
<script>
	slideFill.handSlide();
	slideFill.autoSlide();
	slideFill.mouseOverPause();
</script>
```

作为一个模块引入(AMD)：
```
<script>
//...
require(['{yourURL}/slideFill'], function ( slideFill ) {
	slideFill.handSlide();
	slideFill.autoSlide();
	slideFill.mouseOverPause();
});
//...
</script>
```

## Todo:

+ 增加可配置项，如切换时间间隔

+ 增加左右箭头



MIT

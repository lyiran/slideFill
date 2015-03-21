# slideFill
宽度全屏幻灯片插件 v0.1.0 (依赖于[jQuery](http://jquery.com/))


## 特性：

+ 手动点击切换

+ 自动切换

+ 鼠标移入暂停切换

+ 淡入淡出

+ 上一张下一张

+ 支持AMD规范

## 使用：

引入js文件：

普通引入：
```
<script src="{yourURL}/slideFill.js"></script>
<script>
    slideFill.init({
        // 手动切换，默认为true
        handSlide: true,
        // 自动切换，默认为false
        autoSlide: true,
        // 显示左右上一站下一张按钮，默认为false
        showPrevNextBtn: true,
        // 幻灯片自动切换间隔时长，默认为5000ms
        slideTime: 6000
    });
</script>
```

作为一个模块引入(AMD)：
```
<script>
//...
require(['{yourURL}/slideFill'], function ( slideFill ) {
    slideFill.init({
        // 手动切换，默认为true
        handSlide: true,
        // 自动切换，默认为false
        autoSlide: true,
        // 显示左右上一站下一张按钮，默认为false
        showPrevNextBtn: true,
        // 幻灯片自动切换间隔时长，默认为5000ms
        slideTime: 6000
    });
});
//...
</script>
```

## History:

 v0.1.1

 + 增加上一张下一张按钮

 + 按钮在鼠标移入时的效果调整

 + 增加可配置参数

 v0.1.0

 + 第一次提交

## Todo:

+ IE兼容测试

+ 增加切换效果



MIT

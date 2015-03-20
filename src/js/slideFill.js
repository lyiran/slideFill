/**
 * 宽度全屏幻灯片插件 v0.1.0
 * (依赖于jQuey)
 *
 * + 手动点击切换
 * + 自动切换
 * + 鼠标移入暂停切换
 * + 切换效果为淡入淡出
 * + 支持AMD规范
 *
 * @WalkerBe http://www.walkerbe.com/
 *
 * MIT
 */

(function ( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define(factory);
    } else {
        window.slideFill = factory();
    }
})(function () {

    var slideFill = $('#J-slide-fill'),
        slidePic = slideFill.find('.slide-pic li'),
        slideNum = slideFill.find('.slide-num li')
        ;

    var INDEX = 1;
    var timer = null;

    /**
     * 幻灯片切换
     * @param i
     * @param callback
     */
    function switchSlide ( i, callback ) {
        slideFill.find('.slide-pic .cur').fadeOut(800, function () {
            $(this).removeClass('cur');
        });
        slideNum.eq(i).addClass('cur').siblings().removeClass('cur');

        slidePic.eq(i).fadeIn(800, function () {
            slidePic.eq(i).addClass('cur');
            callback&&callback();
        });
    }


    /**
     * 手动切换
     */
    function handSlide () {
        for ( var i = 0, len = slideNum.length; i < len; i++ ) {
            (function (i) {
                slideNum.eq(i).click(function () {
                    switchSlide(i);
                    clearInterval(timer);
                    INDEX = i+1;
                });
            })(i);
        }
    }



    /**
     * 鼠标移入停止自动切换
     */
    function mouseOverPause () {
        slideFill.mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            autoSlide();
        });
    }


    /**
     * 自动切换
     * @param index
     */
    function autoSlide ( index ) {
        timer = setInterval(function () {
            if ( INDEX >= slidePic.length ) {
                INDEX = 0;
            }
            var _index = index || INDEX;
            switchSlide( _index, function () {
                INDEX++;
            });
        }, 3000);
    }

    return {
        handSlide: handSlide,
        autoSlide: autoSlide,
        mouseOverPause: mouseOverPause
    };
});
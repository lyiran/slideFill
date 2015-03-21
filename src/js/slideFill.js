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
        slideNum = slideFill.find('.slide-num li'),

        arrow = slideFill.find('.arrow'),
        arrowLeft = slideFill.find('.arrow-left'),
        arrowRight = slideFill.find('.arrow-right')
        ;

    var INDEX = 1;
    var timer = null;

    /**
     * 幻灯片切换
     * @param i
     * @param callback
     */
    function switchSlide ( i, callback ) {
        slideFill.find('.slide-pic .cur').stop().fadeOut(800, function () {
            $(this).removeClass('cur');
        });
        slideNum.eq(i).addClass('cur').siblings().removeClass('cur');

        slidePic.eq(i).stop().fadeIn(800, function () {
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
                    if ( $(this).hasClass('cur') ) return;
                    switchSlide(i);
                    clearInterval(timer);
                    INDEX = i+1;
                });
            })(i);
        }
    }

    /**
     * 上一张/下一张
     */
    function prevNextSlide () {
        slideFill.addClass('slide-fill-prevNext');
        arrowLeft.click(function () {
            switchSlide(INDEX-2, function () {
                INDEX--;
                if ( INDEX <=0 ) {
                    INDEX = slidePic.length;
                }
            });
        });
        arrowRight.click(function () {
            if ( INDEX >= slidePic.length ) {
                INDEX = 0;
            }
            switchSlide(INDEX, function () {
                INDEX++;
            });
        });
    }



    /**
     * 鼠标移入停止自动切换
     */
    (function mouseOverPause () {
        slideFill.mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            autoSlide();
        });
    })();


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
        }, _config.slideTime);
    }

    /**
     * 幻灯片调用入口及配置
     * @param {JSON} config
     */
    var _config = {};
    function init ( config ) {
        _config = {
            handSlide: true,
            autoSlide: false,
            showPrevNextBtn: false,
            slideTime: 5000
        };

        for ( var i in config ) {
            for ( var j in _config ) {
                if ( i == j ) {
                    _config[j] = config[i];
                }
            }
        }
        _config.handSlide&&handSlide();
        _config.autoSlide&&autoSlide();
        _config.showPrevNextBtn&&prevNextSlide();
        console.log(_config );

    }


    return {
        init: init
    };
});
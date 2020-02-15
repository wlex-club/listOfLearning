setTimeout(() => {
    console.log('setTimeout')
})

new Promise(() => {
    console.log('promise')
}).then(() => {
    console.log('then')
})
console.log('console')

function throttle(fn, delay) {
    var timer;
    return function () {
        var _this = this
        var args = arguments
        if (timer) return

        timer = setTimeout(function () {
            fn.apply(_this, args)
            timer = null
        }, delay)
    }
}

function Vue (options) {
    if (!(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
    }
    /* 调用原型上的_init方法, 进行初始化  */
    this._init(options);
}



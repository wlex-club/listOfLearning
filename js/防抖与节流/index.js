/**
 *  防抖
 * **/

function debounce(fn, delay) {
    let timer = null
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        fn.apply(this, arguments)
    }, delay)
}

/**
 *  节流
 * **/
function throttle(fn, cycle) {
    let start = Date.now()
    let now
    let timer
    return function () {
        now = Date.now()
        clearTimeout(timer)
        if (now - start >= cycle) {
            fn.apply(this, arguments)
            start = now
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, cycle)
        }
    }
}


